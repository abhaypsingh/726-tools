import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "event-planner",
    "name": "Event Planner",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Event",
    "intent": "Planner structures Event input into a practical step-by-step plan.",
    "workflow": [
        "Define event objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "event",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
