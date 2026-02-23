import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "stress-monitor",
    "name": "Stress Monitor",
    "category": "emotions & wellness",
    "description": "A emotions & wellness utility",
    "complexity": "advanced",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Stress",
    "intent": "Monitor reviews Stress input, highlights signals, and flags risks.",
    "workflow": [
        "Parse stress context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "stress",
        "monitor"
    ]
};

export default createBespokeUtility(metadata);
