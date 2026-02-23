import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "innovation-catalyst",
    "name": "Innovation Catalyst",
    "category": "thinking & planning",
    "description": "A thinking & planning utility",
    "complexity": "advanced",
    "action": "catalyst",
    "archetype": "coach",
    "domain": "Innovation",
    "intent": "Catalyst gives targeted Innovation guidance with next actions.",
    "workflow": [
        "Assess innovation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "innovation",
        "catalyst"
    ]
};

export default createBespokeUtility(metadata);
