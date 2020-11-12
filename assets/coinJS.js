let coinRes = ""

jQuery(document).ready(function($) {

    $('#coin').on('click', function() {
        coinResult();

        $('#coin').removeClass();
        setTimeout(function() {
            if (coinRes === "Heads") {
                $('#coin').addClass('heads');
                console.log(coinRes);
                meal1();

            } else {
                $('#coin').addClass('tails');
                console.log(coinRes);
                renderRest()

            }
        }, 100);

    });

});


function coinResult() {
    $.ajax({ url: `https://flipacoinapi.com/json`, type: "GET" }).then(function(data) {
        console.log(data)
        coinRes = data
    });


}