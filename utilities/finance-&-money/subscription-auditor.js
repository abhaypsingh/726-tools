import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "subscription-auditor",
    "name": "Subscription Auditor",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "auditor",
    "archetype": "inspect",
    "domain": "Subscription",
    "intent": "Auditor reviews Subscription input, highlights signals, and flags risks.",
    "workflow": [
        "Parse subscription context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "subscription",
        "auditor"
    ]
};

export default createBespokeUtility(metadata);
