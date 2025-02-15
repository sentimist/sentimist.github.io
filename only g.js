document.addEventListener("DOMContentLoaded", function () {
    const initialPopup = document.getElementById("initial-popup");
    const card = document.getElementById("card");
  
    // Show the initial popup
    initialPopup.style.display = "block";
  
    // When the popup is clicked, hide it and show the closed card
    initialPopup.addEventListener("click", function () {
      initialPopup.style.display = "none";
      card.style.display = "block";
    });
  
    // When the closed card is clicked, open it
    card.addEventListener("click", function () {
      card.classList.toggle("closed");
      card.classList.toggle("open");
    });
  });

  // Questions to ask
const questions = [
    "Are you my Diza Socito the cutest?",
    "Do you love me?",
    "Will you go on a date with me?:D",
    "Will you marry me?;)"
];

let currentQuestionIndex = 0;

// DOM Elements
const popupContainer = document.getElementById('popupContainer');
const questionText = document.getElementById('questionText');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Function to show the next question
function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex];
        currentQuestionIndex++;
    } else {
        // End of questions
        popupContainer.style.display = 'none';
        alert("That's my GIRL!💗");
    }
}

// Event Listeners for Buttons
yesButton.addEventListener('click', () => {
    showNextQuestion();
});

noButton.addEventListener('click', () => {
    alert("Please say yes! 🥺");
});

// Show the first question when the page loads
showNextQuestion();

// Toggle Memories Section
function toggleMemories() {
    const memoriesSection = document.getElementById('memoriesSection');
    memoriesSection.classList.toggle('active');
}

// Open Modal with Full-Size Image
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = imageSrc;
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};