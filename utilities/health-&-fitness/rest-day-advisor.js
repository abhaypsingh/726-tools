import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "rest-day-advisor",
    "name": "Rest Day Advisor",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Rest Day",
    "intent": "Advisor gives targeted Rest Day guidance with next actions.",
    "workflow": [
        "Assess rest day baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "rest",
        "day",
        "advisor"
    ]
};

export default createBespokeUtility(metadata);
