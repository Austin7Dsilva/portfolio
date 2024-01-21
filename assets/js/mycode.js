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


// //A pop-up code

function openPopup(event) {
    let str = event.target.id;
    let indexes = (str.charAt(str.length - 1));
    let popup = document.getElementById(`popup-${indexes}`)
    popup.classList.add('open-popup');
}

function closePopup(event) {
    let str = event.target.id;
    let indexes = (str.charAt(str.length - 1));
    let popup = document.getElementById(`popup-${indexes}`)
    popup.classList.remove('open-popup')
}

