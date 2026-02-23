import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "research-paper-analyzer",
    "name": "Research Paper Analyzer",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Research Paper",
    "intent": "Analyzer reviews Research Paper input, highlights signals, and flags risks.",
    "workflow": [
        "Parse research paper context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "research",
        "paper",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
