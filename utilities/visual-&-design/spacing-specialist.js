import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "spacing-specialist",
    "name": "Spacing Specialist",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "specialist",
    "archetype": "coach",
    "domain": "Spacing",
    "intent": "Specialist gives targeted Spacing guidance with next actions.",
    "workflow": [
        "Assess spacing baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "spacing",
        "specialist"
    ]
};

export default createBespokeUtility(metadata);
