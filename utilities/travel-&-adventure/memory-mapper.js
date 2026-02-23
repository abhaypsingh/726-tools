import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "memory-mapper",
    "name": "Memory Mapper",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Memory",
    "intent": "Mapper explores Memory options and prioritizes the strongest paths.",
    "workflow": [
        "Frame memory search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "memory",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
