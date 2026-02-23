import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "log-analyzer",
    "name": "Log Analyzer",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Log",
    "intent": "Analyzer reviews Log input, highlights signals, and flags risks.",
    "workflow": [
        "Parse log context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "log",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
