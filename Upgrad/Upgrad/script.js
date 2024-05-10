// Custom JavaScript for the UpGrad clone
console.log("Welcome to UpGrad Clone!");
document.getElementById('viewMore').addEventListener('click', function() {
    var additionalCards = document.querySelectorAll('.additional-cards');
    additionalCards.forEach(function(card) {
        card.style.display = 'block';
    });
    this.style.display = 'none'; // Optionally hide the button
});
// JavaScript to handle "View More" button functionality
document.addEventListener('DOMContentLoaded', function() {
    let viewMoreButton = document.getElementById('viewMore');
    let additionalCards = document.querySelectorAll('.additional-cards');
    let rowsToShow = 3; // Number of columns (3 per row)
    let currentIndex = 0;

    function showNextRows() {
        let endIndex = currentIndex + rowsToShow;
        for (let i = currentIndex; i < endIndex; i++) {
            if (additionalCards[i]) {
                additionalCards[i].style.display = 'block';
            }
        }
        currentIndex = endIndex;

        // Hide the button if no more cards to show
        if (currentIndex >= additionalCards.length) {
            viewMoreButton.style.display = 'none';
        }
    }

    // Initially show the first row of cards
    showNextRows();

    // Add event listener to "View More" button
    viewMoreButton.addEventListener('click', showNextRows);
});
