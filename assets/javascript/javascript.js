// API Key 
// A7e1Em3Njn4PO001pMeyKhd37wsIxOH8
// api.giphy.com
//path for search    /v1/gifs/search
// gifButtons = my button id

var api = "http://api.giphy.com/v1/gifs/search";
var apiKey = "&api_key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8";
var query = "&q=actor"
var actors=[];

function actorNames() {
var actorNames=$(this).attr("data-name");
};
//buttons rendering after search
function renderbuttons(){
    $("#gifButtons").empty();
    for (var i=0; i < actorNames.length; i++){
        //creating a button in html here//
        var a=$("<button>");
        a.addClass("actorButton");
        a.attr("data-name".actors[i]);
        a.text(actors[i])
        $("#gifButtons").append(a);
    }
};
var queryURL="http://api.giphy.com/v1/gifs/search?q="+actorNames()+"&api_key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8";




//this data function will get filled w/info from api
function gotData(data) {
    printLn(data.data[0].images.original.url);

}



