import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "water-quality-tester",
    "name": "Water Quality Tester",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "tester",
    "archetype": "inspect",
    "domain": "Water Quality",
    "intent": "Tester reviews Water Quality input, highlights signals, and flags risks.",
    "workflow": [
        "Parse water quality context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "water",
        "quality",
        "tester"
    ]
};

export default createBespokeUtility(metadata);
