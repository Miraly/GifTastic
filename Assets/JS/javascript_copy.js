var teams = [
	{team: "Baltimore Ravens",
	 img: 
	}, 
	{team: "Chicago Bears",
	 img:
	},
	{team: "Pittsburgh Steelers",
	 img: 
	}, 
	{team: "Green Bay Packers",
	 img: 
	}, 
	{team: "Indianapolis Colts",
	 img: 
	}, 
	{team: "Carolina Panthers",
	 img: 
	}, 
			 , 
			 , 
			 , 
			 , 
			 "New England Patriots", 
			 "New Orleans Saints", 
			 "New York Jets", 
			 "New York Giants"];

$(document).ready(function() {
      // Function for displaying movie data
      function renderButtons() {
		  $("#movies-view").empty();
		  for (var i =0; i < teams.length; i++) {
			  var newButton = $("<button>");
			  newButton.html(teams[i]);
			  $(".teams-buttons").append(newButton);
		  }
        // Delete the content inside the movies-view div prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)

        // Loop through the array of movies, then generate buttons for each movie in the array

      }

      // This function handles events where the add movie button is clicked
      $("#add-movie").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // Write code to grab the text the user types into the input field
        // Write code to add the new movie into the movies array
		  var movieText = $("#movie-input").val();
		  movies.push(movieText);
        // The renderButtons function is called, rendering the list of movie buttons
        renderButtons();
      });

      // Calling the renderButtons function to display the initial list of movies
      renderButtons();
		
		var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
		  
		 // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

        // =================================================================

        $.ajax({
        url: queryURL,
        method: "GET"
      	}).done(function(response) {
			console.log(response);
			 $("#movie-view").append(JSON.stringify(response));
			 
		 });
	
})
