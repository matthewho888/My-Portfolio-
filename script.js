// Function to navigate to another page
function navigateTo(page) {
    window.location.href = page;
}

// On page load, load the likes count from localStorage
window.onload = function() {
    let likeCount = document.getElementById('like-count');
    let storedLikes = parseInt(localStorage.getItem('likes')) || 0;  // Default to 0 if no stored value
    likeCount.innerText = `${storedLikes} Likes`;
};

// Event listener for the like button
document.getElementById('like-btn').addEventListener('click', function() {
    // Add animation class
    this.classList.add('clicked');

    // Remove the animation class after animation completes
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 300);

    // Retrieve the current like count from localStorage
    let likeCount = document.getElementById('like-count');
    let currentLikes = parseInt(localStorage.getItem('likes')) || 0;

    // Increment and update localStorage
    currentLikes += 1;
    localStorage.setItem('likes', currentLikes);

    // Update the displayed like count
    likeCount.innerText = `${currentLikes} Likes`;
});

