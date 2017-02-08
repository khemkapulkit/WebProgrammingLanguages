$(document).ready(function() {
	
	$( "<span id='span'></span>" ).insertAfter( "input[id='username']" );
	$( "input[id='username']" ).focusin(function() {	
	document.getElementById("span").className = "info";
	var element = document.getElementById("span");
	element.innerHTML = "you need to enter alphanumeric characters";
	});
	$( "<span id='span1'></span>" ).insertAfter( "input[id='password']" );
	$( "input[id='password']" ).focusin(function() {	
	document.getElementById("span1").className = "info";
	var element = document.getElementById("span1");
	element.innerHTML = "at least 8 elements";
	});
	$( "<span id='span2'></span>" ).insertAfter( "input[id='email']" );
	$( "input[id='email'" ).focusin(function() {	
	document.getElementById("span2").className = "info";
	var element = document.getElementById("span2");
	element.innerHTML = "The email address field should contain a @ character";
	});
	$("#username").blur(function() {
		var value = $( this).val();
		if(value.length == 0)
		{
			 $("#span").removeClass();
			 element = document.getElementById("span");
			 element.innerHTML = "";	
			 
		}
		else
		{
			if(value.match(/^[0-9a-z]+$/))
			{
				document.getElementById("span").className = "ok";
				var element = document.getElementById("span");
				element.innerHTML = "OK";
			}
			else
			{
				document.getElementById("span").className = "error";
				var element = document.getElementById("span");
				element.innerHTML = "ERROR";
			}
		}
	});
	$("#password").blur(function() {
		var value = $( this).val();
		if(value.length == 0)
		{
			 $("#span1").removeClass();
			 element = document.getElementById("span1");
			 element.innerHTML = "";	
			 
		}
		else
		{
	
			if(value.length>7)
			{
				document.getElementById("span1").className = "ok";
				var element = document.getElementById("span1");
				element.innerHTML = "OK";
			}
			else
			{
				document.getElementById("span1").className = "error";
				var element = document.getElementById("span1");
				element.innerHTML = "ERROR";
			}
		}
	});
	$("#email").blur(function() {
		var value = $( this).val();
		if(value.length == 0)
		{
			 $("#span2").removeClass();
			 element = document.getElementById("span2");
			 element.innerHTML = "";	
			 
		}
		else
		{
			if(value.indexOf("@")!=-1)
			{
				document.getElementById("span2").className = "ok";
				var element = document.getElementById("span2");
				element.innerHTML = "OK";
			}
			else
			{
				document.getElementById("span2").className = "error";
				var element = document.getElementById("span2");
				element.innerHTML = "ERROR";
			}
		}
	});
});
