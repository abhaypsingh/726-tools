import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "phishing-detector",
    "name": "Phishing Detector",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Phishing",
    "intent": "Analyzer reviews Phishing input, highlights signals, and flags risks.",
    "workflow": [
        "Parse phishing context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "phishing",
        "detector"
    ]
};

export default createBespokeUtility(metadata);
