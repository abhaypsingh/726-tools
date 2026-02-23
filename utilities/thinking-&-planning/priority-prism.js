import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "priority-prism",
    "name": "Priority Prism",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "prism",
    "archetype": "coach",
    "domain": "Priority",
    "intent": "Prism gives targeted Priority guidance with next actions.",
    "workflow": [
        "Assess priority baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "priority",
        "prism"
    ]
};

export default createBespokeUtility(metadata);
