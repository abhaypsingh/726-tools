import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "passphrase-generator",
    "name": "Passphrase Generator",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Passphrase",
    "intent": "Generator creates concrete Passphrase outputs you can use immediately.",
    "workflow": [
        "Interpret passphrase direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "passphrase",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
