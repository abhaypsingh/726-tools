import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "calm-calculator",
    "name": "Calm Calculator",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Calm",
    "intent": "Calculator turns Calm input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect calm inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "calm",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
