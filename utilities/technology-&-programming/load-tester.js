import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "load-tester",
    "name": "Load Tester",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "tester",
    "archetype": "inspect",
    "domain": "Load",
    "intent": "Tester reviews Load input, highlights signals, and flags risks.",
    "workflow": [
        "Parse load context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "load",
        "tester"
    ]
};

export default createBespokeUtility(metadata);
