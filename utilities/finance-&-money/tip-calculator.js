import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tip-calculator",
    "name": "Tip Calculator",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Tip",
    "intent": "Calculator turns Tip input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect tip inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "tip",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
