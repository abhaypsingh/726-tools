import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "calorie-calculator",
    "name": "Calorie Calculator",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Calorie",
    "intent": "Calculator turns Calorie input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect calorie inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "calorie",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
