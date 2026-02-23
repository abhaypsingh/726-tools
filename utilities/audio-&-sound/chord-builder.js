import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "chord-builder",
    "name": "Chord Builder",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Chord",
    "intent": "Builder structures Chord input into a practical step-by-step plan.",
    "workflow": [
        "Define chord objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "chord",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
