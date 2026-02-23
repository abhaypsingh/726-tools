import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "instruction-illustrator",
    "name": "Instruction Illustrator",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "illustrator",
    "archetype": "coach",
    "domain": "Instruction",
    "intent": "Illustrator gives targeted Instruction guidance with next actions.",
    "workflow": [
        "Assess instruction baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "instruction",
        "illustrator"
    ]
};

export default createBespokeUtility(metadata);
