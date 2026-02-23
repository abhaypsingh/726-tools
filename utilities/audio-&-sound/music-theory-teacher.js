import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "music-theory-teacher",
    "name": "Music Theory Teacher",
    "category": "audio & sound",
    "description": "A audio & sound utility",
    "complexity": "advanced",
    "action": "teacher",
    "archetype": "coach",
    "domain": "Music Theory",
    "intent": "Teacher gives targeted Music Theory guidance with next actions.",
    "workflow": [
        "Assess music theory baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "music",
        "theory",
        "teacher"
    ]
};

export default createBespokeUtility(metadata);
