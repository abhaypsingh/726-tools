import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "currency-converter-plus",
    "name": "Currency Converter Plus",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "converter",
    "archetype": "quantify",
    "domain": "Currency",
    "intent": "Converter turns Currency input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect currency inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "currency",
        "converter"
    ]
};

export default createBespokeUtility(metadata);
