document.addEventListener('DOMContentLoaded', function() {
    // Example: Alert on form submission
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your booking! We will contact you soon.');
        });
    }
});
