import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "knowledge-knitter",
    "name": "🧶 Knowledge Knitter",
    "category": "learning & memory",
    "description": "Weave intricate connections between concepts to create your personal knowledge network",
    "complexity": "advanced",
    "action": "knitter",
    "archetype": "coach",
    "domain": "Knowledge",
    "intent": "Knitter gives targeted Knowledge guidance with next actions.",
    "workflow": [
        "Assess knowledge baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "knowledge",
        "knitter"
    ]
};

export default createBespokeUtility(metadata);
