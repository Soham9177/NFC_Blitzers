// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Flash only the div within the section
        flashElement(targetSection.querySelector('.container'), 300);
    });
});

// Highlight sections with flashing animation
function flashElement(element, duration) {
    let count = 0;
    const originalBackgroundColor = element.style.backgroundColor;

    const interval = setInterval(() => {
        if (count % 2 === 0) {
            element.style.backgroundColor = '#888'; // Highlight color
        } else {
            element.style.backgroundColor = originalBackgroundColor; // Reset to original
        }

        count++;

        if (count > 3) {
            clearInterval(interval);
            element.style.backgroundColor = originalBackgroundColor; // Ensure it's reset to original color
        }
    }, duration);
}

// Function to open a new window with the form
function openCalculatorWindow() {
    // Width and height for the new window (adjust as needed)
    const windowWidth = 400;
    const windowHeight = 600;

    // Calculate the position for centering the new window
    const windowLeft = (window.innerWidth - windowWidth) / 2;
    const windowTop = (window.innerHeight - windowHeight) / 2;

    // Open the new window with specified dimensions and position
    window.location.href="/calc"
}

