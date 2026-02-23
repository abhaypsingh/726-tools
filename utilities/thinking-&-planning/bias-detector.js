import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "bias-detector",
    "name": "Bias Detector",
    "category": "thinking & planning",
    "description": "A thinking & planning utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Bias",
    "intent": "Analyzer reviews Bias input, highlights signals, and flags risks.",
    "workflow": [
        "Parse bias context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "bias",
        "detector"
    ]
};

export default createBespokeUtility(metadata);
