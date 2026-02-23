import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recipe-optimizer",
    "name": "Recipe Optimizer",
    "category": "food & cooking",
    "description": "A food & cooking utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Recipe",
    "intent": "Optimizer optimizes Recipe workflows for better performance.",
    "workflow": [
        "Audit recipe flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "recipe",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
