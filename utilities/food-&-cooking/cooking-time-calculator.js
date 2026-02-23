import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cooking-time-calculator",
    "name": "Cooking Time Calculator",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Cooking Time",
    "intent": "Calculator turns Cooking Time input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect cooking time inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "cooking",
        "time",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
