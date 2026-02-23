import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "ecosystem-modeler",
    "name": "Ecosystem Modeler",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "modeler",
    "archetype": "coach",
    "domain": "Ecosystem",
    "intent": "Modeler gives targeted Ecosystem guidance with next actions.",
    "workflow": [
        "Assess ecosystem baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "ecosystem",
        "modeler"
    ]
};

export default createBespokeUtility(metadata);
