// API Key 
// A7e1Em3Njn4PO001pMeyKhd37wsIxOH8
// api.giphy.com
//path for search    /v1/gifs/search
// gifButtons = my button id
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
// <script type="text/javascript"></script>


var artists = ["Bill Murray", "Johnny Depp", "Jim Carrey", "Harrison Ford", "Keanu Reeves", "Jennifer Connelly", "Cate Blanchett", "Mickey Rourke", "Chris Pratt", "Chadwick Boseman", "Jerry Lewis", "Ingrid Bergman", "Mark Wahlbert", "George Clooney", "Benicio Del Toro"];


   function renderButtons(){ 


        // Deletes the artists prior to adding new artist so it doesn't add the original array of artists everytime the "Add an Artist" button is clicked
        
        $('#buttons').empty();

        // Loops through the array of artists
        for (var i = 0; i < artists.length; i++){
            // Then dynamicaly generates buttons for each artist in the array

            var a = $('<button>'); 
            a.addClass('artist');  
            a.attr('data-person', artists[i]); 
            a.text(artists[i]); 

            // Appending button to buttons section
            $('#buttons').append(a); 

}          
      // Event listener to capture the ajax every time artist class is clicked
              $('.artist').on('click', function() {
             // Creating a variable to store the value of the person that is searched for on the button
        var p = $(this).attr('data-person');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=A7e1Em3Njn4PO001pMeyKhd37wsIxOH8&limit=12";
         $("#gifsAppearHere").empty();
       // console.log(p)
       // console.log(queryURL)

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;
                
                // Iterates through object for the entirety of its length
                for (var i = 0; i < results.length; i++) {
                    // Creating div for each image on the screen
                    var gifDiv = $('<div class="item">')
                    
                    console.log(results[i].images)
             
                  // Creating vatiables to make it easier to navigate through and call different object properties and values
                    var stillState = results[i].images.fixed_height_still.url;
                    
                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    // Giving the image it's on-click pause attributes and classes for further styling
                    var personImage = $('<img>');
                    personImage.attr('src', results[i].images.fixed_height.url);
                    personImage.attr('data-still', stillState);

                    personImage.attr('data-state', 'still');
                    personImage.attr('data-animate', results[i].images.fixed_height.url);
                    personImage.addClass('artistImage');
                    personImage.css("float","left");
                    personImage.css("margin-left","20px");
                    personImage.css("margin-bottom", "20px");
                    personImage.css("margin-top", "20px");
                    personImage.css("width", "191");
                    personImage.css("height", "200");
                    // gifDiv.append(p)
                    gifDiv.append(personImage)
                    
                     console.log(response);
                   
                   // Appending to the parent gif div element
                    $('#gifsAppearHere').prepend(gifDiv);


                    // Event listener that pauses and animates the states of the gifs
                     $('.artistImage').on('click', function() {
                        // Grabbing data from data-state attribute
                var state = $(this).attr('data-state');

                if(state == 'still'){
                    $(this).attr('src', $(this).data(
                        'animate'));
                    $(this).attr('data-state', 'animate');
                  }
                  else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
       });

                }


            });
    });

    }


  // Event listener for adding/appending buttons to the buttons element.
$('#addArtist').on('click', function(event){
        // This line of code will grab the input from the textbox
        var artist = $('#artist-input').val().trim();


        artists.push(artist);
        // event.preventDefault();
        // The artist from the textbox is then added to artists array
        console.log(artists);
        // Artists array then runs which handles the processing of the array
         renderButtons()
        // Don't refrest the page ---> "return false"
         return false;
    });


    
      renderButtons();
