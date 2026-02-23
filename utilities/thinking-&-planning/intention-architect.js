import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "intention-architect",
    "name": "Intention Architect",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "architect",
    "archetype": "plan",
    "domain": "Intention",
    "intent": "Architect structures Intention input into a practical step-by-step plan.",
    "workflow": [
        "Define intention objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "intention",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
