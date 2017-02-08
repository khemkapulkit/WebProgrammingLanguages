$(document).ready(function() {
	$.ajax({

		 url: "books.xml",
		 dataType: "xml",
		 success: function(data) {
		        alert("file is loaded");
		        $(data).find('book').each(function(){
					var title = $(this).find('title').text();
					var info = '<tr><td>'+title+'</td><td>';
					var x = true;
					$(this).find("author").each(function(){
						 if(x == true)
						 {
							 var author = $(this).text();
							info = info + author;
							x=false;
						 }
						 else
						 {							 
							var author = $(this).text();
							info = info + ', '+ author;
						 }
					});
					var year = $(this).find('year').text();
					var price = $(this).find('price').text();
					var category = $(this).attr("category");
					info = info +'</td><td>'+year+'</td><td>'+price+'</td><td>'+category+'</td></tr>';
					$('table').append(info);
		        });

		 },
		 error: function() { alert("error loading file");  }
     });
});