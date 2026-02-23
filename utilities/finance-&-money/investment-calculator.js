import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "investment-calculator",
    "name": "Investment Calculator",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Investment",
    "intent": "Calculator turns Investment input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect investment inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "investment",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
