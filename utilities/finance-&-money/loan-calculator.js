import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "loan-calculator",
    "name": "Loan Calculator",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Loan",
    "intent": "Calculator turns Loan input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect loan inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "loan",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
