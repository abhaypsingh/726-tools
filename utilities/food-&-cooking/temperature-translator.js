import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "temperature-translator",
    "name": "Temperature Translator",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "converter",
    "archetype": "quantify",
    "domain": "Temperature",
    "intent": "Converter turns Temperature input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect temperature inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "temperature",
        "translator"
    ]
};

export default createBespokeUtility(metadata);
