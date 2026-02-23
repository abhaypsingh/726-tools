import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "salary-negotiator",
    "name": "Salary Negotiator",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "negotiator",
    "archetype": "coach",
    "domain": "Salary",
    "intent": "Negotiator gives targeted Salary guidance with next actions.",
    "workflow": [
        "Assess salary baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "salary",
        "negotiator"
    ]
};

export default createBespokeUtility(metadata);
