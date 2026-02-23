import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "swot-analyzer",
    "name": "Swot Analyzer",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Swot",
    "intent": "Analyzer reviews Swot input, highlights signals, and flags risks.",
    "workflow": [
        "Parse swot context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "swot",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
