import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cloud-cost-optimizer",
    "name": "Cloud Cost Optimizer",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Cloud Cost",
    "intent": "Optimizer optimizes Cloud Cost workflows for better performance.",
    "workflow": [
        "Audit cloud cost flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "cloud",
        "cost",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
