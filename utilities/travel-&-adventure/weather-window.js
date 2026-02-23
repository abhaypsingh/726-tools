import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "weather-window",
    "name": "Weather Window",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "window",
    "archetype": "coach",
    "domain": "Weather",
    "intent": "Window gives targeted Weather guidance with next actions.",
    "workflow": [
        "Assess weather baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "weather",
        "window"
    ]
};

export default createBespokeUtility(metadata);
