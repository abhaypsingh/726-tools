import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "knowledge-gap-finder",
    "name": "Knowledge Gap Finder",
    "category": "learning & memory",
    "description": "Find knowledge gaps",
    "complexity": "advanced",
    "action": "finder",
    "archetype": "explore",
    "domain": "Knowledge Gap",
    "intent": "Finder explores Knowledge Gap options and prioritizes the strongest paths.",
    "workflow": [
        "Frame knowledge gap search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "knowledge",
        "gap",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
