import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "opportunity-optimizer",
    "name": "Opportunity Optimizer",
    "category": "thinking & planning",
    "description": "Evaluate opportunities systematically",
    "complexity": "intermediate",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Opportunity",
    "intent": "Optimizer optimizes Opportunity workflows for better performance.",
    "workflow": [
        "Audit opportunity flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "opportunity",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
