import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "performance-profiler",
    "name": "Performance Profiler",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "profiler",
    "archetype": "inspect",
    "domain": "Performance",
    "intent": "Profiler reviews Performance input, highlights signals, and flags risks.",
    "workflow": [
        "Parse performance context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "performance",
        "profiler"
    ]
};

export default createBespokeUtility(metadata);
