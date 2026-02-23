import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "environment-configurator",
    "name": "Environment Configurator",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "configurator",
    "archetype": "coach",
    "domain": "Environment",
    "intent": "Configurator gives targeted Environment guidance with next actions.",
    "workflow": [
        "Assess environment baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "environment",
        "configurator"
    ]
};

export default createBespokeUtility(metadata);
