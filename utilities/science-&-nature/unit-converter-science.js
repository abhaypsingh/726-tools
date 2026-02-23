import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "unit-converter-science",
    "name": "Unit Converter Science",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "converter",
    "archetype": "quantify",
    "domain": "Unit Science",
    "intent": "Converter turns Unit Science input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect unit science inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "unit",
        "converter",
        "science"
    ]
};

export default createBespokeUtility(metadata);
