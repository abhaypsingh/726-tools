import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "scenario-simulator",
    "name": "Scenario Simulator",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "simulator",
    "archetype": "simulate",
    "domain": "Scenario",
    "intent": "Simulator models Scenario scenarios to compare likely outcomes.",
    "workflow": [
        "Define scenario assumptions",
        "Model base, upside, downside",
        "Compare scenario deltas",
        "Select robust strategy"
    ],
    "inputHint": "Provide assumptions, variables, and possible scenarios.",
    "focusTerms": [
        "scenario",
        "simulator"
    ]
};

export default createBespokeUtility(metadata);
