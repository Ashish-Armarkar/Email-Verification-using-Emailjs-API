// Initialize EmailJS
emailjs.init('qr7pgXfhaxHlHLkrx'); // Replace with your EmailJS User ID

// Function to send OTP
function sendOTP() {
    const email = document.getElementById('email').value;
    const otp = Math.floor(Math.random() * 10000);

    // Define email options
    const emailData = {
        serviceID: 'service_c8q9ibh', // Replace with your EmailJS Service ID
        templateID: 'template_dkl6u34', // Replace with your EmailJS Template ID
        userID: 'j2x_vFVe03cgy31Kyl2qf', // Replace with your EmailJS User ID
        templateParams: {
            to_email: email, // Make sure this matches the placeholder in your EmailJS template
            otp: otp,
        },
    };

    // Send the email using EmailJS
    emailjs.send(emailData.serviceID, emailData.templateID, emailData.templateParams)
        .then(response => {
            alert('Email sent successfully.');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send email.');
        });
}
