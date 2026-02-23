import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "event-planner-entertainment",
    "name": "Event Planner Entertainment",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "planner",
    "archetype": "plan",
    "domain": "Event Entertainment",
    "intent": "Planner structures Event Entertainment input into a practical step-by-step plan.",
    "workflow": [
        "Define event entertainment objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "event",
        "planner",
        "entertainment"
    ]
};

export default createBespokeUtility(metadata);
