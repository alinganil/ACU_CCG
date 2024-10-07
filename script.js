// Function to generate a random coupon code
function generateCoupon() {
    // Get the user input values
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventAudience = document.getElementById("eventAudience").value;
    const eventDescription = document.getElementById("eventDescription").value;

    // Generate a random alphanumeric coupon code
    const couponCode = generateRandomCode();

    // Display the generated coupon code
    document.getElementById("coupon-code").innerHTML = `
        <h3>Your Generated Coupon Code:</h3>
        <p>${eventName.toUpperCase().substring(0, 3)}-${couponCode}</p>
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>For:</strong> ${eventAudience}</p>
        <p><strong>Description:</strong> ${eventDescription}</p>
    `;
}

// Helper function to generate a random alphanumeric string
function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
