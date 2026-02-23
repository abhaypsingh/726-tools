import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "creativity-booster",
    "name": "Creativity Booster",
    "category": "fun & games",
    "description": "A fun & games utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Creativity",
    "intent": "Optimizer optimizes Creativity workflows for better performance.",
    "workflow": [
        "Audit creativity flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "creativity",
        "booster"
    ]
};

export default createBespokeUtility(metadata);
