import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "document-organizer",
    "name": "Document Organizer",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "organizer",
    "archetype": "plan",
    "domain": "Document",
    "intent": "Organizer structures Document input into a practical step-by-step plan.",
    "workflow": [
        "Define document objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "document",
        "organizer"
    ]
};

export default createBespokeUtility(metadata);
