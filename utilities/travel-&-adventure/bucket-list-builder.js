import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "bucket-list-builder",
    "name": "Bucket List Builder",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Bucket List",
    "intent": "Builder structures Bucket List input into a practical step-by-step plan.",
    "workflow": [
        "Define bucket list objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "bucket",
        "list",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
