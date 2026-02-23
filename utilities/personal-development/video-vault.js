import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "video-vault",
    "name": "Video Vault",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "vault",
    "archetype": "coach",
    "domain": "Video",
    "intent": "Vault gives targeted Video guidance with next actions.",
    "workflow": [
        "Assess video baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "video",
        "vault"
    ]
};

export default createBespokeUtility(metadata);
