import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "newsletter-navigator",
    "name": "Newsletter Navigator",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Newsletter",
    "intent": "Navigator explores Newsletter options and prioritizes the strongest paths.",
    "workflow": [
        "Frame newsletter search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "newsletter",
        "navigator"
    ]
};

export default createBespokeUtility(metadata);
