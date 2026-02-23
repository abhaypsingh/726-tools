import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "distraction-deflector",
    "name": "Distraction Deflector",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "deflector",
    "archetype": "coach",
    "domain": "Distraction",
    "intent": "Deflector gives targeted Distraction guidance with next actions.",
    "workflow": [
        "Assess distraction baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "distraction",
        "deflector"
    ]
};

export default createBespokeUtility(metadata);
