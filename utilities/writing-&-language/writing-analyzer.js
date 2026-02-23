import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "writing-analyzer",
    "name": "Writing Analyzer",
    "category": "writing & language",
    "description": "A writing & language utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Writing",
    "intent": "Analyzer reviews Writing input, highlights signals, and flags risks.",
    "workflow": [
        "Parse writing context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "writing",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
