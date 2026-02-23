import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "creativity-catalyst",
    "name": "Creativity Catalyst",
    "category": "thinking & planning",
    "description": "Spark ideas through constraints",
    "complexity": "intermediate",
    "action": "catalyst",
    "archetype": "coach",
    "domain": "Creativity",
    "intent": "Catalyst gives targeted Creativity guidance with next actions.",
    "workflow": [
        "Assess creativity baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "creativity",
        "catalyst"
    ]
};

export default createBespokeUtility(metadata);
