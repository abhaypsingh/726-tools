import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "note-connection-web",
    "name": "Note Connection Web",
    "category": "learning & memory",
    "description": "Connect notes organically",
    "complexity": "intermediate",
    "action": "web",
    "archetype": "coach",
    "domain": "Note Connection",
    "intent": "Web gives targeted Note Connection guidance with next actions.",
    "workflow": [
        "Assess note connection baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "note",
        "connection",
        "web"
    ]
};

export default createBespokeUtility(metadata);
