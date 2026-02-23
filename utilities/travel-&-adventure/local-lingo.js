import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "local-lingo",
    "name": "Local Lingo",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "lingo",
    "archetype": "coach",
    "domain": "Local",
    "intent": "Lingo gives targeted Local guidance with next actions.",
    "workflow": [
        "Assess local baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "local",
        "lingo"
    ]
};

export default createBespokeUtility(metadata);
