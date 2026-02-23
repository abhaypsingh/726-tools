import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "color-analyzer",
    "name": "Color Analyzer",
    "category": "visual & design",
    "description": "A visual & design utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Color",
    "intent": "Analyzer reviews Color input, highlights signals, and flags risks.",
    "workflow": [
        "Parse color context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "color",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
