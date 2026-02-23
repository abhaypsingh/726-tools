import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "meeting-timer",
    "name": "⏰ Meeting Timer",
    "category": "productivity tools",
    "description": "Professional meeting management with agenda tracking and time allocation",
    "complexity": "advanced",
    "action": "timer",
    "archetype": "coach",
    "domain": "Meeting",
    "intent": "Timer gives targeted Meeting guidance with next actions.",
    "workflow": [
        "Assess meeting baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "meeting",
        "timer"
    ]
};

export default createBespokeUtility(metadata);
