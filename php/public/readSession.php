<?php
	session_start();
	if(isset($_POST['id'])){
		$id = $_POST['id'];
	}
	else{
		echo "sessionError：找不到数据'id'";
		exit();
	}
	if(isset($_SESSION[$id])){
		echo $_SESSION[$id];
	}
	else{
		echo "sessionError：会话'".$id."'未定义";
	}
?>