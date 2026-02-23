import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "room-planner",
    "name": "Room Planner",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Room",
    "intent": "Planner structures Room input into a practical step-by-step plan.",
    "workflow": [
        "Define room objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "room",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
