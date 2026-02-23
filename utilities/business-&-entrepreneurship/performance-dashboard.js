import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "performance-dashboard",
    "name": "Performance Dashboard",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "dashboard",
    "archetype": "coach",
    "domain": "Performance",
    "intent": "Dashboard gives targeted Performance guidance with next actions.",
    "workflow": [
        "Assess performance baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "performance",
        "dashboard"
    ]
};

export default createBespokeUtility(metadata);
