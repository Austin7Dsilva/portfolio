/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

let isInteresting = false; // Initial state

    function likeOrUnlike() {
        const button = document.getElementById('InterestingButton');
        if (isInteresting) {
            button.textContent = 'Interesting?'; // Change text back to 'Interesting?'
            // You can add additional actions if needed when unliking
        } else {
            button.textContent = 'Thank you!'; // Change text to 'Thank you!'
            // You can add additional actions if needed when liking
        }
        isInteresting = !isInteresting; // Toggle the state
    }