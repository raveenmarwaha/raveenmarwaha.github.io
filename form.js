// Form submission and local storage handling
document.getElementById("submitBtn")?.addEventListener("click", function() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        inquiryType: document.getElementById('inquiryType').value,
        skills: [
            document.getElementById('dataAnalysis').checked ? 'Data Analysis' : null,
            document.getElementById('projectManagement').checked ? 'Project Management' : null,
            document.getElementById('dataVisualization').checked ? 'Data Visualization' : null,
        ].filter(Boolean),
        experience: document.getElementById('experience').value,
        contactMethod: document.querySelector('input[name="contactMethod"]:checked').value,
        message: document.getElementById('message').value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    alert("Your information has been saved. Thank you for contacting us!");
});

// form reset
document.getElementById("feedbackForm")?.addEventListener("reset", function() {
});
});