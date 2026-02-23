import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "systems-analyzer",
    "name": "Systems Analyzer",
    "category": "thinking & planning",
    "description": "A thinking & planning utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Systems",
    "intent": "Analyzer reviews Systems input, highlights signals, and flags risks.",
    "workflow": [
        "Parse systems context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "systems",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
