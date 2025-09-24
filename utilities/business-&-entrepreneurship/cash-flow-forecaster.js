export const CashFlowForecaster = {
    id: 'cash-flow-forecaster',
    name: 'Cash Flow Forecaster',
    description: 'Predict and plan future cash flow patterns',

    createForecast(historicalData, projectionMonths = 12) {
        const forecast = {
            historical: this.analyzeHistorical(historicalData),
            projections: this.generateProjections(historicalData, projectionMonths),
            insights: this.generateInsights(historicalData),
            recommendations: this.generateRecommendations(historicalData)
        };
        return forecast;
    },

    analyzeHistorical(data) {
        return {
            averageInflow: this.calculateAverage(data.map(d => d.inflow)),
            averageOutflow: this.calculateAverage(data.map(d => d.outflow)),
            trends: this.identifyTrends(data),
            seasonality: this.detectSeasonality(data)
        };
    },

    generateProjections(data, months) {
        const projections = [];
        const trendFactor = this.calculateTrendFactor(data);

        for (let i = 1; i <= months; i++) {
            const baseInflow = this.calculateAverage(data.map(d => d.inflow));
            const baseOutflow = this.calculateAverage(data.map(d => d.outflow));

            projections.push({
                month: i,
                projectedInflow: Math.round(baseInflow * (1 + trendFactor * i)),
                projectedOutflow: Math.round(baseOutflow * (1 + 0.02 * i)), // Assume 2% monthly growth
                netFlow: 0 // Will be calculated below
            });
        }

        projections.forEach(p => {
            p.netFlow = p.projectedInflow - p.projectedOutflow;
        });

        return projections;
    }
};

export default CashFlowForecaster;