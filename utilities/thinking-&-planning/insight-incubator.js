import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "insight-incubator",
    "name": "Insight Incubator",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "incubator",
    "archetype": "coach",
    "domain": "Insight",
    "intent": "Incubator gives targeted Insight guidance with next actions.",
    "workflow": [
        "Assess insight baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "insight",
        "incubator"
    ]
};

export default createBespokeUtility(metadata);
