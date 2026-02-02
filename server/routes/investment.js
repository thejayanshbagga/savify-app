import express from 'express';
import Investment from '../models/Investment.js';
import Expense from '../models/Expense.js';


const router = express.Router();

// GET /api/investments/dashboard/:userId - Get complete dashboard data
router.get("/dashboard/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        // Fetch all investments for user
        const investments = await Investment.find({ userId });

        // Fetch expenses for user
        const expenses = await Expense.find({ 
            userId, 
            type: 'expense',
            date: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) } // Last 30 days
        }).sort({ date: -1 });

        // Calculate expense breakdown by category
        const expenseBreakdown = {};
        let totalExpenses = 0;

        expenses.forEach(expense => {
            if (!expenseBreakdown[expense.category]) {
                expenseBreakdown[expense.category] = 0;
            }
            expenseBreakdown[expense.category] += expense.amount;
            totalExpenses += expense.amount;
        });

        const expenseBreakdownArray = Object.entries(expenseBreakdown).map(([category, amount]) => ({
            category,
            amount,
            percentage: (amount / totalExpenses) * 100
        }));

        // Calculate total portfolio value and returns
        const totalInvested = investments.reduce((sum, inv) => sum + (inv.purchasePrice * inv.shares), 0);
        const totalCurrentValue = investments.reduce((sum, inv) => sum + inv.totalValue, 0);
        const totalReturns = totalCurrentValue - totalInvested;

        // Calculate portfolio composition by type
        const compositionMap = {};
        investments.forEach(inv => {
            const category = inv.type.includes('Bond') ? 'Bonds' : 
                           inv.type.includes('Crypto') ? 'Alternative' : 'Stocks';
            if (!compositionMap[category]) {
                compositionMap[category] = 0;
            }
            compositionMap[category] += inv.totalValue;
        });

        const composition = Object.entries(compositionMap).map(([type, value]) => ({
            type,
            percentage: (value / totalCurrentValue) * 100
        }));

        // Calculate risk metrics
        const volatilityScores = investments.map(inv => Math.abs(inv.growth));
        const avgVolatility = volatilityScores.reduce((a, b) => a + b, 0) / volatilityScores.length || 0;
        const diversificationScore = Math.min((investments.length / 10) * 100, 100); // Simple diversification metric

        const riskScore = (avgVolatility / 10 + (100 - diversificationScore) / 10) / 2;
        const overallRisk = riskScore < 3 ? 'Low' : riskScore < 7 ? 'Moderate' : 'High';

        // Get recent 3 expenses
        const recentExpenses = expenses.slice(0, 3).map(exp => ({
            id: exp._id,
            description: exp.description,
            amount: exp.amount,
            date: exp.date.toISOString().split('T')[0],
            category: exp.category
        }));

        // Build response
        const dashboardData = {
            expenseBreakdown: expenseBreakdownArray,
            recentExpenses,
            investmentFund: {
                balance: totalCurrentValue,
                invested: totalInvested,
                returns: totalReturns,
                growth: {
                    week: 2.3, // These would come from historical tracking
                    month: 5.7,
                    year: 18.4
                }
            },
            holdings: investments.map(inv => ({
                id: inv._id,
                symbol: inv.symbol,
                name: inv.name,
                shares: inv.shares,
                currentPrice: inv.currentPrice,
                totalValue: inv.totalValue,
                growth: inv.growth,
                holdingPeriod: inv.holdingPeriod,
                type: inv.type
            })),
            riskProfile: {
                overallRisk,
                riskScore: riskScore.toFixed(1),
                volatility: avgVolatility < 10 ? 'Low' : avgVolatility < 20 ? 'Medium' : 'High',
                diversification: Math.round(diversificationScore),
                composition
            }
        };

        res.json(dashboardData);
    } catch (error) {
        console.error("Error fetching dashboard:", error);
        res.status(500).json({ message: "Error fetching dashboard data", error: error.message });
    }
});

// POST /api/investments - Create new investment
router.post("/", async (req, res) => {
    try {
        const { userId, symbol, name, type, shares, purchasePrice, currentPrice, holdingPeriod } = req.body;
        
        const investment = new Investment({
            userId,
            symbol,
            name,
            type,
            shares,
            purchasePrice,
            currentPrice: currentPrice || purchasePrice,
            holdingPeriod
        });

        await investment.save();
        res.status(201).json(investment);
    } catch (error) {
        console.error("Error creating investment:", error);
        res.status(500).json({ message: "Error creating investment", error: error.message });
    }
});

// GET /api/investments/:userId - Get all investments for user
router.get("/:userId", async (req, res) => {
    try {
        const investments = await Investment.find({ userId: req.params.userId });
        res.json(investments);
    } catch (error) {
        console.error("Error fetching investments:", error);
        res.status(500).json({ message: "Error fetching investments", error: error.message });
    }
});

// PUT /api/investments/:id - Update investment (e.g., current price)
router.put("/:id", async (req, res) => {
    try {
        const { currentPrice, shares } = req.body;
        const investment = await Investment.findByIdAndUpdate(
            req.params.id,
            { 
                currentPrice, 
                shares,
                lastUpdated: Date.now() 
            },
            { new: true }
        );
        
        if (!investment) {
            return res.status(404).json({ message: "Investment not found" });
        }
        
        res.json(investment);
    } catch (error) {
        console.error("Error updating investment:", error);
        res.status(500).json({ message: "Error updating investment", error: error.message });
    }
});

// DELETE /api/investments/:id - Delete investment (sell)
router.delete("/:id", async (req, res) => {
    try {
        const investment = await Investment.findByIdAndDelete(req.params.id);
        
        if (!investment) {
            return res.status(404).json({ message: "Investment not found" });
        }
        
        res.json({ message: "Investment sold successfully", investment });
    } catch (error) {
        console.error("Error deleting investment:", error);
        res.status(500).json({ message: "Error deleting investment", error: error.message });
    }
});

// GET /api/investments/trending/etfs - Get trending ETFs (mock data for now)
router.get("/trending/etfs", async (req, res) => {
    try {
        // In production, this would fetch from a real financial API
        const trendingETFs = [
            { symbol: 'HYLD', name: 'High Yield Credit', growth: 8.5, type: 'Fixed Income' },
            { symbol: 'ARKK', name: 'ARK Innovation', growth: 22.3, type: 'Thematic' },
            { symbol: 'GBTC', name: 'Grayscale Bitcoin Trust', growth: 45.2, type: 'Crypto' },
            { symbol: 'ICLN', name: 'Clean Energy', growth: 12.7, type: 'Thematic' },
            { symbol: 'GLD', name: 'Gold ETF', growth: 6.8, type: 'Commodity' }
        ];
        
        res.json(trendingETFs);
    } catch (error) {
        console.error("Error fetching trending ETFs:", error);
        res.status(500).json({ message: "Error fetching trending ETFs", error: error.message });
    }
});

export default router;