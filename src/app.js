const express = require('express');
const { gainScore, getItemsForStage } = require('./stages');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/stages/:id/score', (req, res) => {
    const stageId = parseInt(req.params.id);
    const collectedItems = req.body.collectedItems || [];
    const totalScore = gainScore(stageId, collectedItems);
    res.json({ totalScore });
});

app.get('/api/stages/:id/items', (req, res) => {
    const stageId = parseInt(req.params.id);
    const items = getItemsForStage(stageId);
    res.json({ items });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
