import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "course-planner",
    "name": "Course Planner",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Course",
    "intent": "Planner structures Course input into a practical step-by-step plan.",
    "workflow": [
        "Define course objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "course",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
