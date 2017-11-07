$(document).ready(function(){

    $("a").on('click', function(event) {
        // check hash
        if (this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                // Add hash (#) to URL
                window.location.hash = hash;
            });


        }
    });
});

