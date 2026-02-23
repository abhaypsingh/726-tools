import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "would-you-rather",
    "name": "Would You Rather",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "rather",
    "archetype": "coach",
    "domain": "Would You",
    "intent": "Rather gives targeted Would You guidance with next actions.",
    "workflow": [
        "Assess would you baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "would",
        "you",
        "rather"
    ]
};

export default createBespokeUtility(metadata);
