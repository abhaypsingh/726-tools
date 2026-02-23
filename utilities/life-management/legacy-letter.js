import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "legacy-letter",
    "name": "Legacy Letter",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "letter",
    "archetype": "coach",
    "domain": "Legacy",
    "intent": "Letter gives targeted Legacy guidance with next actions.",
    "workflow": [
        "Assess legacy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "legacy",
        "letter"
    ]
};

export default createBespokeUtility(metadata);
