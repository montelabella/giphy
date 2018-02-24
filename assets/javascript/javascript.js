// API Key 
// A7e1Em3Njn4PO001pMeyKhd37wsIxOH8
// api.giphy.com
//path for search    /v1/gifs/search
// gifButtons = my button id
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
// <script type="text/javascript"></script>


var api = "";
var apiKey = "&api_key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8";
var query = "&q=actor"
var actors = [];
// Adding click event listen listener to all buttons
$(".actor").on("click", function () {
    $("#gifs").empty();
    // Grabbing and storing the data-animal property value from the button
    var actorNames = $(this).attr("data-name");
    console.log(actorNames);
    // Constructing a queryURL using the actorNames
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actorNames + 
    "&api_key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8&limit=10";
   
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
            var actorDiv = $("<div/>");
            //create a paragraph tag with results rating
            var p = $("<p>").text("Rating: " + results[i].rating);
            //create & store img tag
            var actorImage = $("<img/>");
            //create class for on click function below animate/still
            actorImage.addClass("acImg");
            //set src attr of image to a property pulled from JSON data
            actorImage.attr("src", results[i].images.fixed_height.url);
            actorImage.attr("data-still", results[i].images.fixed_height_still.url);
            actorImage.attr("data-animate", results[i].images.fixed_height.url);

            // someone in class said i needed this but i dont know why
            //.attr("data-state","still");
            //appending paragraph/image to the div
            
            

            actorDiv.append(p);
            actorDiv.append(actorImage);
            $("#gifs").prepend(actorDiv);

            //console.log(actorDiv);
            
            

        }
    })
})








