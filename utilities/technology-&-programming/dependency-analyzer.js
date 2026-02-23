import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "dependency-analyzer",
    "name": "Dependency Analyzer",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Dependency",
    "intent": "Analyzer reviews Dependency input, highlights signals, and flags risks.",
    "workflow": [
        "Parse dependency context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "dependency",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
