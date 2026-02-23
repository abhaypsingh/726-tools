import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "vpn-selector",
    "name": "Vpn Selector",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Vpn",
    "intent": "Finder explores Vpn options and prioritizes the strongest paths.",
    "workflow": [
        "Frame vpn search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "vpn",
        "selector"
    ]
};

export default createBespokeUtility(metadata);
