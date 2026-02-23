import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "travel-optimizer",
    "name": "Travel Optimizer",
    "category": "travel & adventure",
    "description": "A travel & adventure utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Travel",
    "intent": "Optimizer optimizes Travel workflows for better performance.",
    "workflow": [
        "Audit travel flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "travel",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
