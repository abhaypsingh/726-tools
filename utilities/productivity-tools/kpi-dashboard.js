import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "kpi-dashboard",
    "name": "Kpi Dashboard",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "dashboard",
    "archetype": "coach",
    "domain": "Kpi",
    "intent": "Dashboard gives targeted Kpi guidance with next actions.",
    "workflow": [
        "Assess kpi baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "kpi",
        "dashboard"
    ]
};

export default createBespokeUtility(metadata);
