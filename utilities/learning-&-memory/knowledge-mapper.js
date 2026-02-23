import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "knowledge-mapper",
    "name": "Knowledge Mapper",
    "category": "learning & memory",
    "description": "A learning & memory utility",
    "complexity": "advanced",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Knowledge",
    "intent": "Mapper explores Knowledge options and prioritizes the strongest paths.",
    "workflow": [
        "Frame knowledge search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "knowledge",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
