import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mood-mapper",
    "name": "Mood Mapper",
    "category": "emotions & wellness",
    "description": "Map emotional states on valence-arousal grid",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Mood",
    "intent": "Mapper explores Mood options and prioritizes the strongest paths.",
    "workflow": [
        "Frame mood search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "mood",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
