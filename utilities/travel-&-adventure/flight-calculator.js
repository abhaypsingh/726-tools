import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "flight-calculator",
    "name": "Flight Calculator",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Flight",
    "intent": "Calculator turns Flight input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect flight inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "flight",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
