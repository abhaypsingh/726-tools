import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "space-mission-planner",
    "name": "Space Mission Planner",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "planner",
    "archetype": "plan",
    "domain": "Space Mission",
    "intent": "Planner structures Space Mission input into a practical step-by-step plan.",
    "workflow": [
        "Define space mission objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "space",
        "mission",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
