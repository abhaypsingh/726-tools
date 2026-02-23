import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "docker-optimizer",
    "name": "Docker Optimizer",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Docker",
    "intent": "Optimizer optimizes Docker workflows for better performance.",
    "workflow": [
        "Audit docker flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "docker",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
