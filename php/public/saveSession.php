<?php
	session_start();
	if(isset($_POST['id'])){
		$id = $_POST['id'];
	}
	else{
		echo "sessionError：找不到数据'id'";
		exit();
	}
	if(isset($_POST[$id])){
		$_SESSION[$id] = $_POST[$id];
		echo "Success";
	}
	else{
		echo "sessionError：找不到数据'".$id."'";
	}
?>