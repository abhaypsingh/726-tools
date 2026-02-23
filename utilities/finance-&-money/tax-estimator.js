import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tax-estimator",
    "name": "Tax Estimator",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "estimator",
    "archetype": "quantify",
    "domain": "Tax",
    "intent": "Estimator turns Tax input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect tax inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "tax",
        "estimator"
    ]
};

export default createBespokeUtility(metadata);
