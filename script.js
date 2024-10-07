// Function to generate a memorable coupon code based on event information
function generateCoupon() {
    // Get user input values
    const eventName = document.getElementById("eventName").value.trim();
    const eventDate = document.getElementById("eventDate").value.trim();
    const eventAudience = Array.from(document.getElementById("eventAudience").selectedOptions).map(option => option.value).join(", ");
    const eventDescription = document.getElementById("eventDescription").value.trim();

    // Generate a memorable coupon code
    const couponCode = generateMemorableCode(eventName, eventDate);

    // Display the generated coupon code with event details
    document.getElementById("coupon-code").innerHTML = `
        <h3>Your Generated Coupon Code:</h3>
        <p><strong>Code:</strong> ${couponCode}</p>
        <p><strong>Date:</strong> ${new Date(eventDate).toLocaleDateString()}</p>
        <p><strong>For:</strong> ${eventAudience}</p>
        <p><strong>Description:</strong> ${eventDescription}</p>
    `;
}

// Helper function to generate a memorable coupon code
function generateMemorableCode(eventName, eventDate) {
    // Use event name and year to create a unique memorable part of the code
    const eventKeyword = eventName.replace(/\s+/g, '').toUpperCase().substring(0, 3); // First 3 letters of event name
    const year = new Date(eventDate).getFullYear(); // Extract year from event date
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number for uniqueness

    // Format the coupon code in a memorable way
    return `-${-${eventKeyword}-${year}-${randomDigits}`;
}
