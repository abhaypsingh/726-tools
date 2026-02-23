import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "algebra-animator",
    "name": "Algebra Animator",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "animator",
    "archetype": "coach",
    "domain": "Algebra",
    "intent": "Animator gives targeted Algebra guidance with next actions.",
    "workflow": [
        "Assess algebra baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "algebra",
        "animator"
    ]
};

export default createBespokeUtility(metadata);
