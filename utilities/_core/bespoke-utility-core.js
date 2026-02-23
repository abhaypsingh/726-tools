const STOP_WORDS = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'in', 'into',
    'is', 'it', 'of', 'on', 'or', 'that', 'the', 'their', 'this', 'to', 'with',
    'your', 'you', 'our', 'we', 'they', 'them', 'its', 'tool', 'tools'
]);

const RANDOM_ID_MARKERS = [
    'random',
    'roulette',
    'dice',
    'magic-8-ball',
    'lucky',
    'fortune',
    'would-you-rather',
    'daily-challenge',
    'riddle',
    'challenge'
];

const CATEGORY_PROFILES = {
    'audio & sound': {
        focus: ['frequency', 'rhythm', 'clarity', 'dynamics'],
        outcomes: ['mix notes', 'signal actions', 'listening checklist'],
        bottlenecks: ['imbalanced levels', 'masking frequencies', 'inconsistent timing']
    },
    'business & entrepreneurship': {
        focus: ['market', 'margin', 'risk', 'execution'],
        outcomes: ['strategy brief', 'operating checklist', 'decision memo'],
        bottlenecks: ['unclear positioning', 'weak unit economics', 'slow decision loops']
    },
    'emotions & wellness': {
        focus: ['awareness', 'regulation', 'reflection', 'support'],
        outcomes: ['reflection prompts', 'wellness actions', 'check-in plan'],
        bottlenecks: ['untracked triggers', 'low recovery cadence', 'missing boundaries']
    },
    'entertainment & media': {
        focus: ['engagement', 'variety', 'timing', 'quality'],
        outcomes: ['content shortlist', 'activity plan', 'recommendation set'],
        bottlenecks: ['repetitive choices', 'low discovery', 'poor pacing']
    },
    'finance & money': {
        focus: ['cashflow', 'savings', 'risk', 'return'],
        outcomes: ['money plan', 'allocation steps', 'budget summary'],
        bottlenecks: ['expense leakage', 'unclear targets', 'inconsistent tracking']
    },
    'food & cooking': {
        focus: ['nutrition', 'prep time', 'cost', 'flavor'],
        outcomes: ['meal options', 'prep checklist', 'ingredient plan'],
        bottlenecks: ['missing prep flow', 'waste from overbuying', 'unbalanced meals']
    },
    'fun & games': {
        focus: ['novelty', 'difficulty', 'pace', 'social'],
        outcomes: ['game prompts', 'challenge set', 'fun picks'],
        bottlenecks: ['predictable choices', 'difficulty mismatch', 'low replay value']
    },
    'health & fitness': {
        focus: ['consistency', 'intensity', 'recovery', 'progress'],
        outcomes: ['habit plan', 'training outline', 'progress snapshot'],
        bottlenecks: ['overload spikes', 'recovery gaps', 'unclear progression']
    },
    'home & lifestyle': {
        focus: ['maintenance', 'comfort', 'efficiency', 'safety'],
        outcomes: ['home checklist', 'improvement plan', 'routine schedule'],
        bottlenecks: ['deferred maintenance', 'poor routines', 'resource waste']
    },
    'learning & memory': {
        focus: ['retention', 'understanding', 'practice', 'feedback'],
        outcomes: ['study routine', 'recall prompts', 'learning map'],
        bottlenecks: ['passive review', 'weak recall loops', 'unclear goals']
    },
    'life management': {
        focus: ['priorities', 'events', 'relationships', 'follow-through'],
        outcomes: ['life checklist', 'event plan', 'decision notes'],
        bottlenecks: ['planning debt', 'missing reminders', 'overcommitment']
    },
    'math & logic': {
        focus: ['accuracy', 'steps', 'patterns', 'proof'],
        outcomes: ['worked solution', 'reasoning steps', 'math summary'],
        bottlenecks: ['unit mismatch', 'missing assumptions', 'calculation drift']
    },
    'personal development': {
        focus: ['growth', 'goals', 'identity', 'consistency'],
        outcomes: ['growth plan', 'reflection prompts', 'next actions'],
        bottlenecks: ['vague goals', 'low accountability', 'weak review cadence']
    },
    'privacy & security': {
        focus: ['exposure', 'controls', 'monitoring', 'response'],
        outcomes: ['risk checklist', 'hardening actions', 'safety notes'],
        bottlenecks: ['weak defaults', 'missing updates', 'overexposed data']
    },
    'productivity & focus': {
        focus: ['attention', 'throughput', 'priorities', 'momentum'],
        outcomes: ['focus plan', 'task sequence', 'execution scorecard'],
        bottlenecks: ['context switching', 'unclear priorities', 'overloaded queue']
    },
    'productivity tools': {
        focus: ['planning', 'coordination', 'tracking', 'delivery'],
        outcomes: ['project brief', 'status board', 'execution steps'],
        bottlenecks: ['dependency gaps', 'unclear ownership', 'manual updates']
    },
    'relationships & social': {
        focus: ['communication', 'trust', 'empathy', 'boundaries'],
        outcomes: ['conversation guide', 'relationship actions', 'support plan'],
        bottlenecks: ['assumption mismatch', 'low listening quality', 'unclear expectations']
    },
    'science & nature': {
        focus: ['observation', 'hypothesis', 'evidence', 'variation'],
        outcomes: ['analysis notes', 'experiment plan', 'finding summary'],
        bottlenecks: ['insufficient samples', 'confounding factors', 'unclear controls']
    },
    'technology & programming': {
        focus: ['architecture', 'reliability', 'performance', 'maintainability'],
        outcomes: ['technical plan', 'implementation checklist', 'risk log'],
        bottlenecks: ['unclear interfaces', 'missing tests', 'operational blind spots']
    },
    'thinking & planning': {
        focus: ['clarity', 'tradeoffs', 'options', 'decisions'],
        outcomes: ['decision framework', 'priority plan', 'thinking prompts'],
        bottlenecks: ['unclear problem framing', 'hidden assumptions', 'decision delay']
    },
    'travel & adventure': {
        focus: ['itinerary', 'budget', 'safety', 'experience'],
        outcomes: ['trip plan', 'packing checklist', 'route options'],
        bottlenecks: ['timing conflicts', 'budget uncertainty', 'missing contingencies']
    },
    'visual & design': {
        focus: ['composition', 'contrast', 'hierarchy', 'consistency'],
        outcomes: ['design options', 'style guidance', 'asset checklist'],
        bottlenecks: ['weak hierarchy', 'contrast issues', 'inconsistent styling']
    },
    'writing & language': {
        focus: ['clarity', 'tone', 'structure', 'impact'],
        outcomes: ['draft options', 'revision checklist', 'language guidance'],
        bottlenecks: ['unclear structure', 'tone mismatch', 'wordiness']
    }
};

