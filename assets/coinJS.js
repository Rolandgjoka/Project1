let coinRes = ""

jQuery(document).ready(function($) {

    $('#coin').on('click', function() {
        var flipResult = Math.random();
        $('#coin').removeClass();
        setTimeout(function() {
            if (flipResult <= 0.5) {
                $('#coin').addClass('heads');
                meal1();
            } else {
                $('#coin').addClass('tails');
                renderRest();
            }
        }, 100);
    });
});



// function coinResult() {
//     $.ajax({ url: `https://flipacoinapi.com/json`, type: "GET" }).then(function(data) {
//         coinRes = data
//     });


// }
