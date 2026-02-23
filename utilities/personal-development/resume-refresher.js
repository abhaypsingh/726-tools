import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "resume-refresher",
    "name": "Resume Refresher",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "refresher",
    "archetype": "coach",
    "domain": "Resume",
    "intent": "Refresher gives targeted Resume guidance with next actions.",
    "workflow": [
        "Assess resume baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "resume",
        "refresher"
    ]
};

export default createBespokeUtility(metadata);
