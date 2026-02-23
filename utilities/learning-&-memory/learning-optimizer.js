import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "learning-optimizer",
    "name": "Learning Optimizer",
    "category": "learning & memory",
    "description": "A learning & memory utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Learning",
    "intent": "Optimizer optimizes Learning workflows for better performance.",
    "workflow": [
        "Audit learning flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "learning",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
