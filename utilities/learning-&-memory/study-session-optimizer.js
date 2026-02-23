import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "study-session-optimizer",
    "name": "Study Session Optimizer",
    "category": "learning & memory",
    "description": "Optimize study sessions",
    "complexity": "intermediate",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Study Session",
    "intent": "Optimizer optimizes Study Session workflows for better performance.",
    "workflow": [
        "Audit study session flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "study",
        "session",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
