import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recipe-ratio-calculator",
    "name": "Recipe Ratio Calculator",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Recipe Ratio",
    "intent": "Calculator turns Recipe Ratio input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect recipe ratio inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "recipe",
        "ratio",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
