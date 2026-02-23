import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "micro-break-oracle",
    "name": "🧘 Micro Break Oracle",
    "category": "productivity & focus",
    "description": "Get personalized break suggestions based on your current state and work duration",
    "complexity": "advanced",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Micro Break",
    "intent": "Advisor gives targeted Micro Break guidance with next actions.",
    "workflow": [
        "Assess micro break baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "micro",
        "break",
        "oracle"
    ]
};

export default createBespokeUtility(metadata);
