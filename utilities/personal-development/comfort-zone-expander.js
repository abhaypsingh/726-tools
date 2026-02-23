import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "comfort-zone-expander",
    "name": "Comfort Zone Expander",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "expander",
    "archetype": "coach",
    "domain": "Comfort Zone",
    "intent": "Expander gives targeted Comfort Zone guidance with next actions.",
    "workflow": [
        "Assess comfort zone baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "comfort",
        "zone",
        "expander"
    ]
};

export default createBespokeUtility(metadata);
