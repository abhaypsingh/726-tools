import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "decoration-ideas",
    "name": "Decoration Ideas",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "ideas",
    "archetype": "coach",
    "domain": "Decoration",
    "intent": "Ideas gives targeted Decoration guidance with next actions.",
    "workflow": [
        "Assess decoration baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "decoration",
        "ideas"
    ]
};

export default createBespokeUtility(metadata);
