import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "announcement-architect",
    "name": "Announcement Architect",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Announcement",
    "intent": "Architect structures Announcement input into a practical step-by-step plan.",
    "workflow": [
        "Define announcement objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "announcement",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
