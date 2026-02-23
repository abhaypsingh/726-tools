import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "weather-analyzer",
    "name": "Weather Analyzer",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Weather",
    "intent": "Analyzer reviews Weather input, highlights signals, and flags risks.",
    "workflow": [
        "Parse weather context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "weather",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
