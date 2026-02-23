import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "accessibility-checker",
    "name": "Accessibility Checker",
    "category": "visual & design",
    "description": "A visual & design utility",
    "complexity": "advanced",
    "action": "checker",
    "archetype": "inspect",
    "domain": "Accessibility",
    "intent": "Checker reviews Accessibility input, highlights signals, and flags risks.",
    "workflow": [
        "Parse accessibility context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "accessibility",
        "checker"
    ]
};

export default createBespokeUtility(metadata);
