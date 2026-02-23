import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "project-analyzer",
    "name": "Project Analyzer",
    "category": "productivity tools",
    "description": "A productivity tools utility",
    "complexity": "advanced",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Project",
    "intent": "Analyzer reviews Project input, highlights signals, and flags risks.",
    "workflow": [
        "Parse project context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "project",
        "analyzer"
    ]
};

export default createBespokeUtility(metadata);
