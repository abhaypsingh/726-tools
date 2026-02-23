import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "color-palette-extractor",
    "name": "Color Palette Extractor",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "extractor",
    "archetype": "coach",
    "domain": "Color Palette",
    "intent": "Extractor gives targeted Color Palette guidance with next actions.",
    "workflow": [
        "Assess color palette baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "color",
        "palette",
        "extractor"
    ]
};

export default createBespokeUtility(metadata);
