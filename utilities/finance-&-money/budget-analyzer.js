import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "budget-analyzer",
    "name": "Budget Analyzer",
    "category": "finance & money",
    "description": "A finance & money utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Budget",
    "intent": "Analyzer reviews Budget input, highlights signals, and flags risks.",
    "workflow": [
        "Parse budget context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "budget",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
