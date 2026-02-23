import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "dependency-detector",
    "name": "Dependency Detector",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Dependency",
    "intent": "Analyzer reviews Dependency input, highlights signals, and flags risks.",
    "workflow": [
        "Parse dependency context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "dependency",
        "detector"
    ]
};

export default createBespokeUtility(metadata);
