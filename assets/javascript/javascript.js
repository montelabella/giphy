// API Key 
// A7e1Em3Njn4PO001pMeyKhd37wsIxOH8
// api.giphy.com
//path for search    /v1/gifs/search
// gifButtons = my button id


var api = "";
var apiKey = "&api_key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8";
var query = "&q=actor"
var actors = [];
// Adding click event listen listener to all buttons
$("gifButtons").on("click", function () {
    // Grabbing and storing the data-animal property value from the button
    var actorNames = $(this).attr("data-name");
    console.log("data-name");
    // Constructing a queryURL using the actorNames
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actorNames() +
        "&api-key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8";

    //performing AJax request with queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //what to do w/data after the request
    .then(function(response){
        console.log(queryURL);
        console.log(response);
        //storing data in the ajax request via variable
        var results = response.data;
        //create a loop for each result item
        for(var i = 0; i < results.length; i++) {
            //create & store div tag
            var actorDiv = $("<div>");
            //create a paragraph tag with results rating
            var p = $("<p>").text("Rating: " + results[i].rating);
            //create & store img tag
            var actorImage = $("<img>");
            //set src attr of image to a property pulled from JSON data
            actorImage.attr("src", results[i].images.original.url);
        }
    })
})


//buttons rendering after search





