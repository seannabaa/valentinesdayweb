(function () {
    const HEARTS = ['❤️', '💕', '💗', '💖', '💓', '💝', '🩷', '🤍', '💜', '🩵'];
    const CONTAINER = document.getElementById('heart-particles');
    const COUNT = 20;
    const MIN_DURATION = 12;
    const MAX_DURATION = 22;
    const MIN_SIZE = 14;
    const MAX_SIZE = 28;
    const SPAWN_INTERVAL = 400;

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    function pickHeart() {
        return HEARTS[Math.floor(Math.random() * HEARTS.length)];
    }

    function createHeart() {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = pickHeart();
        heart.style.left = randomBetween(0, 100) + '%';
        heart.style.fontSize = randomBetween(MIN_SIZE, MAX_SIZE) + 'px';
        heart.style.animationDuration = randomBetween(MIN_DURATION, MAX_DURATION) + 's';
        heart.style.animationDelay = '-' + randomBetween(0, 8) + 's';
        CONTAINER.appendChild(heart);

        heart.ontransitionend = heart.onanimationend = function () {
            heart.remove();
        };

        setTimeout(function () {
            heart.remove();
        }, (MAX_DURATION + 2) * 1000);
    }

    function spawnLoop() {
        createHeart();
        setTimeout(spawnLoop, SPAWN_INTERVAL);
    }

    if (CONTAINER) {
        for (var i = 0; i < COUNT; i++) {
            setTimeout(createHeart, i * (SPAWN_INTERVAL / 2));
        }
        setTimeout(spawnLoop, COUNT * (SPAWN_INTERVAL / 2));
    }
})();
