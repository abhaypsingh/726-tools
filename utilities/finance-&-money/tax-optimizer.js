import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tax-optimizer",
    "name": "Tax Optimizer",
    "category": "finance & money",
    "description": "A finance & money utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Tax",
    "intent": "Optimizer optimizes Tax workflows for better performance.",
    "workflow": [
        "Audit tax flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "tax",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
