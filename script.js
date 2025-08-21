// --- Elements for the Game ---
const gameContainer = document.getElementById('game-container');
const bugFixInput = document.getElementById('bug-fix-input');
const submitButton = document.getElementById('submit-bug-fix');

// --- Elements for the Birthday Surprise ---
const birthdayContent = document.getElementById('birthday-content');
const confettiButton = document.getElementById('confetti-button');
const music = document.getElementById('birthday-music');

// The correct answer for our bug fix
const correctAnswer = 'message';

// --- Listen for the click on the "Compile & Run" button ---
submitButton.addEventListener('click', () => {
    // Get the user's answer, make it lowercase, and remove extra spaces
    const userAnswer = bugFixInput.value.trim().toLowerCase();

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        // If correct, hide the game and show the birthday content
        gameContainer.style.display = 'none';
        birthdayContent.style.display = 'block';
    } else {
        // If wrong, show an alert and clear the input box
        alert('// ERROR: Bug not fixed. Check your spelling and try again!');
        bugFixInput.value = '';
    }
});

// --- This part is for the confetti button, it works after the bug is fixed ---
confettiButton.addEventListener('click', () => {
    // Start the music if it's not already playing
    if (music.paused) {
        music.play();
    }

    // Launch confetti!
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
});