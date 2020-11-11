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
            // let recipes1 = `${m1.strMeasure1} ${m1.strIngredient1}</br>
            // ${m1.strMeasure2} ${m1.strIngredient2}</br>
            // ${m1.strMeasure3} ${m1.strIngredient3}</br>
            // ${m1.strMeasure4} ${m1.strIngredient4}</br>
            // ${m1.strMeasure5} ${m1.strIngredient5}</br>
            // ${m1.strMeasure6} ${m1.strIngredient6}</br>
            // ${m1.strMeasure7} ${m1.strIngredient7}</br>
            // ${m1.strMeasure8} ${m1.strIngredient8}</br>
            // ${m1.strMeasure9} ${m1.strIngredient9}</br>
            // ${m1.strMeasure10} ${m1.strIngredient10}</br>
            // ${m1.strMeasure11} ${m1.strIngredient11}</br>
            // ${m1.strMeasure12} ${m1.strIngredient12}</br>
            // ${m1.strMeasure13} ${m1.strIngredient13}</br>
            // ${m1.strMeasure14} ${m1.strIngredient14}</br>
            // ${m1.strMeasure15} ${m1.strIngredient15}</br>
            // ${m1.strMeasure16} ${m1.strIngredient16}</br>
            // ${m1.strMeasure17} ${m1.strIngredient17}</br>
            // ${m1.strMeasure18} ${m1.strIngredient18}</br>
            // ${m1.strMeasure19} ${m1.strIngredient19}</br>
            // ${m1.strMeasure20} ${m1.strIngredient20}</br>`

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