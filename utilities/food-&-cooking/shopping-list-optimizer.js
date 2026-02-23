import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "shopping-list-optimizer",
    "name": "Shopping List Optimizer",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Shopping List",
    "intent": "Optimizer optimizes Shopping List workflows for better performance.",
    "workflow": [
        "Audit shopping list flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "shopping",
        "list",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
