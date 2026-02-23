import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sleep-debt-calculator",
    "name": "Sleep Debt Calculator",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Sleep Debt",
    "intent": "Calculator turns Sleep Debt input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect sleep debt inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "sleep",
        "debt",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
