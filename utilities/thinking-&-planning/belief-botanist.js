import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "belief-botanist",
    "name": "Belief Botanist",
    "category": "thinking & planning",
    "description": "Examine and prune belief systems",
    "complexity": "advanced",
    "action": "botanist",
    "archetype": "coach",
    "domain": "Belief",
    "intent": "Botanist gives targeted Belief guidance with next actions.",
    "workflow": [
        "Assess belief baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "belief",
        "botanist"
    ]
};

export default createBespokeUtility(metadata);
