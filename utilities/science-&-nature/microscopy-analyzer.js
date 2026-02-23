import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "microscopy-analyzer",
    "name": "Microscopy Analyzer",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Microscopy",
    "intent": "Analyzer reviews Microscopy input, highlights signals, and flags risks.",
    "workflow": [
        "Parse microscopy context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "microscopy",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
