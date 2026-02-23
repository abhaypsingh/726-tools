import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "intuition-amplifier",
    "name": "🎯 Intuition Amplifier",
    "category": "thinking & planning",
    "description": "Strengthen and clarify your gut feelings by filtering out mental noise",
    "complexity": "advanced",
    "action": "amplifier",
    "archetype": "coach",
    "domain": "Intuition",
    "intent": "Amplifier gives targeted Intuition guidance with next actions.",
    "workflow": [
        "Assess intuition baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "intuition",
        "amplifier"
    ]
};

export default createBespokeUtility(metadata);
