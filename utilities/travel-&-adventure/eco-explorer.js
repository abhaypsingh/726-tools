import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "eco-explorer",
    "name": "Eco Explorer",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "explorer",
    "archetype": "coach",
    "domain": "Eco",
    "intent": "Explorer gives targeted Eco guidance with next actions.",
    "workflow": [
        "Assess eco baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "eco",
        "explorer"
    ]
};

export default createBespokeUtility(metadata);