function toTitleCase(value) {
    return String(value || '')
        .split(/\s+/)
        .filter(Boolean)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

function normalizeCategory(category) {
    return String(category || '').trim().toLowerCase();
}

function unique(values) {
    return [...new Set(values.filter(Boolean))];
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function round(value, digits = 2) {
    const factor = 10 ** digits;
    return Math.round(value * factor) / factor;
}

function hashString(input) {
    let hash = 2166136261;
    const text = String(input || '');
    for (let index = 0; index < text.length; index++) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
}

function escapeCsv(value) {
    const text = String(value ?? '').replace(/"/g, '""');
    return `"${text}"`;
}

function formatNumber(value, digits = 2) {
    if (!Number.isFinite(value)) {
        return '0';
    }
    return round(value, digits).toLocaleString();
}

function asMetric(label, value) {
    return {
        label,
        value: String(value)
    };
}

function getCategoryProfile(category) {
    const normalized = normalizeCategory(category);
    return CATEGORY_PROFILES[normalized] || {
        focus: ['scope', 'quality', 'impact', 'execution'],
        outcomes: ['action plan', 'analysis notes', 'recommendation list'],
        bottlenecks: ['unclear baseline', 'missing constraints', 'weak follow-through']
    };
}

function parseInput(rawInput) {
    const text = String(rawInput || '').trim();
    const lines = text
        .split(/\r?\n|[;]+/)
        .map(line => line.trim())
        .filter(Boolean);

    const words = text
        .toLowerCase()
        .replace(/[^a-z0-9\s.-]/g, ' ')
        .split(/\s+/)
        .filter(Boolean);

    const keywords = unique(words.filter(word => {
        return word.length > 2 && !STOP_WORDS.has(word) && Number.isNaN(Number(word));
    }));

    const numbers = (text.match(/-?\d+(?:\.\d+)?/g) || [])
        .map(Number)
        .filter(value => Number.isFinite(value));

    return {
        text,
        lines,
        words,
        keywords,
        numbers
    };
}

function deriveMetadataFocus(metadata) {
    const fromId = String(metadata.id || '')
        .toLowerCase()
        .split('-')
        .filter(Boolean);
    const fromName = String(metadata.name || '')
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
    const extra = Array.isArray(metadata.focusTerms) ? metadata.focusTerms : [];

    return unique([...extra, ...fromId, ...fromName]).filter(term => {
        return term.length > 2 && !STOP_WORDS.has(term);
    });
}

function collectFocusTerms(metadata, parsed, profile) {
    const metadataFocus = deriveMetadataFocus(metadata);
    const combined = unique([
        ...parsed.keywords,
        ...metadataFocus,
        ...profile.focus
    ]);

    return combined.slice(0, 8);
}

function summarizeNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    const count = numbers.length;
    const total = numbers.reduce((sum, value) => sum + value, 0);
    const average = total / count;
    const minimum = Math.min(...numbers);
    const maximum = Math.max(...numbers);
    const range = maximum - minimum;
    const variance = numbers.reduce((sum, value) => sum + ((value - average) ** 2), 0) / count;
    const standardDeviation = Math.sqrt(variance);

    return {
        count,
        total,
        average,
        minimum,
        maximum,
        range,
        standardDeviation
    };
}

function deterministicPick(options, baseSeed, count) {
    const uniqueOptions = unique(options);
    if (uniqueOptions.length === 0) {
        return [];
    }

    const result = [];
    let seed = baseSeed;
    const target = Math.min(count, uniqueOptions.length);

    while (result.length < target) {
        seed = hashString(`${seed}:${result.length}`);
        const index = seed % uniqueOptions.length;
        const candidate = uniqueOptions[index];
        if (!result.includes(candidate)) {
            result.push(candidate);
        }
    }

    return result;
}

function scoreLine(line, focusTerms) {
    const lower = String(line || '').toLowerCase();
    const riskWords = ['risk', 'error', 'delay', 'blocked', 'failed', 'unsafe', 'urgent', 'missing'];
    const severityHits = riskWords.reduce((sum, word) => sum + (lower.includes(word) ? 1 : 0), 0);
    const focusHits = focusTerms.reduce((sum, term) => sum + (lower.includes(term) ? 1 : 0), 0);
    const lengthScore = clamp(Math.round(lower.length / 30), 0, 4);
    return severityHits * 2 + focusHits + lengthScore;
}

function listOptions(parsed, focusTerms, profile) {
    const options = parsed.lines.length > 0 ? parsed.lines : [];
    if (options.length > 0) {
        return options.slice(0, 12);
    }

    return unique([...focusTerms, ...profile.outcomes]).slice(0, 8);
}

function maybePlural(value, singular, plural) {
    return value === 1 ? singular : plural;
}

export function isExplicitlyRandomUtility(metadata) {
    const utilityId = String(metadata.id || '').toLowerCase();
    return RANDOM_ID_MARKERS.some(marker => utilityId.includes(marker));
}

function validateInput(archetype, parsed, randomMode) {
    if (randomMode) {
        return null;
    }

    if (!parsed.text) {
        return 'Provide context or inputs before running this utility.';
    }

    if (archetype === 'quantify' && parsed.numbers.length === 0) {
        return 'This utility needs numeric values. Add numbers such as amounts, percentages, or counts.';
    }

    if (archetype === 'simulate' && parsed.numbers.length === 0 && parsed.lines.length < 2) {
        return 'Simulations need at least one assumption set or multiple scenario lines.';
    }

    return null;
}

function buildQuantifyResult(metadata, parsed, context) {
    const numericSignals = parsed.numbers.length > 0
        ? parsed.numbers
        : parsed.lines.map(line => line.length);
    const summary = summarizeNumbers(numericSignals);

    if (!summary) {
        return {
            summary: `${metadata.name} needs numeric inputs to compute metrics.`,
            metrics: [],
            sections: [],
            recommendations: [
                'Add current values, targets, and one time horizon.',
                'Use one line per variable to keep calculations clear.',
                'Re-run to compare baseline and scenario ranges.'
            ]
        };
    }

    const conservative = summary.average * 0.9;
    const aggressive = summary.average * 1.1;

    return {
        summary: `${metadata.name} processed ${summary.count} ${maybePlural(summary.count, 'value', 'values')} and generated quantitative baselines.`,
        metrics: [
            asMetric('Count', summary.count),
            asMetric('Total', formatNumber(summary.total)),
            asMetric('Average', formatNumber(summary.average)),
            asMetric('Minimum', formatNumber(summary.minimum)),
            asMetric('Maximum', formatNumber(summary.maximum)),
            asMetric('Std Dev', formatNumber(summary.standardDeviation))
        ],
        sections: [
            {
                title: 'Computed Scenarios',
                items: [
                    `Conservative case (-10%): ${formatNumber(conservative)}`,
                    `Baseline case: ${formatNumber(summary.average)}`,
                    `Growth case (+10%): ${formatNumber(aggressive)}`
                ]
            },
            {
                title: 'Assumptions',
                items: [
                    `Inputs interpreted as ${context.profile.focus[0]} drivers.`,
                    `Range coverage: ${formatNumber(summary.range)} across observed values.`,
                    'Model is deterministic and based solely on the provided input.'
                ]
            }
        ],
        recommendations: [
            'Track average and range over time to detect drift.',
            'Review outliers before finalizing decisions.',
            `Pair this output with ${context.profile.outcomes[0]} for execution.`
        ]
    };
}

function buildInspectResult(metadata, parsed, context) {
    const lines = parsed.lines.length > 0 ? parsed.lines : [parsed.text];
    const findings = lines.slice(0, 8).map(line => {
        const score = scoreLine(line, context.focusTerms);
        const severity = score >= 8 ? 'High' : score >= 5 ? 'Medium' : 'Low';
        return {
            severity,
            message: line
        };
    });

    const highCount = findings.filter(item => item.severity === 'High').length;
    const mediumCount = findings.filter(item => item.severity === 'Medium').length;
    const lowCount = findings.filter(item => item.severity === 'Low').length;

    return {
        summary: `${metadata.name} reviewed ${findings.length} findings with severity grouping and action guidance.`,
        metrics: [
            asMetric('High', highCount),
            asMetric('Medium', mediumCount),
            asMetric('Low', lowCount),
            asMetric('Signals', lines.length)
        ],
        sections: [
            {
                title: 'Findings',
                items: findings.map(item => `${item.severity}: ${item.message}`)
            },
            {
                title: 'Coverage',
                items: [
                    `Top focus terms: ${context.focusTerms.slice(0, 4).join(', ')}`,
                    `Category lens: ${context.profile.focus.join(', ')}`,
                    'Confidence is proportional to input detail and specificity.'
                ]
            }
        ],
        recommendations: [
            'Handle high-severity findings first.',
            'Convert each medium finding into a concrete owner + deadline.',
            `Use ${context.profile.outcomes[1]} to track remediation status.`
        ]
    };
}

function buildPlanResult(metadata, parsed, context) {
    const objectives = parsed.lines.length > 0
        ? parsed.lines.slice(0, 6)
        : context.focusTerms.slice(0, 4).map(term => `Improve ${term}`);

    const phases = ['Clarify', 'Design', 'Execute', 'Review'];
    const phasedSteps = phases.map((phase, index) => {
        const objective = objectives[index % objectives.length];
        const dependency = index === 0 ? 'none' : `depends on Phase ${index}`;
        return `Phase ${index + 1} (${phase}): ${objective} [Dependency: ${dependency}]`;
    });

    return {
        summary: `${metadata.name} built a phased plan with dependencies and execution checkpoints.`,
        metrics: [
            asMetric('Objectives', objectives.length),
            asMetric('Phases', phases.length),
            asMetric('Checklist Items', phases.length * 2)
        ],
        sections: [
            {
                title: 'Phased Plan',
                items: phasedSteps
            },
            {
                title: 'Execution Checklist',
                items: phases.map((phase, index) => {
                    return `[ ] Complete ${phase.toLowerCase()} milestone ${index + 1}`;
                })
            }
        ],
        recommendations: [
            'Assign one owner per phase before execution.',
            'Review dependencies before starting Phase 2.',
            'Log completion evidence for each checklist item.'
        ]
    };
}

function buildGenerateResult(metadata, parsed, context) {
    const baseSeed = hashString(`${metadata.id}:${parsed.text}`);
    const focus = context.focusTerms.length > 0 ? context.focusTerms : context.profile.focus;
    const templates = [
        `Candidate: concise {domain} concept centered on "{term}".`,
        `Candidate: high-impact {domain} draft optimized for "{term}".`,
        `Candidate: practical {domain} blueprint that emphasizes "{term}".`,
        `Candidate: exploratory {domain} variation with strong "{term}" direction.`,
        `Candidate: implementation-ready {domain} output tuned for "{term}".`
    ];

    const terms = context.randomMode
        ? deterministicPick(focus.concat(context.profile.outcomes), Date.now(), 5)
        : deterministicPick(focus.concat(context.profile.outcomes), baseSeed, 5);

    const candidates = terms.map((term, index) => {
        const template = templates[index % templates.length];
        return template
            .replace('{domain}', String(metadata.domain || context.profile.focus[0]).toLowerCase())
            .replace('{term}', term);
    });

    return {
        summary: `${metadata.name} generated ${candidates.length} candidate outputs tailored to your direction.`,
        metrics: [
            asMetric('Candidates', candidates.length),
            asMetric('Focus Terms', focus.length),
            asMetric('Mode', context.randomMode ? 'stochastic' : 'deterministic')
        ],
        sections: [
            {
                title: 'Generated Candidates',
                items: candidates
            }
        ],
        recommendations: [
            'Select the top two candidates and merge their strongest parts.',
            'Pin one conservative and one bold option for comparison.',
            `Export your preferred draft as a ${context.profile.outcomes[0]}.`
        ]
    };
}

function buildCoachResult(metadata, parsed, context) {
    const focus = context.focusTerms.slice(0, 3);
    const baseline = focus.length > 0 ? focus.join(', ') : context.profile.focus.slice(0, 3).join(', ');

    return {
        summary: `${metadata.name} produced a coaching loop with focus areas, routines, and next actions.`,
        metrics: [
            asMetric('Focus Areas', focus.length || 3),
            asMetric('Routine Steps', 3),
            asMetric('Review Cadence', 'Weekly')
        ],
        sections: [
            {
                title: 'Focus Areas',
                items: [
                    `Primary focus: ${baseline}`,
                    `Desired outcome context: ${parsed.lines[0] || 'Improve consistency and direction'}`,
                    `Support lens: ${context.profile.focus.join(', ')}`
                ]
            },
            {
                title: 'Coaching Routine',
                items: [
                    'Daily: run one focused practice session (15-20 min).',
                    'Weekly: review what worked, what stalled, and why.',
                    'Bi-weekly: adjust one habit and one accountability mechanism.'
                ]
            }
        ],
        recommendations: [
            'Set a measurable outcome for the next 7 days.',
            'Track blockers immediately after each practice session.',
            'Refine routine intensity based on outcomes, not effort alone.'
        ]
    };
}

function buildExploreResult(metadata, parsed, context) {
    const options = listOptions(parsed, context.focusTerms, context.profile);
    const scored = options.map((option, index) => {
        const base = 100 - (index * 7);
        const alignment = context.focusTerms.reduce((sum, term) => sum + (option.toLowerCase().includes(term) ? 3 : 0), 0);
        const stability = hashString(`${metadata.id}:${option}`) % 9;
        const score = clamp(base + alignment + stability, 1, 100);
        return { option, score };
    }).sort((a, b) => b.score - a.score);

    return {
        summary: `${metadata.name} ranked ${scored.length} options with transparent scoring tradeoffs.`,
        metrics: [
            asMetric('Options', scored.length),
            asMetric('Top Score', scored[0] ? scored[0].score : 0),
            asMetric('Scoring Lens', context.profile.focus.slice(0, 2).join(' + '))
        ],
        sections: [
            {
                title: 'Ranked Options',
                items: scored.map((entry, index) => `${index + 1}. ${entry.option} (score ${entry.score})`)
            },
            {
                title: 'Scoring Explanation',
                items: [
                    'Base score from position and clarity.',
                    'Alignment bonus from focus-term matching.',
                    'Stability factor from deterministic tie-breaking.'
                ]
            }
        ],
        recommendations: [
            'Pilot the top option before full commitment.',
            'Keep one fallback option active.',
            'Document decision thresholds for future comparisons.'
        ]
    };
}

function buildSimulateResult(metadata, parsed) {
    const numericSignals = parsed.numbers.length > 0
        ? parsed.numbers
        : parsed.lines.map(line => line.length);
    const summary = summarizeNumbers(numericSignals) || {
        count: 1,
        average: 10,
        minimum: 10,
        maximum: 10,
        range: 0
    };

    const downside = summary.average * 0.75;
    const baseline = summary.average;
    const upside = summary.average * 1.3;

    return {
        summary: `${metadata.name} simulated downside, baseline, and upside scenarios from your assumptions.`,
        metrics: [
            asMetric('Inputs', summary.count),
            asMetric('Downside', formatNumber(downside)),
            asMetric('Baseline', formatNumber(baseline)),
            asMetric('Upside', formatNumber(upside))
        ],
        sections: [
            {
                title: 'Scenario Outcomes',
                items: [
                    `Downside (−25%): ${formatNumber(downside)}`,
                    `Baseline: ${formatNumber(baseline)}`,
                    `Upside (+30%): ${formatNumber(upside)}`
                ]
            },
            {
                title: 'Sensitivity Notes',
                items: [
                    `Observed spread: ${formatNumber(summary.range)}`,
                    `Minimum signal: ${formatNumber(summary.minimum)}`,
                    `Maximum signal: ${formatNumber(summary.maximum)}`
                ]
            }
        ],
        recommendations: [
            'Plan resources against the baseline case first.',
            'Define triggers for downside mitigation.',
            'Prepare scale-up actions for upside conditions.'
        ]
    };
}

function buildOptimizeResult(metadata, parsed, context) {
    const bottlenecks = parsed.lines.length > 0
        ? parsed.lines.slice(0, 5)
        : context.profile.bottlenecks.slice(0, 5);

    const gains = bottlenecks.map((item, index) => {
        const impact = clamp(12 + index * 4, 10, 35);
        return {
            item,
            impact
        };
    });

    return {
        summary: `${metadata.name} identified bottlenecks and mapped targeted optimization actions.`,
        metrics: [
            asMetric('Bottlenecks', bottlenecks.length),
            asMetric('Actions', gains.length),
            asMetric('Expected Gain', `${gains.reduce((sum, gain) => sum + gain.impact, 0)}% cumulative`)
        ],
        sections: [
            {
                title: 'Optimization Actions',
                items: gains.map((gain, index) => {
                    return `${index + 1}. Resolve "${gain.item}" with ownership + SLA (impact ~${gain.impact}%).`;
                })
            }
        ],
        recommendations: [
            'Ship the top-impact change first and measure baseline deltas.',
            'Track cycle time and error rate after each change.',
            'Retire low-value steps once metrics stabilize.'
        ]
    };
}

const ARCHETYPE_BUILDERS = {
    quantify: buildQuantifyResult,
    inspect: buildInspectResult,
    plan: buildPlanResult,
    generate: buildGenerateResult,
    coach: buildCoachResult,
    explore: buildExploreResult,
    simulate: buildSimulateResult,
    optimize: buildOptimizeResult
};

export function executeBespokeUtility(metadata, rawInput = '') {
    const archetype = String(metadata.archetype || 'coach').toLowerCase();
    const parsed = parseInput(rawInput);
    const profile = getCategoryProfile(metadata.category);
    const focusTerms = collectFocusTerms(metadata, parsed, profile);
    const randomMode = isExplicitlyRandomUtility(metadata);
    const validationError = validateInput(archetype, parsed, randomMode);

    if (validationError) {
        return {
            ok: false,
            validationError,
            summary: validationError,
            metrics: [],
            sections: [],
            recommendations: []
        };
    }

    const buildResult = ARCHETYPE_BUILDERS[archetype] || buildCoachResult;
    const outcome = buildResult(metadata, parsed, {
        profile,
        focusTerms,
        randomMode
    });

    return {
        ok: true,
        archetype,
        action: metadata.action || 'assist',
        domain: metadata.domain || toTitleCase(profile.focus[0]),
        focusTerms,
        summary: outcome.summary || `${metadata.name} finished processing your input.`,
        metrics: Array.isArray(outcome.metrics) ? outcome.metrics : [],
        sections: Array.isArray(outcome.sections) ? outcome.sections : [],
        recommendations: Array.isArray(outcome.recommendations) ? outcome.recommendations : []
    };
}

export function createExportBundle(metadata, inputPayload, outcome) {
    return {
        utility: {
            id: metadata.id,
            name: metadata.name,
            category: metadata.category,
            archetype: metadata.archetype
        },
        input: inputPayload,
        outcome,
        exportedAt: new Date().toISOString()
    };
}

export function outcomeToMarkdown(metadata, inputPayload, outcome) {
    const lines = [
        `# ${metadata.name}`,
        '',
        `- Category: ${metadata.category}`,
        `- Archetype: ${metadata.archetype}`,
        `- Utility ID: ${metadata.id}`,
        '',
        '## Summary',
        '',
        outcome.summary || 'No summary available.',
        '',
        '## Input',
        '',
        '```',
        String(inputPayload || '').trim() || '(empty)',
        '```',
        ''
    ];

    if (Array.isArray(outcome.metrics) && outcome.metrics.length > 0) {
        lines.push('## Metrics', '');
        for (const metric of outcome.metrics) {
            lines.push(`- ${metric.label}: ${metric.value}`);
        }
        lines.push('');
    }

    if (Array.isArray(outcome.sections)) {
        for (const section of outcome.sections) {
            lines.push(`## ${section.title}`, '');
            const items = Array.isArray(section.items) ? section.items : [];
            for (const item of items) {
                lines.push(`- ${item}`);
            }
            lines.push('');
        }
    }

    if (Array.isArray(outcome.recommendations) && outcome.recommendations.length > 0) {
        lines.push('## Recommendations', '');
        for (const recommendation of outcome.recommendations) {
            lines.push(`- ${recommendation}`);
        }
        lines.push('');
    }

    return lines.join('\n');
}

export function outcomeToCsv(outcome) {
    const rows = [['section', 'label', 'value']];

    const metrics = Array.isArray(outcome.metrics) ? outcome.metrics : [];
    for (const metric of metrics) {
        rows.push(['metric', metric.label, metric.value]);
    }

    const sections = Array.isArray(outcome.sections) ? outcome.sections : [];
    for (const section of sections) {
        const items = Array.isArray(section.items) ? section.items : [];
        for (const item of items) {
            rows.push([section.title, 'item', item]);
        }
    }

    const recommendations = Array.isArray(outcome.recommendations) ? outcome.recommendations : [];
    for (const recommendation of recommendations) {
        rows.push(['recommendation', 'item', recommendation]);
    }

    return rows.map(columns => columns.map(escapeCsv).join(',')).join('\n');
}

