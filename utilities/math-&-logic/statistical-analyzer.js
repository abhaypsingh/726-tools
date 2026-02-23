import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "statistical-analyzer",
    "name": "Statistical Analyzer",
    "category": "math & logic",
    "description": "A math & logic utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Statistical",
    "intent": "Analyzer reviews Statistical input, highlights signals, and flags risks.",
    "workflow": [
        "Parse statistical context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "statistical",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
