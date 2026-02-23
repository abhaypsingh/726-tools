import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cashflow-visualizer",
    "name": "Cashflow Visualizer",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "visualizer",
    "archetype": "coach",
    "domain": "Cashflow",
    "intent": "Visualizer gives targeted Cashflow guidance with next actions.",
    "workflow": [
        "Assess cashflow baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "cashflow",
        "visualizer"
    ]
};

export default createBespokeUtility(metadata);
