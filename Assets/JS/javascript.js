var teams = ["Baltimore Ravens", "Chicago Bears", "Pittsburgh Steelers", "Green Bay Packers", "Indianapolis Colts", "Carolina Panthers", "New England Patriots", "New Orleans Saints", "New York Jets", "New York Giants"];

var gifUrl = [];


$(document).ready(function() {
	function renderButtons() {
		$(".teams-buttons").empty();
		     
        for (var i = 0; i < teams.length; i++) {
      
          var a = $("<button>");
          a.addClass("teams");
          a.attr("data-name", teams[i]);
          a.text(teams[i]);
          $(".teams-buttons").append(a);
        }
      }
      
      $("#add-team").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();
		  var teamName = $("#team-input").val();
		  teamName.attr("data-name", $("#team-input").val());
		  teams.push(teamName);
      
        renderButtons();
		 
//    		var form = document.getElementById("form");                      trying to clear input
//		  form.reset();
	 });
  
     renderButtons();
		
	function displayGif() {
		$(".gifs").empty();
		gifUrl = [];
		var team = $(this).attr("data-name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=dc6zaTOxFJmzC";
       
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
			console.log(response);
			
			for (var i = 0; i < 10; i++) {
				var imgUrl = response.data[i].images.fixed_width_still.url;
				gifUrl.push(response.data[i].images.fixed_width.url);
				var gifImage = $("<img>");

				//creating attributes for img tag
				gifImage.attr("src", imgUrl);
				gifImage.attr("alt", "NFL Team");
				gifImage.attr("id", i);
				gifImage.addClass("gifStyle");

				//displaying img tag 
				$(".gifs").prepend(gifImage);

				$(gifImage).on("click", function() {
					$(this).attr("src", gifUrl[$(this).attr('id')]);
				});	
			
			}
		});
     }
	
	 $(document).on("click", ".teams", displayGif);
	
})