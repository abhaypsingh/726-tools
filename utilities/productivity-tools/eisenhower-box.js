import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "eisenhower-box",
    "name": "Eisenhower Box",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "box",
    "archetype": "coach",
    "domain": "Eisenhower",
    "intent": "Box gives targeted Eisenhower guidance with next actions.",
    "workflow": [
        "Assess eisenhower baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "eisenhower",
        "box"
    ]
};

export default createBespokeUtility(metadata);
