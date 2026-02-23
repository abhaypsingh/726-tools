import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "chore-chart",
    "name": "Chore Chart",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "chart",
    "archetype": "coach",
    "domain": "Chore",
    "intent": "Chart gives targeted Chore guidance with next actions.",
    "workflow": [
        "Assess chore baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "chore",
        "chart"
    ]
};

export default createBespokeUtility(metadata);
