var teams = ["Baltimore Ravens", "Chicago Bears", "Pittsburgh Steelers", "Green Bay Packers", "Indianapolis Colts", "Carolina Panthers", "New England Patriots", "New Orleans Saints", "New York Jets", "New York Giants"];

$(document).ready(function() {
      // Function for displaying gif data
      function renderButtons() {
		  $(".teams-buttons").empty();  // Delete the content inside the teams-butons div prior to adding new movies
		  
		  // Loop through the array of teams, then generate buttons for each team in the array
		  for (var i = 0; i < teams.length; i++) {   
			  var newButton = $("<button>");
			  newButton.html(teams[i]);
			  $(".teams-buttons").append(newButton);
		  }
       }

      // This function handles events where the add team button is clicked
      $("#add-team").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // Write code to grab the text the user types into the input field
        // Write code to add the new movie into the movies array
		  var teamName = $("#team-input").val();
		  teams.push(teamName);
        // The renderButtons function is called, rendering the list of movie buttons
        renderButtons();
		 
    		var form = document.getElementById("form");
		  form.reset();
		  
		  
      });

      // Calling the renderButtons function to display the initial list of movies
     renderButtons();
		
	function displayGif() {

        var team = $(this).attr("data-name");
       	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=dc6zaTOxFJmzC";
       
		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
			console.log(response);
		for (var i = 0, i < 10; i++) {
			var imgUrl = response.data[i].images.fixed_width_still.url;
			var gifUrl = response.data[i].images.fixed_width.url;
        	var gifImage = $("<img>");

        //creating attributes for img tag
        gifImage.attr("src", imgUrl);
        gifImage.attr("alt", "NFL Team");
		gifImage.attr("border", "2px");

        //displaying img tag 
        $(".gifs").prepend(gifImage);
			
		}	
		});

      }
	
	 $(document).on("click", ".teams-buttons", displayGif);
	
})