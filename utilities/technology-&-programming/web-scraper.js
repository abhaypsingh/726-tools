import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "web-scraper",
    "name": "Web Scraper",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "scraper",
    "archetype": "coach",
    "domain": "Web",
    "intent": "Scraper gives targeted Web guidance with next actions.",
    "workflow": [
        "Assess web baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "web",
        "scraper"
    ]
};

export default createBespokeUtility(metadata);
