// Array of dragonfruit fun facts
const funFacts = [
    "Dragonfruit is rich in antioxidants, vitamins, and fiber.",
    "The flower of the dragonfruit cactus only blooms at night.",
    "It is native to Central and South America but is also grown in Southeast Asia.",
    "Dragonfruit is low in calories, making it a great snack for weight loss.",
    "Dragonfruit is also called 'pitaya' or 'pitahaya'.",
    "It contains small, black, edible seeds like a kiwi fruit."
];

// Get the button and fact display element
const factButton = document.getElementById('revealFact');
const factDisplay = document.getElementById('factDisplay');

// Function to display a random fact
function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
}

// Add event listener to button
factButton.addEventListener('click', displayRandomFact);
