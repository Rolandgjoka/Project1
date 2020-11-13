function renderRecipe(recipe) {
    $("#result").empty();
    let $card = $(
        ` <div class="card card-body bg-light" style="width: 18rem;">
            <img src="${recipe.meals[0].strMealThumb}" class="card-img-top mx-auto" style="width: 12rem; display: block;" alt="...">
            <div class="card">
            
            <p> <h3 class="text-center">${recipe.meals[0].strMeal}</h3></p>
            <p class="m-3"> ${recipe.meals[0].strInstructions}</p>
            <ul id="list">
            
            </ul>
            <p class="text-center"> <a href="https://www.youtube.com/results?search_query=${recipe.meals[0].strMeal}" target="_blank">Youtube Tutorial</a></p>
            </div>
            
            </div>`
    );
    $card.appendTo("#result");
    let m1 = recipe.meals[0];
    for (let i = 1; i < 21; i++) {
        const measure = m1["strMeasure" + i];
        const ingredient = m1["strIngredient" + i];
        if (measure.length > 1) {
            recipes2 = measure + " " + ingredient;
            let liEl = $("<li>");
            liEl.text(recipes2);
            $("#list").append(liEl);
        }
    }
}

function renderRest() {
    restCount = Math.floor(Math.random() * 99);
    $.ajax({
        url: `https://developers.zomato.com/api/v2.1/search?start=${restCount}&count=1&lat=${lat}&lon=%20${lng}`,
        headers: {
            "user-key": "31549f18a4409b92a3243bf922d7853a",
            Accept: "application/json",
        },
    }).then((restaurants) => {
        restName = restaurants.restaurants[0].restaurant.name;
        restCuisines = restaurants.restaurants[0].restaurant.cuisines;
        restAddress = restaurants.restaurants[0].restaurant.location.address;
        restHours = restaurants.restaurants[0].restaurant.timings;
        restThumb = restaurants.restaurants[0].restaurant.thumb;
        restRating = restaurants.restaurants[0].restaurant.user_rating.rating_text;
        restPhone = restaurants.restaurants[0].restaurant.phone_numbers;
        ratingColor =
            restaurants.restaurants[0].restaurant.user_rating.rating_color;
        restMenu = restaurants.restaurants[0].restaurant.menu_url;

        if (restThumb.length < 1) {
            restThumb = "https://via.placeholder.com/250x250";
        }
        $("#result").empty();
        let $card = $(
            `<div class="card align-center mx-auto bg-light" style="width: 25rem;">
                <img src="${restThumb}" class="card-img-top mx-auto" style="width: 75%; display: block;" alt="...">
                <div class="card card-body " >
                <h3> ${restName} <span class="rounded" style="background-color: #${ratingColor}; font-size: 20px;" > ${restRating} </span></h3>
                <p>${restCuisines}</p>
                <p>${restAddress}</p>
                <p>${restHours}</p>
                <p><a id="icon" href="tel:${restPhone}">${restPhone}<a/></p>
                <p><a href="${restMenu}">Menu</a></p>
                </div>
                </div>`
        );

        $card.appendTo("#result");
    });
}

$("#randoRec").on("click", function() {
    $("#coinArea").css("display", "none");
    meal1();
});

$("#randoRest").on("click", function() {
    $("#coinArea").css("display", "none");
    renderRest();
});

$("#home").on("click", function() {
    $("#coinArea").css("display", "");
});