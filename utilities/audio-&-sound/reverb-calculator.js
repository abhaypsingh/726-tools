import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "reverb-calculator",
    "name": "Reverb Calculator",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Reverb",
    "intent": "Calculator turns Reverb input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect reverb inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "reverb",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
