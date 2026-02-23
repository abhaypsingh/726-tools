import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "api-tester",
    "name": "Api Tester",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "tester",
    "archetype": "inspect",
    "domain": "Api",
    "intent": "Tester reviews Api input, highlights signals, and flags risks.",
    "workflow": [
        "Parse api context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "api",
        "tester"
    ]
};

export default createBespokeUtility(metadata);
