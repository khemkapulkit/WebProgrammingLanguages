$(document).ready(function() {
	
	$("button").click(function()
	{
	   var years = $("#year").val();
	   $("#male").html("<br/>");
	   $("#female").html("<br/>");
	   $.ajax
	   ({			   
			type:"POST",
			url: "http://localhost/babynames.php",
			data : ({year : years}),
			success:  function(response)
			{	
				$("#male").append(" Names of boy babies in "+ years +" are - <br/>");
				$("#female").append(" Names of girl babies in "+ years +" are - <br/>");
				$.each( response[0], function( index, value ){
				$("#male").append(" Rank " + value.ranking + " : " + value.name + "<br/>");
				});
				$.each( response[1], function( index, value ){
				$("#female").append(" Rank " + value.ranking + " : " + value.name + "<br/>");
				});
			}		
		});
		
		
	});
	
});