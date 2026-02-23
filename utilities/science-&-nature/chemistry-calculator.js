import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "chemistry-calculator",
    "name": "Chemistry Calculator",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
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
