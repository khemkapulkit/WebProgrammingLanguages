<!-- Pulkit Khemka -->
<!-- Assignment 4 -->
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Books</title>
</head>
<body>

<?php
	$con = mysqli_connect("localhost","root","","books");
	$id  = end((explode("/",$_SERVER['REQUEST_URI'])));
	// Check connection
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	if(!is_numeric($id))
	{
		$sql = "SELECT title FROM book" ;
		$result = mysqli_query($con,$sql);
		echo "List of books are - <br><br>";
		while($data = $result->fetch_assoc()) 
		{
			echo $data['title'];
			echo "<br>";
		}
	}
	else
	{
		$sql = "SELECT * FROM book WHERE `Book-id` = $id" ;
		$result = mysqli_query($con,$sql);
		$data = $result->fetch_assoc();
		if($data==NULL)
			echo "No record with this book id exists";
		else
		{
			echo "Title = " , $data['title'],"<br>";
			echo "Year = " , $data['year'],"<br>";
			echo "Price = " , $data['price'],"<br>";
			echo "Category = " , $data['category'],"<br>";
			echo "Authors = " ;
			$sql1 = "SELECT Author_id FROM `book-authors` WHERE `Book-id` = $id" ;
			$result1 = mysqli_query($con,$sql1);
			$a = true;
			while($data1 = $result1->fetch_assoc())
			{
				if ($a==false)
				{
					echo ", ";
				}
				$a=false;
				$sql2 = "SELECT `Author-Name` FROM authors WHERE `Author-id` = $data1[Author_id]" ;
				$result2 = mysqli_query($con,$sql2);
				$data2 = $result2->fetch_assoc();
				echo $data2['Author-Name'];
			}
		}
		
	}
	
?>