import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "chemistry-calculator",
    "name": "Chemistry Calculator",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Chemistry",
    "intent": "Calculator turns Chemistry input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect chemistry inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "chemistry",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
