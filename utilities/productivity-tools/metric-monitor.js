import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "metric-monitor",
    "name": "Metric Monitor",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Metric",
    "intent": "Monitor reviews Metric input, highlights signals, and flags risks.",
    "workflow": [
        "Parse metric context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "metric",
        "monitor"
    ]
};

export default createBespokeUtility(metadata);
