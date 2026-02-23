import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "music-playlist-generator",
    "name": "Music Playlist Generator",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "generator",
    "archetype": "generate",
    "domain": "Music Playlist",
    "intent": "Generator creates concrete Music Playlist outputs you can use immediately.",
    "workflow": [
        "Interpret music playlist direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "music",
        "playlist",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
