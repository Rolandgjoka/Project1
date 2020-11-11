$("#mealIn").on("click", function() {
    console.log("I am mealing in today")

    let allMeals = [];
    meal1()

})

function meal1() {
    $.ajax({ url: `https://www.themealdb.com/api/json/v1/1/random.php`, type: "GET" }).then(function(data) {
        console.log(data)
        let m1 = data.meals[0]
        let name1 = m1.strMeal
        let area1 = m1.strArea
        let category1 = m1.strCategory
        let image1 = m1.strMealThumb
        let instructions = m1.strInstructions
        let youtube1 = m1.strYoutube

        let recipes2 = ""
        let recipesfix = ""
        let $card = $(
            `<div class="card" style="width: 18rem;">
            <img src="${image1}" class="card-img-top" alt="...">
            <div class="card card-body " style="width: 35rem;">
            <p> ${name1}</p>
            <p> ${instructions}</p>
            <ul id="list">
            
            </ul>
            <p> <a href="${(youtube1)}">Youtube Tutorial</a></p>
            </div>
            </div>`
        )
        $card.appendTo(".meals")
        for (let i = 1; i < 21; i++) {
            const measure = m1["strMeasure" + i];
            const ingredient = m1["strIngredient" + i];
            if (measure !== "") {
                recipes2 = measure + " " + ingredient
                let liEl = $("<li>");
                liEl.text(recipes2);
                $("#list").append(liEl);
            }
        }


    })

}