import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "logic-puzzle-solver",
    "name": "Logic Puzzle Solver",
    "category": "math & logic",
    "description": "A math & logic utility",
    "complexity": "advanced",
    "action": "solver",
    "archetype": "coach",
    "domain": "Logic Puzzle",
    "intent": "Solver gives targeted Logic Puzzle guidance with next actions.",
    "workflow": [
        "Assess logic puzzle baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "logic",
        "puzzle",
        "solver"
    ]
};

export default createBespokeUtility(metadata);
