import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "json-formatter",
    "name": "Json Formatter",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "converter",
    "archetype": "quantify",
    "domain": "Json",
    "intent": "Converter turns Json input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect json inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "json",
        "formatter"
    ]
};

export default createBespokeUtility(metadata);
