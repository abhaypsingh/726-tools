import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "risk-calculator",
    "name": "Risk Calculator",
    "category": "thinking & planning",
    "description": "A thinking & planning utility",
    "complexity": "advanced",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Risk",
    "intent": "Calculator turns Risk input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect risk inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "risk",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
