import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cash-flow-forecaster",
    "name": "Cash Flow Forecaster",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "forecaster",
    "archetype": "coach",
    "domain": "Cash Flow",
    "intent": "Forecaster gives targeted Cash Flow guidance with next actions.",
    "workflow": [
        "Assess cash flow baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "cash",
        "flow",
        "forecaster"
    ]
};

export default createBespokeUtility(metadata);
