// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show the home section by default
//showSection('home');

function submitForm() {
    document.getElementById('successMessage').style.display = 'block';
}