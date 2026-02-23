import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "movie-recommender",
    "name": "Movie Recommender",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "recommender",
    "archetype": "coach",
    "domain": "Movie",
    "intent": "Recommender gives targeted Movie guidance with next actions.",
    "workflow": [
        "Assess movie baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "movie",
        "recommender"
    ]
};

export default createBespokeUtility(metadata);
