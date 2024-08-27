document.getElementById('noBtn').addEventListener('click', function() {
    // Add bounce animation
    this.classList.add('bounce');

    // Remove bounce class after animation ends
    setTimeout(() => {
        this.classList.remove('bounce');

        // Move the dialog box to a random position
        moveDialogBox();
    }, 500);
});

document.getElementById('yesBtn').addEventListener('click', function() {
    // Redirect to another page
    window.location.href = "slideshow.html"; // Replace with your desired URL
});

function moveDialogBox() {
    const container = document.querySelector('.container');

    // Get random position within the viewport
    const x = Math.random() * (window.innerWidth - container.offsetWidth);
    const y = Math.random() * (window.innerHeight - container.offsetHeight);

    // Move the container to the new position
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
}
