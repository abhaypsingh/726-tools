import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "soil-analyzer",
    "name": "Soil Analyzer",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Soil",
    "intent": "Analyzer reviews Soil input, highlights signals, and flags risks.",
    "workflow": [
        "Parse soil context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "soil",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
