import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "reflection-reservoir",
    "name": "Reflection Reservoir",
    "category": "learning & memory",
    "description": "Store reflections for reuse",
    "complexity": "intermediate",
    "action": "reservoir",
    "archetype": "coach",
    "domain": "Reflection",
    "intent": "Reservoir gives targeted Reflection guidance with next actions.",
    "workflow": [
        "Assess reflection baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "reflection",
        "reservoir"
    ]
};

export default createBespokeUtility(metadata);
