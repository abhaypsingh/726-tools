import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "session-manager",
    "name": "Session Manager",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "manager",
    "archetype": "plan",
    "domain": "Session",
    "intent": "Manager structures Session input into a practical step-by-step plan.",
    "workflow": [
        "Define session objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "session",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
