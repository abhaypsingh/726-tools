import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "audio-format-converter",
    "name": "Audio Format Converter",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "converter",
    "archetype": "quantify",
    "domain": "Audio Format",
    "intent": "Converter turns Audio Format input into clear metrics and decision-ready numbers.",
    "workflow": [
        "Collect audio format inputs",
        "Normalize values and units",
        "Compute core metrics",
        "Recommend next move"
    ],
    "inputHint": "Enter numbers, assumptions, and targets (one per line or sentence).",
    "focusTerms": [
        "audio",
        "format",
        "converter"
    ]
};

export default createBespokeUtility(metadata);
