import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "regret-refinery",
    "name": "⚗️ Regret Refinery",
    "category": "thinking & planning",
    "description": "Transform your regrets into valuable life lessons and hard-won wisdom",
    "complexity": "advanced",
    "action": "refinery",
    "archetype": "coach",
    "domain": "Regret",
    "intent": "Refinery gives targeted Regret guidance with next actions.",
    "workflow": [
        "Assess regret baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "regret",
        "refinery"
    ]
};

export default createBespokeUtility(metadata);
