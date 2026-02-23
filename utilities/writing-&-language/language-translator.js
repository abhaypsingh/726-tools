import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "language-translator",
    "name": "Language Translator",
    "category": "writing & language",
    "description": "A writing & language utility",
    "complexity": "advanced",
    "action": "converter",
    "archetype": "quantify",
    "domain": "Language",
    "intent": "Converter turns Language input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect language inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "language",
        "translator"
    ]
};

export default createBespokeUtility(metadata);
