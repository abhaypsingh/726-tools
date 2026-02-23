import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "rhythm-writer",
    "name": "Rhythm Writer",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "writer",
    "archetype": "coach",
    "domain": "Rhythm",
    "intent": "Writer gives targeted Rhythm guidance with next actions.",
    "workflow": [
        "Assess rhythm baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "rhythm",
        "writer"
    ]
};

export default createBespokeUtility(metadata);
