export const ROICalculator = {
    id: 'roi-calculator',
    name: 'ROI Calculator',
    description: 'Calculate return on investment for projects and campaigns',

    calculateROI(investment, returns, timeframe = 1) {
        const totalReturns = Array.isArray(returns) ? returns.reduce((sum, r) => sum + r, 0) : returns;
        const roi = ((totalReturns - investment) / investment) * 100;
        const annualizedROI = Math.pow((totalReturns / investment), (1 / timeframe)) - 1;

        return {
            investment,
            totalReturns,
            netProfit: totalReturns - investment,
            roi: Math.round(roi * 100) / 100,
            annualizedROI: Math.round(annualizedROI * 10000) / 100,
            paybackPeriod: this.calculatePaybackPeriod(investment, returns),
            breakEvenPoint: this.calculateBreakEven(investment, returns)
        };
    },

    calculatePaybackPeriod(investment, returns) {
        if (!Array.isArray(returns)) return 1;

        let cumulative = 0;
        for (let i = 0; i < returns.length; i++) {
            cumulative += returns[i];
            if (cumulative >= investment) {
                return i + 1;
            }
        }
        return returns.length + 1;
    },

    calculateBreakEven(investment, returns) {
        const monthlyReturn = Array.isArray(returns)
            ? returns.reduce((sum, r) => sum + r, 0) / returns.length
            : returns / 12;

        return Math.ceil(investment / monthlyReturn);
    },

    compareInvestments(investments) {
        return investments.map(inv => ({
            name: inv.name,
            ...this.calculateROI(inv.investment, inv.returns, inv.timeframe)
        })).sort((a, b) => b.roi - a.roi);
    },

    calculateNPV(cashFlows, discountRate = 0.1) {
        let npv = 0;
        cashFlows.forEach((cashFlow, period) => {
            npv += cashFlow / Math.pow(1 + discountRate, period);
        });
        return Math.round(npv * 100) / 100;
    },

    calculateIRR(cashFlows) {
        // Simplified IRR calculation using Newton-Raphson method
        let rate = 0.1;
        let iterations = 0;
        const maxIterations = 100;
        const precision = 0.0001;

        while (iterations < maxIterations) {
            let npv = 0;
            let dnpv = 0;

            cashFlows.forEach((cashFlow, period) => {
                npv += cashFlow / Math.pow(1 + rate, period);
                dnpv += -period * cashFlow / Math.pow(1 + rate, period + 1);
            });

            const newRate = rate - npv / dnpv;
            if (Math.abs(newRate - rate) < precision) {
                return Math.round(newRate * 10000) / 100;
            }
            rate = newRate;
            iterations++;
        }

        return null; // Could not converge
    }
};

export default ROICalculator;