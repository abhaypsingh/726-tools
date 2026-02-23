import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "acronym-archaeologist",
    "name": "Acronym Archaeologist",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "archaeologist",
    "archetype": "coach",
    "domain": "Acronym",
    "intent": "Archaeologist gives targeted Acronym guidance with next actions.",
    "workflow": [
        "Assess acronym baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "acronym",
        "archaeologist"
    ]
};

export default createBespokeUtility(metadata);
