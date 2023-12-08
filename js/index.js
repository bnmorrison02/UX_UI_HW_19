$(document).ready(function () {
    // Event listener for the button click
    $('#myButton').on('click', function () {
        // Scroll to the target section
        $('html, body').animate({
            scrollTop: $('#scrollTarget').offset().top
        }, 1000); // Adjust the duration as needed
    });
});