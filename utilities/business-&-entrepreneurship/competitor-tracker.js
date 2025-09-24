export const CompetitorTracker = {
    id: 'competitor-tracker',
    name: 'Competitor Tracker',
    description: 'Monitor competitor activities, pricing, and strategies',

    competitors: new Map(),

    addCompetitor(competitorData) {
        const competitor = {
            id: this.generateId(),
            name: competitorData.name,
            website: competitorData.website,
            industry: competitorData.industry,
            size: competitorData.size,
            addedDate: new Date(),
            ...competitorData
        };

        this.competitors.set(competitor.id, competitor);
        return competitor.id;
    },

    trackPricing(competitorId, pricingData) {
        const competitor = this.competitors.get(competitorId);
        if (!competitor) return null;

        if (!competitor.pricingHistory) {
            competitor.pricingHistory = [];
        }

        competitor.pricingHistory.push({
            date: new Date(),
            products: pricingData.products,
            discounts: pricingData.discounts,
            promotions: pricingData.promotions
        });

        return this.analyzePricingTrends(competitor);
    },

    trackProductUpdates(competitorId, productUpdate) {
        const competitor = this.competitors.get(competitorId);
        if (!competitor) return null;

        if (!competitor.productUpdates) {
            competitor.productUpdates = [];
        }

        competitor.productUpdates.push({
            date: new Date(),
            type: productUpdate.type, // 'launch', 'update', 'discontinue'
            product: productUpdate.product,
            description: productUpdate.description,
            impact: productUpdate.impact
        });

        return this.analyzeProductStrategy(competitor);
    },

    trackMarketingActivities(competitorId, activity) {
        const competitor = this.competitors.get(competitorId);
        if (!competitor) return null;

        if (!competitor.marketingActivities) {
            competitor.marketingActivities = [];
        }

        competitor.marketingActivities.push({
            date: new Date(),
            channel: activity.channel,
            campaign: activity.campaign,
            message: activity.message,
            reach: activity.reach,
            engagement: activity.engagement
        });

        return this.analyzeMarketingStrategy(competitor);
    },

    analyzePricingTrends(competitor) {
        const history = competitor.pricingHistory || [];
        if (history.length < 2) return null;

        const latest = history[history.length - 1];
        const previous = history[history.length - 2];

        const trends = {};

        Object.keys(latest.products).forEach(product => {
            if (previous.products[product]) {
                const priceChange = latest.products[product] - previous.products[product];
                const percentChange = (priceChange / previous.products[product]) * 100;

                trends[product] = {
                    change: priceChange,
                    percentChange: Math.round(percentChange * 10) / 10,
                    direction: priceChange > 0 ? 'increase' : priceChange < 0 ? 'decrease' : 'stable'
                };
            }
        });

        return {
            trends,
            averageChange: this.calculateAverageChange(trends),
            recommendations: this.generatePricingRecommendations(trends)
        };
    },

    analyzeProductStrategy(competitor) {
        const updates = competitor.productUpdates || [];
        const recent = updates.filter(update =>
            new Date() - update.date <= 90 * 24 * 60 * 60 * 1000 // 90 days
        );

        return {
            recentActivity: recent.length,
            launchFrequency: this.calculateLaunchFrequency(updates),
            focusAreas: this.identifyFocusAreas(updates),
            strategy: this.inferProductStrategy(updates)
        };
    },

    analyzeMarketingStrategy(competitor) {
        const activities = competitor.marketingActivities || [];
        const recent = activities.filter(activity =>
            new Date() - activity.date <= 30 * 24 * 60 * 60 * 1000 // 30 days
        );

        return {
            activeChannels: [...new Set(recent.map(a => a.channel))],
            campaignFrequency: recent.length,
            engagement: this.calculateAverageEngagement(recent),
            messaging: this.analyzeMessaging(recent)
        };
    },

    generateCompetitorReport(competitorId) {
        const competitor = this.competitors.get(competitorId);
        if (!competitor) return null;

        return {
            overview: {
                name: competitor.name,
                industry: competitor.industry,
                size: competitor.size,
                trackingDuration: Math.floor((new Date() - competitor.addedDate) / (1000 * 60 * 60 * 24))
            },
            pricing: this.analyzePricingTrends(competitor),
            products: this.analyzeProductStrategy(competitor),
            marketing: this.analyzeMarketingStrategy(competitor),
            strengths: this.identifyStrengths(competitor),
            weaknesses: this.identifyWeaknesses(competitor),
            threats: this.assessThreats(competitor),
            opportunities: this.identifyOpportunities(competitor)
        };
    },

    identifyStrengths(competitor) {
        const strengths = [];
        const pricing = competitor.pricingHistory || [];
        const products = competitor.productUpdates || [];
        const marketing = competitor.marketingActivities || [];

        if (pricing.length > 0 && this.isPricingCompetitive(pricing)) {
            strengths.push('Competitive pricing strategy');
        }

        if (products.length > 0 && this.isInnovative(products)) {
            strengths.push('Strong product innovation');
        }

        if (marketing.length > 0 && this.hasStrongMarketing(marketing)) {
            strengths.push('Effective marketing execution');
        }

        return strengths;
    },

    identifyWeaknesses(competitor) {
        const weaknesses = [];
        const pricing = competitor.pricingHistory || [];
        const products = competitor.productUpdates || [];

        if (pricing.length === 0) {
            weaknesses.push('Limited pricing transparency');
        }

        if (products.length === 0) {
            weaknesses.push('Low product innovation rate');
        }

        return weaknesses;
    },

    assessThreats(competitor) {
        const threats = [];
        const products = competitor.productUpdates || [];
        const recent = products.filter(p =>
            new Date() - p.date <= 30 * 24 * 60 * 60 * 1000 // 30 days
        );

        if (recent.some(p => p.type === 'launch')) {
            threats.push('Recent product launches');
        }

        if (recent.some(p => p.impact === 'high')) {
            threats.push('High-impact product changes');
        }

        return threats;
    },

    identifyOpportunities(competitor) {
        return [
            'Monitor pricing changes for competitive response',
            'Analyze product gaps for differentiation',
            'Learn from successful marketing campaigns'
        ];
    },

    // Helper methods
    generateId() {
        return 'comp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    calculateAverageChange(trends) {
        const changes = Object.values(trends).map(t => t.percentChange);
        return changes.length > 0 ? changes.reduce((a, b) => a + b, 0) / changes.length : 0;
    },

    calculateLaunchFrequency(updates) {
        const launches = updates.filter(u => u.type === 'launch');
        const monthsTracking = Math.max(1, (new Date() - updates[0]?.date || new Date()) / (1000 * 60 * 60 * 24 * 30));
        return launches.length / monthsTracking;
    },

    identifyFocusAreas(updates) {
        const areas = updates.map(u => u.product).filter(Boolean);
        const frequency = {};
        areas.forEach(area => frequency[area] = (frequency[area] || 0) + 1);

        return Object.entries(frequency)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([area]) => area);
    },

    inferProductStrategy(updates) {
        const launches = updates.filter(u => u.type === 'launch').length;
        const updates_count = updates.filter(u => u.type === 'update').length;

        if (launches > updates_count) return 'Growth-focused';
        if (updates_count > launches) return 'Improvement-focused';
        return 'Balanced';
    },

    calculateAverageEngagement(activities) {
        const engagements = activities.map(a => a.engagement).filter(Boolean);
        return engagements.length > 0 ? engagements.reduce((a, b) => a + b, 0) / engagements.length : 0;
    },

    analyzeMessaging(activities) {
        const messages = activities.map(a => a.message).filter(Boolean);
        const themes = this.extractThemes(messages);
        return themes;
    },

    extractThemes(messages) {
        // Simple keyword extraction
        const keywords = {};
        messages.forEach(message => {
            const words = message.toLowerCase().split(/\s+/);
            words.forEach(word => {
                if (word.length > 3) {
                    keywords[word] = (keywords[word] || 0) + 1;
                }
            });
        });

        return Object.entries(keywords)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([word]) => word);
    },

    isPricingCompetitive(pricing) {
        // Simple heuristic
        return pricing.length > 2;
    },

    isInnovative(products) {
        const recentLaunches = products.filter(p =>
            p.type === 'launch' &&
            new Date() - p.date <= 90 * 24 * 60 * 60 * 1000
        );
        return recentLaunches.length > 0;
    },

    hasStrongMarketing(marketing) {
        const channels = [...new Set(marketing.map(m => m.channel))];
        return channels.length >= 3;
    },

    generatePricingRecommendations(trends) {
        const recommendations = [];

        Object.entries(trends).forEach(([product, trend]) => {
            if (trend.direction === 'increase') {
                recommendations.push(`Consider competitive pricing for ${product}`);
            } else if (trend.direction === 'decrease') {
                recommendations.push(`Opportunity to maintain premium pricing for ${product}`);
            }
        });

        return recommendations;
    }
};

export default CompetitorTracker;