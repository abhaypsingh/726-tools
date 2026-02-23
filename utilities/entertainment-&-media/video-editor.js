import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "video-editor",
    "name": "Video Editor",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "editor",
    "archetype": "coach",
    "domain": "Video",
    "intent": "Editor gives targeted Video guidance with next actions.",
    "workflow": [
        "Assess video baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "video",
        "editor"
    ]
};

export default createBespokeUtility(metadata);
