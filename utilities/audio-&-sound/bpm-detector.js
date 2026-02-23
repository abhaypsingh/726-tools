import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "bpm-detector",
    "name": "Bpm Detector",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Bpm",
    "intent": "Analyzer reviews Bpm input, highlights signals, and flags risks.",
    "workflow": [
        "Parse bpm context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "bpm",
        "detector"
    ]
};

export default createBespokeUtility(metadata);
