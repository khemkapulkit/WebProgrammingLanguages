<!DOCTYPE html>
<html>
<body>

<?php

	$con = mysqli_connect("localhost","root","","baby");
	$year = $_POST["year"];
	$gender = $_POST["formGender"];
	// Check connection
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$sql = "SELECT name FROM babynames WHERE (year = $year  AND  gender = '$gender' AND ranking=1)";
	$result = mysqli_query($con,$sql);
	if ($result->num_rows > 0) 
	{
		$row = $result->fetch_assoc();
		echo "The most common name in the year $year is ".$row["name"]. "<br>";
    }
	else 
	{
     echo "0 results";
	}
?>


</body>
</html>