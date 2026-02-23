import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "understanding-verifier",
    "name": "Understanding Verifier",
    "category": "learning & memory",
    "description": "Verify true understanding",
    "complexity": "intermediate",
    "action": "verifier",
    "archetype": "coach",
    "domain": "Understanding",
    "intent": "Verifier gives targeted Understanding guidance with next actions.",
    "workflow": [
        "Assess understanding baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "understanding",
        "verifier"
    ]
};

export default createBespokeUtility(metadata);
