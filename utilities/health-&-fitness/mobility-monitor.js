import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mobility-monitor",
    "name": "Mobility Monitor",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Mobility",
    "intent": "Monitor reviews Mobility input, highlights signals, and flags risks.",
    "workflow": [
        "Parse mobility context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "mobility",
        "monitor"
    ]
};

export default createBespokeUtility(metadata);
