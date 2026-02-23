import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recovery-roadmap",
    "name": "Recovery Roadmap",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "roadmap",
    "archetype": "coach",
    "domain": "Recovery",
    "intent": "Roadmap gives targeted Recovery guidance with next actions.",
    "workflow": [
        "Assess recovery baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "recovery",
        "roadmap"
    ]
};

export default createBespokeUtility(metadata);
