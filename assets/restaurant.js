let lat = "";
let lng = "";
let restCount= Math.floor(Math.random() * 99);

let restName; 
let restCuisines;
let restAddress;
let restHours;
let restThumb;
let restRating;
let restPhone;
let ratingColor;




function onPositionReceived(position){
  console.log(position);
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  getRestaurant();

 }
 function locationNotReceived(positionError){
   console.log(positionError);
 }
if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(onPositionReceived,locationNotReceived);
}


function getRestaurant(){
  console.log(restCount);
  console.log(lat);
  console.log(lng);
  
       $.ajax({
         url:`https://developers.zomato.com/api/v2.1/search?start=${restCount}&count=1&lat=${lat}&lon=%20${lng}`,
         headers: { "user-key": "31549f18a4409b92a3243bf922d7853a", "Accept": "application/json" },
         }).then(restaurants => {console.log(restaurants) 
          
           restName= restaurants.restaurants[0].restaurant.name ;
           restCuisines= restaurants.restaurants[0].restaurant.cuisines ;
           restAddress=restaurants.restaurants[0].restaurant.location.address ;
           restHours= restaurants.restaurants[0].restaurant.timings ;
           restThumb= restaurants.restaurants[0].restaurant.thumb ;
           restRating=restaurants.restaurants[0].restaurant.user_rating.rating_text;
           restPhone=restaurants.restaurants[0].restaurant.phone_numbers ;
           ratingColor=restaurants.restaurants[0].restaurant.user_rating.rating_color;

           console.log(restName);
           console.log(restCuisines);
           console.log(restAddress);
           console.log(restThumb);
           console.log(restRating);
           console.log(restPhone);
           console.log(ratingColor);
           


        });

} 
