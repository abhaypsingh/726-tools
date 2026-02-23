import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "compliment-composer",
    "name": "Compliment Composer",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "composer",
    "archetype": "coach",
    "domain": "Compliment",
    "intent": "Composer gives targeted Compliment guidance with next actions.",
    "workflow": [
        "Assess compliment baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "compliment",
        "composer"
    ]
};

export default createBespokeUtility(metadata);
