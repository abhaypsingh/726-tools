import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "periodic-table-explorer",
    "name": "Periodic Table Explorer",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "explorer",
    "archetype": "coach",
    "domain": "Periodic Table",
    "intent": "Explorer gives targeted Periodic Table guidance with next actions.",
    "workflow": [
        "Assess periodic table baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "periodic",
        "table",
        "explorer"
    ]
};

export default createBespokeUtility(metadata);
