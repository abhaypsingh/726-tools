import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "heart-rate-zones",
    "name": "Heart Rate Zones",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "zones",
    "archetype": "coach",
    "domain": "Heart Rate",
    "intent": "Zones gives targeted Heart Rate guidance with next actions.",
    "workflow": [
        "Assess heart rate baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "heart",
        "rate",
        "zones"
    ]
};

export default createBespokeUtility(metadata);
