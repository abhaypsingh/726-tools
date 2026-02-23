import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "meal-cost-calculator",
    "name": "Meal Cost Calculator",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Meal Cost",
    "intent": "Calculator turns Meal Cost input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect meal cost inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "meal",
        "cost",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
