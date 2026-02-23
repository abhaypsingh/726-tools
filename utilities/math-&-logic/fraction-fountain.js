import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "fraction-fountain",
    "name": "Fraction Fountain",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "fountain",
    "archetype": "coach",
    "domain": "Fraction",
    "intent": "Fountain gives targeted Fraction guidance with next actions.",
    "workflow": [
        "Assess fraction baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "fraction",
        "fountain"
    ]
};

export default createBespokeUtility(metadata);
