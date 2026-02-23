import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "gratitude-jar",
    "name": "Gratitude Jar",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "jar",
    "archetype": "coach",
    "domain": "Gratitude",
    "intent": "Jar gives targeted Gratitude guidance with next actions.",
    "workflow": [
        "Assess gratitude baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "gratitude",
        "jar"
    ]
};

export default createBespokeUtility(metadata);
