import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "achievement-album",
    "name": "Achievement Album",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "album",
    "archetype": "coach",
    "domain": "Achievement",
    "intent": "Album gives targeted Achievement guidance with next actions.",
    "workflow": [
        "Assess achievement baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "achievement",
        "album"
    ]
};

export default createBespokeUtility(metadata);
