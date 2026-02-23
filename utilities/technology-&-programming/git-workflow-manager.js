import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "git-workflow-manager",
    "name": "Git Workflow Manager",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "manager",
    "archetype": "plan",
    "domain": "Git Workflow",
    "intent": "Manager structures Git Workflow input into a practical step-by-step plan.",
    "workflow": [
        "Define git workflow objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "git",
        "workflow",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
