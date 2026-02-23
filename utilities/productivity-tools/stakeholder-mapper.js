import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "stakeholder-mapper",
    "name": "Stakeholder Mapper",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Stakeholder",
    "intent": "Mapper explores Stakeholder options and prioritizes the strongest paths.",
    "workflow": [
        "Frame stakeholder search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "stakeholder",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
