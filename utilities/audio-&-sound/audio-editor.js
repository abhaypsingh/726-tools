import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "audio-editor",
    "name": "Audio Editor",
    "category": "audio & sound",
    "description": "A audio & sound utility",
    "complexity": "advanced",
    "action": "editor",
    "archetype": "coach",
    "domain": "Audio",
    "intent": "Editor gives targeted Audio guidance with next actions.",
    "workflow": [
        "Assess audio baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "audio",
        "editor"
    ]
};

export default createBespokeUtility(metadata);
