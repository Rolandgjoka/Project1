function meal1() {
    $.ajax({ url: `https://www.themealdb.com/api/json/v1/1/random.php`, type: "GET" }).then(function(recipe) {

        renderRecipe(recipe)

    })

};