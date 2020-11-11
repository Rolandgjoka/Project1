jQuery(document).ready(function($) {

    $('#coin').on('click', function() {
        var flipResult = Math.random();
        $('#coin').removeClass();
        setTimeout(function() {
            if (flipResult <= 0.5) {
                $('#coin').addClass('heads');
                console.log('it is head');
            } else {
                $('#coin').addClass('tails');
                console.log('it is tails');
            }
        }, 100);
    });
});





`${m1.strMeasure1} ${m1.strIngredient1},
${m1.strMeasure2} ${m1.strIngredient2},
${m1.strMeasure3} ${m1.strIngredient3},
${m1.strMeasure4} ${m1.strIngredient4},
${m1.strMeasure5} ${m1.strIngredient5},
${m1.strMeasure6} ${m1.strIngredient6},
${m1.strMeasure7} ${m1.strIngredient7},
${m1.strMeasure8} ${m1.strIngredient8},
${m1.strMeasure9} ${m1.strIngredient9},
${m1.strMeasure10} ${m1.strIngredient10},
${m1.strMeasure11} ${m1.strIngredient11},
${m1.strMeasure12} ${m1.strIngredient12},
${m1.strMeasure13} ${m1.strIngredient13},
${m1.strMeasure14} ${m1.strIngredient14},
${m1.strMeasure15} ${m1.strIngredient15},
${m1.strMeasure16} ${m1.strIngredient16},
${m1.strMeasure17} ${m1.strIngredient17},
${m1.strMeasure18} ${m1.strIngredient18},
${m1.strMeasure19} ${m1.strIngredient19},
if(${m1.strMeasure20} === null {
    ""
} ${m1.strIngredient20},`
