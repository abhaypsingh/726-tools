export const StartupAdvisor = {
    id: 'startup-advisor',
    name: 'Startup Advisor',
    description: 'Get personalized advice for startup challenges and decisions',

    provideAdvice(situation) {
        return {
            analysis: this.analyzeSituation(situation),
            recommendations: this.generateRecommendations(situation),
            resources: this.suggestResources(situation),
            nextSteps: this.outlineNextSteps(situation)
        };
    },

    analyzeSituation(situation) {
        const stage = this.identifyStage(situation);
        const challenges = this.identifyChallenges(situation);
        const strengths = this.identifyStrengths(situation);
        
        return { stage, challenges, strengths };
    },

    identifyStage(situation) {
        if (situation.revenue < 10000) return 'Pre-revenue';
        if (situation.revenue < 100000) return 'Early traction';
        if (situation.revenue < 1000000) return 'Growth stage';
        return 'Scale stage';
    },

    generateRecommendations(situation) {
        const stage = this.identifyStage(situation);
        const recommendations = {
            'Pre-revenue': [
                'Focus on product-market fit',
                'Build MVP and test with users',
                'Keep expenses minimal'
            ],
            'Early traction': [
                'Optimize conversion funnel',
                'Invest in customer acquisition',
                'Build team strategically'
            ],
            'Growth stage': [
                'Scale marketing efforts',
                'Consider raising capital',
                'Implement systems and processes'
            ],
            'Scale stage': [
                'Expand into new markets',
                'Build strategic partnerships',
                'Consider exit strategies'
            ]
        };
        
        return recommendations[stage] || [];
    },

    suggestResources(situation) {
        return {
            books: ['Lean Startup', 'Zero to One', 'The Hard Thing About Hard Things'],
            tools: ['Google Analytics', 'Slack', 'Stripe', 'Mailchimp'],
            communities: ['Y Combinator Startup School', 'Indie Hackers', 'Product Hunt']
        };
    },

    outlineNextSteps(situation) {
        const steps = [];
        
        if (!situation.mvp) {
            steps.push('Build and launch MVP');
        }
        
        if (situation.customers < 10) {
            steps.push('Acquire first 10 customers');
        }
        
        if (situation.revenue < 1000) {
            steps.push('Achieve $1000 MRR');
        }
        
        return steps;
    }
};

export default StartupAdvisor;