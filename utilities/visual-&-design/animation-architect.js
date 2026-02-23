import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "animation-architect",
    "name": "Animation Architect",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Animation",
    "intent": "Architect structures Animation input into a practical step-by-step plan.",
    "workflow": [
        "Define animation objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "animation",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
