import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "connection-calculator",
    "name": "Connection Calculator",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Connection",
    "intent": "Calculator turns Connection input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect connection inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "connection",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
