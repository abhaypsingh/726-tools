import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "persuasion-palette",
    "name": "Persuasion Palette",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "palette",
    "archetype": "coach",
    "domain": "Persuasion",
    "intent": "Palette gives targeted Persuasion guidance with next actions.",
    "workflow": [
        "Assess persuasion baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "persuasion",
        "palette"
    ]
};

export default createBespokeUtility(metadata);
