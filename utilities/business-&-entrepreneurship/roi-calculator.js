import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "roi-calculator",
    "name": "Roi Calculator",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "calculator",
    "archetype": "quantify",
    "domain": "Roi",
    "intent": "Calculator turns Roi input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect roi inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "roi",
        "calculator"
    ]
};

export default createBespokeUtility(metadata);
