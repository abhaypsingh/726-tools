import {
    createExportBundle,
    executeBespokeUtility,
    outcomeToCsv,
    outcomeToMarkdown
} from './bespoke-utility-core.js';

function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
}

function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
}

async function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text);
        return true;
    }
    return false;
}

function defaultState(metadata) {
    return {
        contextInput: '',
        assumptionsInput: '',
        constraintsInput: '',
        result: null,
        validationError: '',
        history: [],
        selectedExportFormat: 'json',
        sampleInput: `${metadata.name} baseline:\n- Objective:\n- Current state:\n- Target outcome:`
    };
}

function composeInputPayload(state) {
    const blocks = [];
    const context = String(state.contextInput || '').trim();
    const assumptions = String(state.assumptionsInput || '').trim();
    const constraints = String(state.constraintsInput || '').trim();

    if (context) {
        blocks.push(context);
    }
    if (assumptions) {
        blocks.push(`Assumptions:\n${assumptions}`);
    }
    if (constraints) {
        blocks.push(`Constraints:\n${constraints}`);
    }

    return blocks.join('\n\n');
}

function renderMetrics(metrics) {
    if (!Array.isArray(metrics) || metrics.length === 0) {
        return '';
    }

    return `
        <div class="utility-tags" style="margin: 12px 0;">
            ${metrics.map(metric => `
                <span class="badge">${escapeHtml(metric.label)}: ${escapeHtml(metric.value)}</span>
            `).join('')}
        </div>
    `;
}

