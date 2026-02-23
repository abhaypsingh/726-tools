import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "social-media-scheduler",
    "name": "Social Media Scheduler",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "scheduler",
    "archetype": "plan",
    "domain": "Social Media",
    "intent": "Scheduler structures Social Media input into a practical step-by-step plan.",
    "workflow": [
        "Define social media objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "social",
        "media",
        "scheduler"
    ]
};

export default createBespokeUtility(metadata);
