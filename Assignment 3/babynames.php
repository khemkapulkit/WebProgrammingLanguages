<?php
	header('Content-Type: application/json');
	$con = mysqli_connect("localhost","root","","baby");
	$year = $_POST['year'];
	// Check connection
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$sql = "SELECT * FROM babynames WHERE (year = $year AND ranking in (1,2,3,4,5) AND gender = 'm')" ;
	$result = mysqli_query($con,$sql);
	$rows = array();
	$rowsm = array();
	while($data = $result->fetch_assoc()) 
	{
		$rowsm[] = $data;
	}
	$rows[] = $rowsm;
   
	$sql = "SELECT * FROM babynames WHERE (year = $year AND ranking in (1,2,3,4,5) AND gender = 'f')" ;
	$result = mysqli_query($con,$sql);
	$rowsf = array();
	while($data = $result->fetch_assoc()) 
	{
		$rowsf[] = $data;
	}
	$rows[] = $rowsf;
	echo json_encode($rows);
	
?>