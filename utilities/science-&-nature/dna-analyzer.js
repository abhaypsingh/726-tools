import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "dna-analyzer",
    "name": "Dna Analyzer",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Dna",
    "intent": "Analyzer reviews Dna input, highlights signals, and flags risks.",
    "workflow": [
        "Parse dna context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "dna",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
