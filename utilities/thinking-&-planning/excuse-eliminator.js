import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "excuse-eliminator",
    "name": "Excuse Eliminator",
    "category": "thinking & planning",
    "description": "Transform your excuses into actionable plans and overcome procrastination",
    "complexity": "advanced",
    "action": "eliminator",
    "archetype": "coach",
    "domain": "Excuse",
    "intent": "Eliminator gives targeted Excuse guidance with next actions.",
    "workflow": [
        "Assess excuse baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "excuse",
        "eliminator"
    ]
};

export default createBespokeUtility(metadata);
