document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.querySelector('.flashcard');
    const front = document.getElementById('front');
    const back = document.getElementById('back');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let words = [];
    let currentWordIndex = 0;

    fetch('/words')
        .then(response => response.json())
        .then(data => {
            words = data;
            updateCard();
        });

    function updateCard() {
        if (words.length > 0) {
            front.textContent = words[currentWordIndex].english;
            back.textContent = words[currentWordIndex].spanish;
        }
    }

    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('is-flipped');
    });

    prevBtn.addEventListener('click', () => {
        if (currentWordIndex > 0) {
            currentWordIndex--;
            updateCard();
            flashcard.classList.remove('is-flipped');
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentWordIndex < words.length - 1) {
            currentWordIndex++;
            updateCard();
            flashcard.classList.remove('is-flipped');
        }
    });
});
