import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "dream-diary",
    "name": "Dream Diary",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "diary",
    "archetype": "coach",
    "domain": "Dream",
    "intent": "Diary gives targeted Dream guidance with next actions.",
    "workflow": [
        "Assess dream baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "dream",
        "diary"
    ]
};

export default createBespokeUtility(metadata);
