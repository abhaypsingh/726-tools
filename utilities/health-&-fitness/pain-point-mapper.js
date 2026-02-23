import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pain-point-mapper",
    "name": "Pain Point Mapper",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Pain Point",
    "intent": "Mapper explores Pain Point options and prioritizes the strongest paths.",
    "workflow": [
        "Frame pain point search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "pain",
        "point",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
