let score = 0;
let clickPower = 1;
let autoClickersCount = 0;

const chillGuy = document.getElementById('chill-guy');
const scoreDisplay = document.getElementById('score');
const upgradeButtons = document.querySelectorAll('#upgrades button');

// 点击事件
chillGuy.addEventListener('click', () => {
    incrementScore(clickPower);
});

// 更新分数显示
function incrementScore(amount) {
    score += amount;
    scoreDisplay.textContent = `点击数：${score}`;
    updateUpgradeButtons();
}

// 更新升级按钮状态
function updateUpgradeButtons() {
    upgradeButtons.forEach(button => {
        const cost = parseInt(button.dataset.cost);
        button.disabled = score < cost;
    });
}

// 自动点击器
setInterval(() => {
    if (autoClickersCount > 0) {
        incrementScore(autoClickersCount);
    }
}, 1000);

// 为升级按钮添加点击事件
upgradeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cost = parseInt(button.dataset.cost);
        if (score >= cost) {
            score -= cost;
            // 根据不同的升级执行不同的操作
            if (button.textContent.includes('指针')) {
                clickPower++;
            } else if (button.textContent.includes('自动点击')) {
                autoClickersCount++;
            }
            scoreDisplay.textContent = `点击数：${score}`;
            updateUpgradeButtons();
        }
    });
}); 