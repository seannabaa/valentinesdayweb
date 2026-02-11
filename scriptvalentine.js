// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Left and right image sides: each transitions every 3s with fade
(function () {
    const leftContainer = document.getElementById('valentine-image-left');
    const rightContainer = document.getElementById('valentine-image-right');
    function runCarousel(container) {
        if (!container) return;
        const slides = container.querySelectorAll('.valentine-image-slide');
        if (!slides.length) return;
        let index = 0;
        setInterval(function () {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }, 3000);
    }
    runCarousel(leftContainer);
    runCarousel(rightContainer);
})();

// Yes/No: every time user clicks No, Yes button gets larger + random phrase
(function () {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const messageEl = document.getElementById('valentine-no-message');
    if (!btnYes || !btnNo) return;

    const noPhrases = [
        "Rethink about it.",
        "Are you really saying No?",
        "Pretty please? 🥺",
        "I think you clicked the wrong button.",
        "Give it another shot?",
        "This isn't the yes button!",
    ];

    let scale = 1;
    const scaleStep = 0.25;
    const maxScale = 4;

    function randomPhrase() {
        return noPhrases[Math.floor(Math.random() * noPhrases.length)];
    }

    btnNo.addEventListener('click', function (e) {
        e.preventDefault();
        scale = Math.min(scale + scaleStep, maxScale);
        btnYes.style.setProperty('--yes-scale', scale);
        if (messageEl) messageEl.textContent = randomPhrase();
    });
})();
