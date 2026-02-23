import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "itinerary-architect",
    "name": "Itinerary Architect",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Itinerary",
    "intent": "Architect structures Itinerary input into a practical step-by-step plan.",
    "workflow": [
        "Define itinerary objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "itinerary",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
