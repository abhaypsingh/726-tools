import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "energy-calculator",
    "name": "Energy Calculator",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Energy",
    "intent": "Calculator turns Energy input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect energy inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "energy",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
