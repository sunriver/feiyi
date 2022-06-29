$(document).ready(function(){
	$.ajax({
		type: "POST",
		url: "php/musicBG/read.php",
		dataType: "json",
		success: function(data) {
			var musicBG = document.getElementById("musicBG");
			musicBG.currentTime = data;
			console.log(data);
		},
		error: function() {
			alert("readError");
		}
	});
	var code = "";
	$("#submit").click(function(){
		var musicBG = document.getElementById("musicBG");
		$.ajax({
			type: "POST",
			url: "php/musicBG/save.php",
			dataType: "text",
			data: {musicTime: musicBG.currentTime},  
			error: function() {
				alert("saveError");
			}
		});
		telephone1 = $("#telephone1").val();
		telephone2 = $("#telephone2").val();
		password = $("#password").val();
		//code = $("#code").val();
		if(password == selectDatabase("user", "password", telephone1) && password != ""){
			username = selectDatabase("user", "username", telephone1)
			save(telephone1, username);
			alert("登录成功");
			window.location.href = "main.html";
			return;
		}
		if(code == $("#code").val() && code != ""){
			username = selectDatabase("user", "username", telephone2);
			save(telephone2, username);
			alert("登录成功");
			window.location.href = "main.html";
			return;
		}
		alert("登录失败");
	});
	
	$("#getCode").click(function(){
		if(!$("#telephone2").val()){
			alert("请输入手机号码");
			return;
		}
		if($("#telephone2").val().length != 11){
			alert("手机号格式错误");
			return;
		}
		telephone = $("#telephone2").val();
		$.ajax({
			type: "POST",
			url: "php/login/sms.php",
			data: {telephone: telephone},
			success: function(data){
				if(data.length == 6){
					code = data;
					alert("验证码发送成功");
				}
				else{
					alert(data);
				}
				
			},
			error: function(){
				alert("连接错误");
			}
		});
	});
});