function renderSections(sections) {
    if (!Array.isArray(sections) || sections.length === 0) {
        return '';
    }

    return sections.map(section => `
        <div style="margin-top: 12px;">
            <h4 style="margin: 0 0 6px 0;">${escapeHtml(section.title)}</h4>
            <ul style="margin: 0 0 0 18px;">
                ${(Array.isArray(section.items) ? section.items : []).map(item => `
                    <li>${escapeHtml(item)}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function renderRecommendations(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return '';
    }

    return `
        <div style="margin-top: 12px;">
            <h4 style="margin: 0 0 6px 0;">Recommended Next Actions</h4>
            <ul style="margin: 0 0 0 18px;">
                ${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderHistory(history) {
    if (!Array.isArray(history) || history.length === 0) {
        return '';
    }

    return `
        <div class="card" style="margin-top: 20px;">
            <h3>Run History</h3>
            <div style="max-height: 240px; overflow-y: auto;">
                ${history.slice(-10).reverse().map((entry, index) => `
                    <div style="padding: 10px; border-bottom: 1px solid var(--color-neutral-200);">
                        <small>${escapeHtml(formatTimestamp(entry.timestamp))}</small>
                        <div style="margin: 6px 0;">${escapeHtml(entry.summary)}</div>
                        <button class="btn btn-ghost" data-history-index="${index}" type="button">Load Input</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderHelp(metadata) {
    const workflow = Array.isArray(metadata.workflow) ? metadata.workflow : [];
    const workflowHtml = workflow.slice(0, 4).map(step => `<li>${escapeHtml(step)}</li>`).join('');

    return `
        <ul>
            <li>${escapeHtml(metadata.intent || `Run ${metadata.name} to generate focused output.`)}</li>
            ${workflowHtml}
            <li>${escapeHtml(metadata.inputHint || 'Provide context and run the utility.')}</li>
        </ul>
    `;
}

function sanitizeMetadata(metadata) {
    return {
        id: metadata.id,
        name: metadata.name || metadata.id,
        category: metadata.category || 'general',
        description: metadata.description || `${metadata.name || metadata.id} utility`,
        complexity: metadata.complexity || 'intermediate',
        action: metadata.action || 'assist',
        archetype: metadata.archetype || 'coach',
        domain: metadata.domain || metadata.category || 'general',
        intent: metadata.intent || `${metadata.name || metadata.id} processes your input.`,
        workflow: Array.isArray(metadata.workflow) ? metadata.workflow : [],
        inputHint: metadata.inputHint || 'Describe your context and desired outcome.',
        focusTerms: Array.isArray(metadata.focusTerms) ? metadata.focusTerms : []
    };
}

function getHistoryEntry(history, reverseIndex) {
    if (!Array.isArray(history) || history.length === 0) {
        return null;
    }
    const index = history.length - 1 - reverseIndex;
    if (index < 0 || index >= history.length) {
        return null;
    }
    return history[index];
}

export function createBespokeUtility(rawMetadata) {
    const metadata = Object.freeze(sanitizeMetadata(rawMetadata));

    return {
        ...metadata,
        implementationStatus: 'implemented',

        init() {
            return defaultState(metadata);
        },

        render(container, state, setState) {
            const safeState = {
                ...defaultState(metadata),
                ...(state || {})
            };
            const result = safeState.result;

            container.innerHTML = `
                <div class="utility-workspace">
                    <div class="card" style="margin-bottom: 20px;">
                        <h3>${escapeHtml(metadata.name)} Workspace</h3>
                        <p>${escapeHtml(metadata.description)}</p>
                        <div class="utility-tags" style="margin: 12px 0;">
                            <span class="badge">${escapeHtml(metadata.category)}</span>
                            <span class="badge">${escapeHtml(metadata.archetype)}</span>
                            <span class="badge">${escapeHtml(metadata.complexity)}</span>
                        </div>

                        <div class="form-group">
                            <label class="label" for="bespoke-context-input">Context</label>
                            <textarea
                                class="textarea"
                                id="bespoke-context-input"
                                placeholder="${escapeHtml(metadata.inputHint)}"
                                style="min-height: 130px;"
                            >${escapeHtml(safeState.contextInput)}</textarea>
                        </div>

                        <div class="form-group">
                            <label class="label" for="bespoke-assumptions-input">Assumptions / Data</label>
                            <textarea
                                class="textarea"
                                id="bespoke-assumptions-input"
                                placeholder="Numbers, options, or supporting notes (one per line)"
                                style="min-height: 90px;"
                            >${escapeHtml(safeState.assumptionsInput)}</textarea>
                        </div>

                        <div class="form-group">
                            <label class="label" for="bespoke-constraints-input">Constraints</label>
                            <textarea
                                class="textarea"
                                id="bespoke-constraints-input"
                                placeholder="Time, budget, quality, or dependency constraints"
                                style="min-height: 90px;"
                            >${escapeHtml(safeState.constraintsInput)}</textarea>
                        </div>

                        <div class="utility-controls" style="margin-top: 12px;">
                            <button class="btn btn-primary" id="bespoke-run-btn" type="button">Run</button>
                            <button class="btn btn-secondary" id="bespoke-clear-btn" type="button">Clear</button>
                            <button class="btn btn-ghost" id="bespoke-sample-btn" type="button">Load Sample</button>
                            <button class="btn btn-ghost" id="bespoke-copy-btn" type="button">Copy Summary</button>
                        </div>

                        <div class="utility-controls" style="margin-top: 10px;">
                            <label for="bespoke-export-format" style="display:flex;align-items:center;gap:8px;">
                                Export format
                                <select class="input" id="bespoke-export-format" style="width:auto;min-width:120px;">
                                    <option value="json" ${safeState.selectedExportFormat === 'json' ? 'selected' : ''}>JSON</option>
                                    <option value="md" ${safeState.selectedExportFormat === 'md' ? 'selected' : ''}>Markdown</option>
                                    <option value="csv" ${safeState.selectedExportFormat === 'csv' ? 'selected' : ''}>CSV</option>
                                </select>
                            </label>
                            <button class="btn btn-ghost" id="bespoke-export-btn" type="button">Export</button>
                        </div>
                    </div>

                    ${safeState.validationError ? `
                        <div class="card" role="alert" aria-live="assertive">
                            <h3>Error</h3>
                            <p style="color: var(--color-danger); margin: 0;">${escapeHtml(safeState.validationError)}</p>
                        </div>
                    ` : ''}

                    ${result ? `
                        <div class="card" role="status" aria-live="polite">
                            <h3>Result</h3>
                            <p>${escapeHtml(result.summary)}</p>
                            ${renderMetrics(result.metrics)}
                            ${renderSections(result.sections)}
                            ${renderRecommendations(result.recommendations)}
                        </div>
                    ` : ''}

                    ${renderHistory(safeState.history)}
                </div>
            `;

            const contextInput = container.querySelector('#bespoke-context-input');
            const assumptionsInput = container.querySelector('#bespoke-assumptions-input');
            const constraintsInput = container.querySelector('#bespoke-constraints-input');
            const runButton = container.querySelector('#bespoke-run-btn');
            const clearButton = container.querySelector('#bespoke-clear-btn');
            const sampleButton = container.querySelector('#bespoke-sample-btn');
            const copyButton = container.querySelector('#bespoke-copy-btn');
            const exportButton = container.querySelector('#bespoke-export-btn');
            const exportSelect = container.querySelector('#bespoke-export-format');

            if (contextInput) {
                contextInput.addEventListener('input', (event) => {
                    setState({ contextInput: event.target.value }, { rerender: false });
                });
            }
            if (assumptionsInput) {
                assumptionsInput.addEventListener('input', (event) => {
                    setState({ assumptionsInput: event.target.value }, { rerender: false });
                });
            }
            if (constraintsInput) {
                constraintsInput.addEventListener('input', (event) => {
                    setState({ constraintsInput: event.target.value }, { rerender: false });
                });
            }

            if (exportSelect) {
                exportSelect.addEventListener('change', (event) => {
                    setState({ selectedExportFormat: event.target.value }, { rerender: false });
                });
            }

            if (sampleButton) {
                sampleButton.addEventListener('click', () => {
                    setState(
                        {
                            contextInput: safeState.sampleInput,
                            assumptionsInput: `Primary signal: ${metadata.domain}\nSecondary signal: ${metadata.archetype}`,
                            constraintsInput: 'Keep output concise and immediately actionable.',
                            validationError: ''
                        },
                        { rerender: true }
                    );
                });
            }

            if (clearButton) {
                clearButton.addEventListener('click', () => {
                    setState(
                        {
                            contextInput: '',
                            assumptionsInput: '',
                            constraintsInput: '',
                            result: null,
                            validationError: ''
                        },
                        { rerender: true }
                    );
                });
            }

            if (runButton) {
                runButton.addEventListener('click', () => {
                    const nextState = {
                        contextInput: contextInput ? contextInput.value : safeState.contextInput,
                        assumptionsInput: assumptionsInput ? assumptionsInput.value : safeState.assumptionsInput,
                        constraintsInput: constraintsInput ? constraintsInput.value : safeState.constraintsInput
                    };

                    const payload = composeInputPayload(nextState);
                    const outcome = executeBespokeUtility(metadata, payload);

                    if (!outcome.ok) {
                        setState(
                            {
                                ...nextState,
                                result: null,
                                validationError: outcome.validationError || 'Unable to run this utility.'
                            },
                            { rerender: true }
                        );
                        return;
                    }

                    const nextHistory = [
                        ...(Array.isArray(safeState.history) ? safeState.history : []),
                        {
                            timestamp: Date.now(),
                            summary: outcome.summary,
                            contextInput: nextState.contextInput,
                            assumptionsInput: nextState.assumptionsInput,
                            constraintsInput: nextState.constraintsInput
                        }
                    ].slice(-50);

                    setState(
                        {
                            ...nextState,
                            result: outcome,
                            validationError: '',
                            history: nextHistory
                        },
                        { rerender: true }
                    );
                });
            }

            if (copyButton) {
                copyButton.addEventListener('click', async () => {
                    if (!safeState.result) {
                        setState({ validationError: 'Run the utility before copying output.' }, { rerender: true });
                        return;
                    }

                    const lines = [
                        `${metadata.name}`,
                        safeState.result.summary
                    ];
                    const recommendations = Array.isArray(safeState.result.recommendations)
                        ? safeState.result.recommendations.slice(0, 3)
                        : [];
                    if (recommendations.length > 0) {
                        lines.push('Next actions:');
                        recommendations.forEach(item => lines.push(`- ${item}`));
                    }

                    const copied = await copyTextToClipboard(lines.join('\n'));
                    if (!copied) {
                        setState({ validationError: 'Clipboard access is unavailable in this browser.' }, { rerender: true });
                    } else {
                        setState({ validationError: '' }, { rerender: true });
                    }
                });
            }

            if (exportButton) {
                exportButton.addEventListener('click', () => {
                    if (!safeState.result) {
                        setState({ validationError: 'Run the utility before exporting output.' }, { rerender: true });
                        return;
                    }

                    const payload = composeInputPayload(safeState);
                    const format = exportSelect ? exportSelect.value : safeState.selectedExportFormat;
                    const safeFormat = ['json', 'md', 'csv'].includes(format) ? format : 'json';
                    const filenameBase = `${metadata.id}-${Date.now()}`;

                    if (safeFormat === 'json') {
                        const bundle = createExportBundle(metadata, payload, safeState.result);
                        downloadFile(`${filenameBase}.json`, JSON.stringify(bundle, null, 2), 'application/json');
                        return;
                    }

                    if (safeFormat === 'md') {
                        const markdown = outcomeToMarkdown(metadata, payload, safeState.result);
                        downloadFile(`${filenameBase}.md`, markdown, 'text/markdown');
                        return;
                    }

                    const csv = outcomeToCsv(safeState.result);
                    downloadFile(`${filenameBase}.csv`, csv, 'text/csv');
                });
            }

            container.querySelectorAll('[data-history-index]').forEach(button => {
                button.addEventListener('click', (event) => {
                    const reverseIndex = Number(event.currentTarget.getAttribute('data-history-index'));
                    const entry = getHistoryEntry(safeState.history, reverseIndex);
                    if (!entry) {
                        return;
                    }
                    setState(
                        {
                            contextInput: entry.contextInput || '',
                            assumptionsInput: entry.assumptionsInput || '',
                            constraintsInput: entry.constraintsInput || '',
                            validationError: ''
                        },
                        { rerender: true }
                    );
                });
            });
        },

        process(input) {
            const payload = typeof input === 'string'
                ? input
                : JSON.stringify(input ?? {});
            return executeBespokeUtility(metadata, payload);
        },

        execute(params) {
            if (typeof params === 'string') {
                return this.process(params);
            }

            const context = params?.context || params?.input || '';
            const assumptions = params?.assumptions || '';
            const constraints = params?.constraints || '';
            const payload = [context, assumptions && `Assumptions:\n${assumptions}`, constraints && `Constraints:\n${constraints}`]
                .filter(Boolean)
                .join('\n\n');

            return executeBespokeUtility(metadata, payload);
        },

        help() {
            return renderHelp(metadata);
        },

        destroy() {}
    };
}

