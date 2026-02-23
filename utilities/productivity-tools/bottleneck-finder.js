import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "bottleneck-finder",
    "name": "Bottleneck Finder",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Bottleneck",
    "intent": "Finder explores Bottleneck options and prioritizes the strongest paths.",
    "workflow": [
        "Frame bottleneck search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "bottleneck",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
