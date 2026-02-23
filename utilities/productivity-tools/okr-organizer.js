import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "okr-organizer",
    "name": "Okr Organizer",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "organizer",
    "archetype": "plan",
    "domain": "Okr",
    "intent": "Organizer structures Okr input into a practical step-by-step plan.",
    "workflow": [
        "Define okr objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "okr",
        "organizer"
    ]
};

export default createBespokeUtility(metadata);
