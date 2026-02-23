import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "goal-gardener",
    "name": "Goal Gardener",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "gardener",
    "archetype": "coach",
    "domain": "Goal",
    "intent": "Gardener gives targeted Goal guidance with next actions.",
    "workflow": [
        "Assess goal baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "goal",
        "gardener"
    ]
};

export default createBespokeUtility(metadata);
