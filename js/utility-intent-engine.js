const ACTION_PRIORITY = [
    'calculator',
    'estimator',
    'converter',
    'tracker',
    'monitor',
    'analyzer',
    'checker',
    'validator',
    'scanner',
    'tester',
    'planner',
    'scheduler',
    'organizer',
    'manager',
    'architect',
    'builder',
    'generator',
    'creator',
    'designer',
    'maker',
    'advisor',
    'coach',
    'trainer',
    'teacher',
    'assistant',
    'finder',
    'identifier',
    'mapper',
    'navigator',
    'simulator',
    'optimizer',
    'balancer',
    'profiler',
    'auditor',
    'guide'
];

const ACTION_ALIASES = {
    calc: 'calculator',
    detector: 'analyzer',
    detectorr: 'analyzer',
    detectors: 'analyzer',
    detectorsplus: 'analyzer',
    detectorplus: 'analyzer',
    detectorpro: 'analyzer',
    detectorx: 'analyzer',
    detectorspro: 'analyzer',
    detectorsx: 'analyzer',
    detectormax: 'analyzer',
    detectormini: 'analyzer',
    predictor: 'simulator',
    translator: 'converter',
    formatter: 'converter',
    selector: 'finder',
    compass: 'navigator',
    radar: 'monitor',
    oracle: 'advisor',
    studio: 'creator',
    laboratory: 'creator',
    lab: 'creator',
    workshop: 'creator',
    sculptor: 'designer',
    architect: 'planner',
    strategist: 'planner',
    optimizer: 'optimizer',
    optimizerplus: 'optimizer',
    enhancer: 'optimizer',
    booster: 'optimizer',
    helper: 'assistant',
    buddy: 'assistant',
    mentor: 'coach',
    guardian: 'validator',
    navigator: 'navigator',
    manager: 'manager',
    mapper: 'mapper',
    analyzer: 'analyzer',
    checker: 'checker',
    validator: 'validator',
    generator: 'generator',
    creator: 'creator',
    builder: 'builder',
    planner: 'planner',
    scheduler: 'scheduler',
    tracker: 'tracker',
    monitor: 'monitor',
    calculator: 'calculator'
};

const ACTION_ARCHETYPE = {
    calculator: 'quantify',
    estimator: 'quantify',
    converter: 'quantify',
    balancer: 'quantify',
    tracker: 'inspect',
    monitor: 'inspect',
    analyzer: 'inspect',
    checker: 'inspect',
    validator: 'inspect',
    scanner: 'inspect',
    tester: 'inspect',
    profiler: 'inspect',
    auditor: 'inspect',
    planner: 'plan',
    scheduler: 'plan',
    organizer: 'plan',
    manager: 'plan',
    architect: 'plan',
    builder: 'plan',
    generator: 'generate',
    creator: 'generate',
    designer: 'generate',
    maker: 'generate',
    advisor: 'coach',
    coach: 'coach',
    trainer: 'coach',
    teacher: 'coach',
    assistant: 'coach',
    finder: 'explore',
    identifier: 'explore',
    mapper: 'explore',
    navigator: 'explore',
    simulator: 'simulate',
    optimizer: 'optimize',
    guide: 'coach'
};

const FILLER_TOKENS = new Set([
    'plus',
    'pro',
    'advanced',
    'smart',
    'helper',
    'assistant',
    'master',
    'maven',
    'hub',
    'tool',
    'tools',
    'system',
    'engine'
]);

const STOP_WORDS = new Set([
    'the',
    'and',
    'for',
    'with',
    'from',
    'that',
    'this',
    'into',
    'your',
    'you',
    'are',
    'was',
    'will',
    'can',
    'have',
    'has',
    'had',
    'not',
    'but',
    'all',
    'any',
    'over',
    'under',
    'very',
    'more',
    'less',
    'much',
    'many',
    'task',
    'tasks',
    'tool',
    'tools'
]);

