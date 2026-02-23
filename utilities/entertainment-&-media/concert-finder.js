import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "concert-finder",
    "name": "Concert Finder",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "finder",
    "archetype": "explore",
    "domain": "Concert",
    "intent": "Finder explores Concert options and prioritizes the strongest paths.",
    "workflow": [
        "Frame concert search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "concert",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
