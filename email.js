
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // EmailJS configuration
    emailjs.init('YOUR_USER_ID');

    // Collect form data
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            document.getElementById('form-status').innerText = 'Message sent successfully!';
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('form-status').innerText = 'Failed to send message. Please try again.';
        });
});
