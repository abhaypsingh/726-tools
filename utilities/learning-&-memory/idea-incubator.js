import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "idea-incubator",
    "name": "Idea Incubator",
    "category": "learning & memory",
    "description": "Incubate ideas optimally",
    "complexity": "intermediate",
    "action": "incubator",
    "archetype": "coach",
    "domain": "Idea",
    "intent": "Incubator gives targeted Idea guidance with next actions.",
    "workflow": [
        "Assess idea baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "idea",
        "incubator"
    ]
};

export default createBespokeUtility(metadata);
