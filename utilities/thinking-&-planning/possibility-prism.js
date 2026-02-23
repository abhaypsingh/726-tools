import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "possibility-prism",
    "name": "Possibility Prism",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "prism",
    "archetype": "coach",
    "domain": "Possibility",
    "intent": "Prism gives targeted Possibility guidance with next actions.",
    "workflow": [
        "Assess possibility baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "possibility",
        "prism"
    ]
};

export default createBespokeUtility(metadata);
