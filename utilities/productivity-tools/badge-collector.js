import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "badge-collector",
    "name": "Badge Collector",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "collector",
    "archetype": "coach",
    "domain": "Badge",
    "intent": "Collector gives targeted Badge guidance with next actions.",
    "workflow": [
        "Assess badge baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "badge",
        "collector"
    ]
};

export default createBespokeUtility(metadata);
