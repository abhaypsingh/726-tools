import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "leadership-trainer",
    "name": "Leadership Trainer",
    "category": "personal development",
    "description": "A personal development utility",
    "complexity": "advanced",
    "action": "trainer",
    "archetype": "coach",
    "domain": "Leadership",
    "intent": "Trainer gives targeted Leadership guidance with next actions.",
    "workflow": [
        "Assess leadership baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "leadership",
        "trainer"
    ]
};

export default createBespokeUtility(metadata);
