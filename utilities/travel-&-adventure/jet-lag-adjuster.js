import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "jet-lag-adjuster",
    "name": "Jet Lag Adjuster",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "adjuster",
    "archetype": "coach",
    "domain": "Jet Lag",
    "intent": "Adjuster gives targeted Jet Lag guidance with next actions.",
    "workflow": [
        "Assess jet lag baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "jet",
        "lag",
        "adjuster"
    ]
};

export default createBespokeUtility(metadata);
