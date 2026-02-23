import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "timezone-translator",
    "name": "Timezone Translator",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "converter",
    "archetype": "quantify",
    "domain": "Timezone",
    "intent": "Converter turns Timezone input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect timezone inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "timezone",
        "translator"
    ]
};

export default createBespokeUtility(metadata);
