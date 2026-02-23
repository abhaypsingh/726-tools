import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "metadata-cleaner",
    "name": "Metadata Cleaner",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "cleaner",
    "archetype": "coach",
    "domain": "Metadata",
    "intent": "Cleaner gives targeted Metadata guidance with next actions.",
    "workflow": [
        "Assess metadata baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "metadata",
        "cleaner"
    ]
};

export default createBespokeUtility(metadata);
