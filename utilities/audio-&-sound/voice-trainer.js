import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "voice-trainer",
    "name": "Voice Trainer",
    "category": "audio & sound",
    "description": "A audio & sound utility",
    "complexity": "advanced",
    "action": "trainer",
    "archetype": "coach",
    "domain": "Voice",
    "intent": "Trainer gives targeted Voice guidance with next actions.",
    "workflow": [
        "Assess voice baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "voice",
        "trainer"
    ]
};

export default createBespokeUtility(metadata);
