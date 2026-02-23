import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sports-analyzer",
    "name": "Sports Analyzer",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Sports",
    "intent": "Analyzer reviews Sports input, highlights signals, and flags risks.",
    "workflow": [
        "Parse sports context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "sports",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
