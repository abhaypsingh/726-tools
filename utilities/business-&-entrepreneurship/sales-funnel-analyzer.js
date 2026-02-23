import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sales-funnel-analyzer",
    "name": "Sales Funnel Analyzer",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Sales Funnel",
    "intent": "Analyzer reviews Sales Funnel input, highlights signals, and flags risks.",
    "workflow": [
        "Parse sales funnel context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "sales",
        "funnel",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
