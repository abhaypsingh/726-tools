import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "social-skills-trainer",
    "name": "Social Skills Trainer",
    "category": "relationships & social",
    "description": "A relationships & social utility",
    "complexity": "advanced",
    "action": "trainer",
    "archetype": "coach",
    "domain": "Social Skills",
    "intent": "Trainer gives targeted Social Skills guidance with next actions.",
    "workflow": [
        "Assess social skills baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "social",
        "skills",
        "trainer"
    ]
};

export default createBespokeUtility(metadata);
