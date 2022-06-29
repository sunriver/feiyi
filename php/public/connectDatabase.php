<?php 
	if(isset($_POST["query"])){
		$query = $_POST["query"];
	}
	$host = "127.0.0.1";
	$username = "root";
	$password = "";
	$databaseName = "culturalheritage";
	$conn = mysqli_connect($host, $username, $password, $databaseName);
	mysqli_query($conn,"set character set 'utf8'");
	mysqli_query($conn,"set names 'utf8'");
	if (mysqli_connect_errno()) {
		echo json_encode("databaseError：连接MySQL数据库错误");
		exit();
	}
	$result = $conn->query($query);
	if(!empty($result)) echo json_encode(mysqli_fetch_array($result));
	else echo json_encode("databaseError：结果为空");
?>