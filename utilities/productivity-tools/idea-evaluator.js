import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "idea-evaluator",
    "name": "Idea Evaluator",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "evaluator",
    "archetype": "coach",
    "domain": "Idea",
    "intent": "Evaluator gives targeted Idea guidance with next actions.",
    "workflow": [
        "Assess idea baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "idea",
        "evaluator"
    ]
};

export default createBespokeUtility(metadata);
