import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "press-release-pro",
    "name": "Press Release Pro",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "pro",
    "archetype": "coach",
    "domain": "Press Release",
    "intent": "Pro gives targeted Press Release guidance with next actions.",
    "workflow": [
        "Assess press release baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "press",
        "release"
    ]
};

export default createBespokeUtility(metadata);
