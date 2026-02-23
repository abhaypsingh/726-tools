import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "nutrition-analyzer",
    "name": "Nutrition Analyzer",
    "category": "health & fitness",
    "description": "A health & fitness utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Nutrition",
    "intent": "Analyzer reviews Nutrition input, highlights signals, and flags risks.",
    "workflow": [
        "Parse nutrition context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "nutrition",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
