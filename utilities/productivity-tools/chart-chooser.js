import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "chart-chooser",
    "name": "Chart Chooser",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "chooser",
    "archetype": "coach",
    "domain": "Chart",
    "intent": "Chooser gives targeted Chart guidance with next actions.",
    "workflow": [
        "Assess chart baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "chart",
        "chooser"
    ]
};

export default createBespokeUtility(metadata);
