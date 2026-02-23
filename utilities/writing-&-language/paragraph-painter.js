import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "paragraph-painter",
    "name": "Paragraph Painter",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "painter",
    "archetype": "coach",
    "domain": "Paragraph",
    "intent": "Painter gives targeted Paragraph guidance with next actions.",
    "workflow": [
        "Assess paragraph baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "paragraph",
        "painter"
    ]
};

export default createBespokeUtility(metadata);
