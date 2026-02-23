import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "equation-solver",
    "name": "Equation Solver",
    "category": "math & logic",
    "description": "A math & logic utility",
    "complexity": "advanced",
    "action": "solver",
    "archetype": "coach",
    "domain": "Equation",
    "intent": "Solver gives targeted Equation guidance with next actions.",
    "workflow": [
        "Assess equation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "equation",
        "solver"
    ]
};

export default createBespokeUtility(metadata);
