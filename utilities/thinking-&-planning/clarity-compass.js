import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "clarity-compass",
    "name": "Clarity Compass",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Clarity",
    "intent": "Navigator explores Clarity options and prioritizes the strongest paths.",
    "workflow": [
        "Frame clarity search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "clarity",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
