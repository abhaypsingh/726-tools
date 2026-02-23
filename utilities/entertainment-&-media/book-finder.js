import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "book-finder",
    "name": "Book Finder",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "finder",
    "archetype": "explore",
    "domain": "Book",
    "intent": "Finder explores Book options and prioritizes the strongest paths.",
    "workflow": [
        "Frame book search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "book",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
