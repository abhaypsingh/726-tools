import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mortgage-maven",
    "name": "Mortgage Maven",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "maven",
    "archetype": "coach",
    "domain": "Mortgage",
    "intent": "Maven gives targeted Mortgage guidance with next actions.",
    "workflow": [
        "Assess mortgage baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mortgage",
        "maven"
    ]
};

export default createBespokeUtility(metadata);
