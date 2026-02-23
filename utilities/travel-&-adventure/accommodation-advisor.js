import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "accommodation-advisor",
    "name": "Accommodation Advisor",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Accommodation",
    "intent": "Advisor gives targeted Accommodation guidance with next actions.",
    "workflow": [
        "Assess accommodation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "accommodation",
        "advisor"
    ]
};

export default createBespokeUtility(metadata);
