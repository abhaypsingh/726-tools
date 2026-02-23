import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "network-monitor",
    "name": "Network Monitor",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Network",
    "intent": "Monitor reviews Network input, highlights signals, and flags risks.",
    "workflow": [
        "Parse network context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "network",
        "monitor"
    ]
};

export default createBespokeUtility(metadata);
