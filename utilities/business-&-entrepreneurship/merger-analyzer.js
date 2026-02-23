import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "merger-analyzer",
    "name": "Merger Analyzer",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Merger",
    "intent": "Analyzer reviews Merger input, highlights signals, and flags risks.",
    "workflow": [
        "Parse merger context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "merger",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
