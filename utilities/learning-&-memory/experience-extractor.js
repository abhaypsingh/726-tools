import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "experience-extractor",
    "name": "Experience Extractor",
    "category": "learning & memory",
    "description": "Extract lessons from experiences",
    "complexity": "intermediate",
    "action": "extractor",
    "archetype": "coach",
    "domain": "Experience",
    "intent": "Extractor gives targeted Experience guidance with next actions.",
    "workflow": [
        "Assess experience baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "experience",
        "extractor"
    ]
};

export default createBespokeUtility(metadata);
