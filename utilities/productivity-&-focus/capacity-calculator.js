import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "capacity-calculator",
    "name": "Capacity Calculator",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Capacity",
    "intent": "Calculator turns Capacity input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect capacity inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "capacity",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
