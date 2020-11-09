let lat = "33.105578"
let long = "-96.804604"
$.ajax({
    url: `http://flipacoinapi.com/json`,

}).then(function(data) {
    console.log(data);
    //process the JSON data etc
})