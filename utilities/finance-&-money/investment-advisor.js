import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "investment-advisor",
    "name": "Investment Advisor",
    "category": "finance & money",
    "description": "A finance & money utility",
    "complexity": "advanced",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Investment",
    "intent": "Advisor gives targeted Investment guidance with next actions.",
    "workflow": [
        "Assess investment baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "investment",
        "advisor"
    ]
};

export default createBespokeUtility(metadata);
