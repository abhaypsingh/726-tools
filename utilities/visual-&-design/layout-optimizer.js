import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "layout-optimizer",
    "name": "Layout Optimizer",
    "category": "visual & design",
    "description": "A visual & design utility",
    "complexity": "advanced",
    "action": "optimizer",
    "archetype": "optimize",
    "domain": "Layout",
    "intent": "Optimizer optimizes Layout workflows for better performance.",
    "workflow": [
        "Audit layout flow",
        "Find bottlenecks",
        "Apply targeted improvements",
        "Measure gains and iterate"
    ],
    "inputHint": "Describe current process, bottlenecks, and goals.",
    "focusTerms": [
        "layout",
        "optimizer"
    ]
};

export default createBespokeUtility(metadata);
