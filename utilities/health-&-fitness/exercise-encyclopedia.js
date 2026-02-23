import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "exercise-encyclopedia",
    "name": "Exercise Encyclopedia",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "encyclopedia",
    "archetype": "coach",
    "domain": "Exercise",
    "intent": "Encyclopedia gives targeted Exercise guidance with next actions.",
    "workflow": [
        "Assess exercise baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "exercise",
        "encyclopedia"
    ]
};

export default createBespokeUtility(metadata);
