document.addEventListener('DOMContentLoaded', function() {
    // Example: Alert on form submission
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Cảm ơn bạn đã đặt phòng! Chúng tôi sẽ liên hệ với bạn sớm.');
        });
    }
});
