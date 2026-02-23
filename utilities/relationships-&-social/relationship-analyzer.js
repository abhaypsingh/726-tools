import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "relationship-analyzer",
    "name": "Relationship Analyzer",
    "category": "relationships & social",
    "description": "A relationships & social utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Relationship",
    "intent": "Analyzer reviews Relationship input, highlights signals, and flags risks.",
    "workflow": [
        "Parse relationship context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "relationship",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
