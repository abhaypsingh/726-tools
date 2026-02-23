import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "digital-footprint",
    "name": "Digital Footprint",
    "category": "privacy & security",
    "description": "A privacy & security utility",
    "complexity": "advanced",
    "action": "footprint",
    "archetype": "coach",
    "domain": "Digital",
    "intent": "Footprint gives targeted Digital guidance with next actions.",
    "workflow": [
        "Assess digital baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "digital",
        "footprint"
    ]
};

export default createBespokeUtility(metadata);
