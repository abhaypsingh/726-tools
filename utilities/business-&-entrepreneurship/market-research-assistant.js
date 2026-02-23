import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "market-research-assistant",
    "name": "Market Research Assistant",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "advanced",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Market Research",
    "intent": "Assistant gives targeted Market Research guidance with next actions.",
    "workflow": [
        "Assess market research baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "market",
        "research",
        "assistant"
    ]
};

export default createBespokeUtility(metadata);
