import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "golden-ratio-guide",
    "name": "Golden Ratio Guide",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Golden Ratio",
    "intent": "Guide gives targeted Golden Ratio guidance with next actions.",
    "workflow": [
        "Assess golden ratio baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "golden",
        "ratio",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
