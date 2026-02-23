import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "contrast-calculator",
    "name": "Contrast Calculator",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Contrast",
    "intent": "Calculator turns Contrast input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect contrast inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "contrast",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
