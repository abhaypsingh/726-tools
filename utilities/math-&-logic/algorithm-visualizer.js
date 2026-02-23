import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "algorithm-visualizer",
    "name": "Algorithm Visualizer",
    "category": "math & logic",
    "description": "A math & logic utility",
    "complexity": "advanced",
    "action": "visualizer",
    "archetype": "coach",
    "domain": "Algorithm",
    "intent": "Visualizer gives targeted Algorithm guidance with next actions.",
    "workflow": [
        "Assess algorithm baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "algorithm",
        "visualizer"
    ]
};

export default createBespokeUtility(metadata);
