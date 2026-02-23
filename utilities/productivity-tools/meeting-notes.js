import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "meeting-notes",
    "name": "Meeting Notes",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "notes",
    "archetype": "coach",
    "domain": "Meeting",
    "intent": "Notes gives targeted Meeting guidance with next actions.",
    "workflow": [
        "Assess meeting baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "meeting",
        "notes"
    ]
};

export default createBespokeUtility(metadata);
