import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "boundary-beacon",
    "name": "Boundary Beacon",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "beacon",
    "archetype": "coach",
    "domain": "Boundary",
    "intent": "Beacon gives targeted Boundary guidance with next actions.",
    "workflow": [
        "Assess boundary baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "boundary",
        "beacon"
    ]
};

export default createBespokeUtility(metadata);
