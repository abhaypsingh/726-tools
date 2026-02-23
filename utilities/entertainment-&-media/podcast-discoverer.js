import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "podcast-discoverer",
    "name": "Podcast Discoverer",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "discoverer",
    "archetype": "coach",
    "domain": "Podcast",
    "intent": "Discoverer gives targeted Podcast guidance with next actions.",
    "workflow": [
        "Assess podcast baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "podcast",
        "discoverer"
    ]
};

export default createBespokeUtility(metadata);
