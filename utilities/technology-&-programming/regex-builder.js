import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "regex-builder",
    "name": "Regex Builder",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "builder",
    "archetype": "plan",
    "domain": "Regex",
    "intent": "Builder structures Regex input into a practical step-by-step plan.",
    "workflow": [
        "Define regex objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "regex",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
