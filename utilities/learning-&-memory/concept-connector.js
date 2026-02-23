import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "concept-connector",
    "name": "Concept Connector",
    "category": "learning & memory",
    "description": "Connect disparate concepts",
    "complexity": "intermediate",
    "action": "connector",
    "archetype": "coach",
    "domain": "Concept",
    "intent": "Connector gives targeted Concept guidance with next actions.",
    "workflow": [
        "Assess concept baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "concept",
        "connector"
    ]
};

export default createBespokeUtility(metadata);
