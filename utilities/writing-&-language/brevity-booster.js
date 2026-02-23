import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "brevity-booster",
    "name": "Brevity Booster",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Brevity",
    "intent": "Optimizer optimizes Brevity workflows for better performance.",
    "workflow": [
        "Audit brevity flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "brevity",
        "booster"
    ]
};

export default createBespokeUtility(metadata);
