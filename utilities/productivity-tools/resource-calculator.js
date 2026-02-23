import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "resource-calculator",
    "name": "Resource Calculator",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Resource",
    "intent": "Calculator turns Resource input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect resource inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "resource",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
