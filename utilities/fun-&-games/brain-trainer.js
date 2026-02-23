import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "brain-trainer",
    "name": "Brain Trainer",
    "category": "fun & games",
    "description": "A fun & games utility",
    "complexity": "advanced",
    "action": "trainer",
    "archetype": "coach",
    "domain": "Brain",
    "intent": "Trainer gives targeted Brain guidance with next actions.",
    "workflow": [
        "Assess brain baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "brain",
        "trainer"
    ]
};

export default createBespokeUtility(metadata);
