import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "energy-optimizer",
    "name": "Energy Optimizer",
    "category": "productivity & focus",
    "description": "Track and optimize your energy levels throughout the day",
    "complexity": "beginner",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Energy",
    "intent": "Optimizer optimizes Energy workflows for better performance.",
    "workflow": [
        "Audit energy flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "energy",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