function titleCase(text) {
    return text
        .split(' ')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function normalizeAction(token) {
    if (!token) {
        return 'assistant';
    }

    return ACTION_ALIASES[token] || token;
}

function tokenizeId(utilityId = '') {
    return utilityId
        .toLowerCase()
        .split('-')
        .filter(Boolean);
}

function unique(items) {
    return [...new Set(items)];
}

function extractInputSignals(rawInput = '') {
    const trimmed = String(rawInput || '').trim();
    const lines = trimmed
        .split(/\r?\n|[;]+/)
        .map(line => line.trim())
        .filter(Boolean);

    const words = trimmed
        .toLowerCase()
        .replace(/[^a-z0-9\s.-]/g, ' ')
        .split(/\s+/)
        .filter(Boolean);

    const numbers = (trimmed.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);

    const keywords = unique(words.filter(word => {
        return word.length > 2 && !STOP_WORDS.has(word) && Number.isNaN(Number(word));
    })).slice(0, 12);

    return {
        trimmed,
        lines,
        words,
        numbers,
        keywords
    };
}

function chooseAction(tokens) {
    for (const action of ACTION_PRIORITY) {
        if (tokens.includes(action)) {
            return action;
        }
    }

    for (const token of [...tokens].reverse()) {
        const normalized = normalizeAction(token);
        if (ACTION_ARCHETYPE[normalized]) {
            return normalized;
        }
    }

    return normalizeAction(tokens[tokens.length - 1] || 'assistant');
}

function resolveDomain(tokens, category, action) {
    const actionSet = new Set(Object.keys(ACTION_ARCHETYPE));
    const filtered = tokens.filter(token => {
        const normalized = normalizeAction(token);
        return !actionSet.has(normalized) && !FILLER_TOKENS.has(token) && normalized !== action;
    });

    if (filtered.length > 0) {
        return titleCase(filtered.join(' '));
    }

    return titleCase(String(category || 'General'));
}

function buildIntentSentence(archetype, action, domain) {
    const actionLabel = titleCase(action.replace(/-/g, ' '));

    switch (archetype) {
        case 'quantify':
            return `${actionLabel} turns ${domain} input into clear metrics and decision-ready numbers.`;
        case 'inspect':
            return `${actionLabel} reviews ${domain} input, highlights signals, and flags risks.`;
        case 'plan':
            return `${actionLabel} structures ${domain} input into a practical step-by-step plan.`;
        case 'generate':
            return `${actionLabel} creates concrete ${domain} outputs you can use immediately.`;
        case 'coach':
            return `${actionLabel} gives targeted ${domain} guidance with next actions.`;
        case 'explore':
            return `${actionLabel} explores ${domain} options and prioritizes the strongest paths.`;
        case 'simulate':
            return `${actionLabel} models ${domain} scenarios to compare likely outcomes.`;
        case 'optimize':
            return `${actionLabel} optimizes ${domain} workflows for better performance.`;
        default:
            return `${actionLabel} processes ${domain} input into useful output.`;
    }
}

function buildWorkflow(archetype, domain) {
    switch (archetype) {
        case 'quantify':
            return [
                `Collect ${domain.toLowerCase()} inputs`,
                'Normalize values and units',
                'Compute core metrics',
                'Recommend next move'
            ];
        case 'inspect':
            return [
                `Parse ${domain.toLowerCase()} context`,
                'Identify key patterns',
                'Flag constraints and risks',
                'Propose corrective actions'
            ];
        case 'plan':
            return [
                `Define ${domain.toLowerCase()} objective`,
                'Split work into phases',
                'Order by dependency and impact',
                'Assign clear execution steps'
            ];
        case 'generate':
            return [
                `Interpret ${domain.toLowerCase()} direction`,
                'Generate option set',
                'Refine top candidates',
                'Return usable outputs'
            ];
        case 'coach':
            return [
                `Assess ${domain.toLowerCase()} baseline`,
                'Find leverage points',
                'Design short feedback loops',
                'Set follow-up actions'
            ];
        case 'explore':
            return [
                `Frame ${domain.toLowerCase()} search`,
                'Score candidate options',
                'Highlight tradeoffs',
                'Prioritize top opportunities'
            ];
        case 'simulate':
            return [
                `Define ${domain.toLowerCase()} assumptions`,
                'Model base, upside, downside',
                'Compare scenario deltas',
                'Select robust strategy'
            ];
        case 'optimize':
            return [
                `Audit ${domain.toLowerCase()} flow`,
                'Find bottlenecks',
                'Apply targeted improvements',
                'Measure gains and iterate'
            ];
        default:
            return [
                'Capture input',
                'Process information',
                'Generate output',
                'Review recommendations'
            ];
    }
}

function buildDefaultInputHint(archetype) {
    switch (archetype) {
        case 'quantify':
            return 'Enter numbers, assumptions, and targets (one per line or sentence).';
        case 'inspect':
            return 'Paste items, notes, or data to analyze.';
        case 'plan':
            return 'Describe goal, constraints, and deadline.';
        case 'generate':
            return 'Describe style, constraints, and desired output.';
        case 'coach':
            return 'Describe current state, challenge, and desired outcome.';
        case 'explore':
            return 'List options, context, and selection criteria.';
        case 'simulate':
            return 'Provide assumptions, variables, and possible scenarios.';
        case 'optimize':
            return 'Describe current process, bottlenecks, and goals.';
        default:
            return 'Enter context and what you want to accomplish.';
    }
}

function summarizeNumbers(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    const total = numbers.reduce((sum, value) => sum + value, 0);
    const average = total / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const range = max - min;

    return { total, average, min, max, range, count: numbers.length };
}

function asMetric(label, value) {
    return { label, value: String(value) };
}

function buildNextActions(domain, keywords, count = 3) {
    const pickedKeywords = keywords.length > 0 ? keywords : ['scope', 'baseline', 'decision'];
    const actions = [];

    for (let index = 0; index < count; index++) {
        const keyword = pickedKeywords[index % pickedKeywords.length];
        actions.push(`Define a measurable ${keyword} checkpoint for ${domain.toLowerCase()}.`);
    }

    return actions;
}

function buildQuantifyResult(domain, signals) {
    const numberSummary = summarizeNumbers(signals.numbers);
    const fallbackValues = signals.lines.map(line => line.length);
    const fallbackSummary = summarizeNumbers(fallbackValues);
    const summary = numberSummary || fallbackSummary;

    if (!summary) {
        return {
            summary: `No numeric input found for ${domain.toLowerCase()}. Add values to get calculations.`,
            metrics: [],
            details: [],
            recommendations: [
                'Provide at least two numeric inputs for meaningful metrics.',
                'Include current value, target value, and time horizon.',
                'Re-run to get trend and range analysis.'
            ]
        };
    }

    const baseline = summary.average;
    const low = (baseline * 0.9).toFixed(2);
    const high = (baseline * 1.1).toFixed(2);

    return {
        summary: `Computed ${summary.count} values for ${domain.toLowerCase()} with an average of ${summary.average.toFixed(2)}.`,
        metrics: [
            asMetric('Count', summary.count),
            asMetric('Total', summary.total.toFixed(2)),
            asMetric('Average', summary.average.toFixed(2)),
            asMetric('Minimum', summary.min.toFixed(2)),
            asMetric('Maximum', summary.max.toFixed(2)),
            asMetric('Range', summary.range.toFixed(2))
        ],
        details: [
            `Baseline scenario: ${baseline.toFixed(2)}`,
            `Conservative scenario (-10%): ${low}`,
            `Aggressive scenario (+10%): ${high}`
        ],
        recommendations: [
            'Track the average and range weekly to catch drift early.',
            'Investigate values above maximum threshold contributors.',
            'Set alert boundaries around low and high scenarios.'
        ]
    };
}

function buildInspectResult(domain, signals) {
    const inputLines = signals.lines.length > 0 ? signals.lines : [signals.trimmed || 'No input provided'];
    const findings = inputLines.slice(0, 6).map((line, index) => {
        return `Signal ${index + 1}: ${line}`;
    });
    const topKeywords = signals.keywords.slice(0, 5);

    return {
        summary: `Analyzed ${inputLines.length} ${domain.toLowerCase()} signals and extracted ${topKeywords.length} key themes.`,
        metrics: [
            asMetric('Signals Reviewed', inputLines.length),
            asMetric('Keywords', topKeywords.length),
            asMetric('Numeric Markers', signals.numbers.length)
        ],
        details: findings,
        recommendations: [
            `Prioritize high-impact themes: ${(topKeywords.slice(0, 3).join(', ') || 'scope, risk, quality')}.`,
            'Resolve ambiguous or conflicting statements before execution.',
            'Set a review cadence for ongoing signal monitoring.'
        ]
    };
}

function buildPlanResult(domain, signals) {
    const objectives = signals.lines.length > 0 ? signals.lines.slice(0, 5) : [`Deliver a clear ${domain.toLowerCase()} outcome.`];
    const phases = [
        { phase: 'Phase 1 - Clarify', verb: 'Define' },
        { phase: 'Phase 2 - Design', verb: 'Design' },
        { phase: 'Phase 3 - Execute', verb: 'Implement' },
        { phase: 'Phase 4 - Review', verb: 'Measure' }
    ];

    const details = phases.map((phase, index) => {
        const objective = objectives[index % objectives.length];
        return `${phase.phase}: ${phase.verb} around "${objective}".`;
    });

    return {
        summary: `Built a four-phase ${domain.toLowerCase()} plan from ${objectives.length} objective inputs.`,
        metrics: [
            asMetric('Objectives', objectives.length),
            asMetric('Phases', phases.length),
            asMetric('Next Actions', 4)
        ],
        details,
        recommendations: buildNextActions(domain, signals.keywords, 4)
    };
}

function buildGenerateResult(domain, signals) {
    const seeds = signals.keywords.length > 0 ? signals.keywords : ['clarity', 'impact', 'simplicity', 'consistency'];
    const ideas = [];
    const templates = [
        `Create a concise ${domain.toLowerCase()} variant centered on "{seed}".`,
        `Draft a premium ${domain.toLowerCase()} option optimized for "{seed}".`,
        `Build a lightweight ${domain.toLowerCase()} prototype focused on "{seed}".`,
        `Design an experimental ${domain.toLowerCase()} concept using "{seed}".`,
        `Publish a practical ${domain.toLowerCase()} playbook around "{seed}".`
    ];

    for (let index = 0; index < 8; index++) {
        const seed = seeds[index % seeds.length];
        const template = templates[index % templates.length];
        ideas.push(template.replace('{seed}', seed));
    }

    return {
        summary: `Generated ${ideas.length} actionable ${domain.toLowerCase()} ideas.`,
        metrics: [
            asMetric('Idea Count', ideas.length),
            asMetric('Seed Keywords', seeds.length)
        ],
        details: ideas,
        recommendations: [
            'Pick the top two ideas by effort-to-impact ratio.',
            'Create a quick validation test for each selected idea.',
            'Track adoption and iterate within one cycle.'
        ]
    };
}

function buildCoachResult(domain, signals) {
    const focus = signals.keywords.slice(0, 3);
    const routines = [
        'Daily: 15-minute focused practice.',
        'Weekly: review outcomes and reset priorities.',
        'Bi-weekly: remove one blocker and add one accelerant.'
    ];

    return {
        summary: `Prepared a coaching loop for ${domain.toLowerCase()} with structured feedback cycles.`,
        metrics: [
            asMetric('Focus Areas', focus.length || 3),
            asMetric('Routines', routines.length),
            asMetric('Review Cadence', 'Weekly')
        ],
        details: [
            `Primary focus: ${(focus.join(', ') || 'clarity, consistency, execution')}.`,
            ...routines
        ],
        recommendations: [
            'Set one measurable outcome for the next seven days.',
            'Document blockers immediately after each session.',
            'Adjust training load based on progress quality, not volume.'
        ]
    };
}

function buildExploreResult(domain, signals) {
    const options = signals.lines.length > 0 ? signals.lines : signals.keywords;
    const ranked = options.slice(0, 6).map((option, index) => {
        const score = 100 - (index * 12);
        return `${index + 1}. ${option} (priority score ${score})`;
    });

    return {
        summary: `Explored ${options.length || 0} ${domain.toLowerCase()} options and ranked top candidates.`,
        metrics: [
            asMetric('Options Considered', options.length || 0),
            asMetric('Top Ranked', ranked.length)
        ],
        details: ranked.length > 0 ? ranked : ['Add options to generate ranked results.'],
        recommendations: [
            'Validate top option with a small-scale pilot.',
            'Capture decision criteria and threshold values.',
            'Keep at least one fallback path active.'
        ]
    };
}

function buildSimulateResult(domain, signals) {
    const summary = summarizeNumbers(signals.numbers) || summarizeNumbers(signals.lines.map(line => line.length)) || {
        average: 10,
        min: 8,
        max: 12,
        range: 4,
        count: 3
    };

    const base = summary.average;
    const downside = base * 0.75;
    const upside = base * 1.3;

    return {
        summary: `Simulated downside, base, and upside scenarios for ${domain.toLowerCase()}.`,
        metrics: [
            asMetric('Scenario Inputs', summary.count),
            asMetric('Downside', downside.toFixed(2)),
            asMetric('Base', base.toFixed(2)),
            asMetric('Upside', upside.toFixed(2))
        ],
        details: [
            `Downside case assumes a 25% contraction from baseline (${downside.toFixed(2)}).`,
            `Base case tracks current trend (${base.toFixed(2)}).`,
            `Upside case assumes a 30% improvement (${upside.toFixed(2)}).`
        ],
        recommendations: [
            'Plan resource allocation around the base case.',
            'Define trigger conditions for downside mitigation.',
            'Prepare a scale-up checklist for upside signals.'
        ]
    };
}

function buildOptimizeResult(domain, signals) {
    const bottlenecks = signals.lines.length > 0 ? signals.lines.slice(0, 4) : [
        'handoff latency',
        'unclear ownership',
        'manual rework',
        'missing quality gates'
    ];

    const optimizations = bottlenecks.map((item, index) => {
        return `Optimization ${index + 1}: Resolve "${item}" with a measurable SLA and owner.`;
    });

    return {
        summary: `Prepared ${optimizations.length} targeted optimization moves for ${domain.toLowerCase()}.`,
        metrics: [
            asMetric('Bottlenecks', bottlenecks.length),
            asMetric('Optimizations', optimizations.length),
            asMetric('Expected Gain', `${Math.min(40, 10 + bottlenecks.length * 5)}%`)
        ],
        details: optimizations,
        recommendations: [
            'Implement highest-impact optimization first.',
            'Measure cycle time before and after each change.',
            'Retire low-value steps once stable.'
        ]
    };
}

export function analyzeUtilityIntent(utility) {
    const tokens = tokenizeId(utility.id || '');
    const action = chooseAction(tokens);
    const archetype = ACTION_ARCHETYPE[action] || 'coach';
    const domain = resolveDomain(tokens, utility.category, action);
    const actionLabel = titleCase(action.replace(/-/g, ' '));

    return {
        id: utility.id,
        name: utility.name || titleCase(tokens.join(' ')),
        category: utility.category,
        action,
        actionLabel,
        archetype,
        domain,
        intent: buildIntentSentence(archetype, action, domain),
        workflow: buildWorkflow(archetype, domain),
        inputHint: buildDefaultInputHint(archetype)
    };
}

export function runUtilityIntent(utility, rawInput = '', options = {}) {
    const analysis = analyzeUtilityIntent(utility);
    const signals = extractInputSignals(rawInput);
    const archetype = options.archetype || analysis.archetype;

    let result;
    switch (archetype) {
        case 'quantify':
            result = buildQuantifyResult(analysis.domain, signals);
            break;
        case 'inspect':
            result = buildInspectResult(analysis.domain, signals);
            break;
        case 'plan':
            result = buildPlanResult(analysis.domain, signals);
            break;
        case 'generate':
            result = buildGenerateResult(analysis.domain, signals);
            break;
        case 'coach':
            result = buildCoachResult(analysis.domain, signals);
            break;
        case 'explore':
            result = buildExploreResult(analysis.domain, signals);
            break;
        case 'simulate':
            result = buildSimulateResult(analysis.domain, signals);
            break;
        case 'optimize':
            result = buildOptimizeResult(analysis.domain, signals);
            break;
        default:
            result = buildCoachResult(analysis.domain, signals);
            break;
    }

    return {
        utilityId: utility.id,
        utilityName: utility.name,
        category: utility.category,
        action: analysis.action,
        archetype,
        intent: analysis.intent,
        workflow: analysis.workflow,
        inputEcho: signals.trimmed,
        generatedAt: new Date().toISOString(),
        ...result
    };
}
