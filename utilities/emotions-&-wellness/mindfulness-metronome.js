import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mindfulness-metronome",
    "name": "Mindfulness Metronome",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "metronome",
    "archetype": "coach",
    "domain": "Mindfulness",
    "intent": "Metronome gives targeted Mindfulness guidance with next actions.",
    "workflow": [
        "Assess mindfulness baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mindfulness",
        "metronome"
    ]
};

export default createBespokeUtility(metadata);
