import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "brand-consistency",
    "name": "Brand Consistency",
    "category": "visual & design",
    "description": "A visual & design utility",
    "complexity": "advanced",
    "action": "consistency",
    "archetype": "coach",
    "domain": "Brand",
    "intent": "Consistency gives targeted Brand guidance with next actions.",
    "workflow": [
        "Assess brand baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "brand",
        "consistency"
    ]
};

export default createBespokeUtility(metadata);
