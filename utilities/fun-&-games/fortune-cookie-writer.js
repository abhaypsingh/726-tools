import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "fortune-cookie-writer",
    "name": "Fortune Cookie Writer",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "writer",
    "archetype": "coach",
    "domain": "Fortune Cookie",
    "intent": "Writer gives targeted Fortune Cookie guidance with next actions.",
    "workflow": [
        "Assess fortune cookie baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "fortune",
        "cookie",
        "writer"
    ]
};

export default createBespokeUtility(metadata);
