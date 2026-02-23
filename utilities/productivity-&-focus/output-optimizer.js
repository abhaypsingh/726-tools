import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "output-optimizer",
    "name": "Output Optimizer",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Output",
    "intent": "Optimizer optimizes Output workflows for better performance.",
    "workflow": [
        "Audit output flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "output",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
