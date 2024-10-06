const stages = [
    { id: 1, name: "Stage 1", baseScore: 100 },
    { id: 2, name: "Stage 2", baseScore: 200 },
    { id: 3, name: "Stage 3", baseScore: 300 },
];

const items = [
    { id: 'item1', name: "Item 1", score: 50 },
    { id: 'item2', name: "Item 2", score: 30 },
    { id: 'item3', name: "Item 3", score: 70 },
];

const stageItems = {
    1: ['item1', 'item2'],
    2: ['item3'],
    3: ['item1', 'item3'],
};

function getStageScore(stageId) {
    const stage = stages.find(s => s.id === stageId);
    return stage ? stage.baseScore : 0;
}

function collectItem(itemId) {
    const item = items.find(i => i.id === itemId);
    return item ? item.score : 0;
}

function gainScore(stageId, collectedItems) {
    let totalScore = getStageScore(stageId);
    collectedItems.forEach(itemId => {
        totalScore += collectItem(itemId);
    });
    return totalScore;
}

function getItemsForStage(stageId) {
    return stageItems[stageId] || [];
}

module.exports = {
    getStageScore,
    collectItem,
    gainScore,
    getItemsForStage,
    stages,
};
