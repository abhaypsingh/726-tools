import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "article-archive",
    "name": "Article Archive",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "archive",
    "archetype": "coach",
    "domain": "Article",
    "intent": "Archive gives targeted Article guidance with next actions.",
    "workflow": [
        "Assess article baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "article",
        "archive"
    ]
};

export default createBespokeUtility(metadata);
