import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "note-organizer",
    "name": "Note Organizer",
    "category": "learning & memory",
    "description": "A learning & memory utility",
    "complexity": "advanced",
    "action": "organizer",
    "archetype": "plan",
    "domain": "Note",
    "intent": "Organizer structures Note input into a practical step-by-step plan.",
    "workflow": [
        "Define note objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "note",
        "organizer"
    ]
};

export default createBespokeUtility(metadata);
