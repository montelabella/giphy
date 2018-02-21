// API Key 
// A7e1Em3Njn4PO001pMeyKhd37wsIxOH8
// api.giphy.com
//path for search    /v1/gifs/search

var api = "http://api.giphy.com/v1/gifs/search";
var apiKey = "&api_key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8";
var query = "&q=actor"
var actors=[];

function (setup) {
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);
}
//this data function will get filled w/info from api
function gotData(data) {
    printLn(data.data[0].images.original.url);

}
function renderbuttons(){
    $("#gifButtons").empty();
}



