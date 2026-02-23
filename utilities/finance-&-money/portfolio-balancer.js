import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "portfolio-balancer",
    "name": "Portfolio Balancer",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "balancer",
    "archetype": "quantify",
    "domain": "Portfolio",
    "intent": "Balancer turns Portfolio input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect portfolio inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "portfolio",
        "balancer"
    ]
};

export default createBespokeUtility(metadata);
