$(document).ready(function() {
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
	// setInterval("twinkle()", 500);
	var $telephone = read("telephone");
	$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "studyHYMD", progress: 1, addScore: 10},  
			error: function() {
				alert("saveError");
			}
		});
	$("#dot").click(function() {
		$("#dot").remove();
		$("body").css("background-image", "url(images/adventureHYMD/openDoor.gif)");
		var openDoor = document.getElementById("openDoor");
		openDoor.play();
		setTimeout(function() {
			$("body").css("background-image", "url(images/adventureHYMD/wallBG.png)");
			$(".frameWrapper").css("display", "flex");
		}, 1500);
	})

	$("#dot1").click(function() {
		$("#dot1").css("display", "none");
		$("#dot2").css("display", "none");
		$(".picWrapper").css("display", "flex");
		$(".picWrapper").css("background-image", "none");
		$("#shuangYu").css("display", "inline");
		$("#longMen").css("display", "none");
		$(".picText").css("display", "inline");
		$(".finishWrapper").css("display", "none");
		$(".nextWrapper").css("display", "inline");
	})

	$("#dot2").click(function() {
		$("#dot1").css("display", "none");
		$("#dot2").css("display", "none");
		$(".picWrapper").css("display", "flex");
		$(".picWrapper").css("background-image", "none");
		$("#shuangYu").css("display", "none");
		$("#longMen").css("display", "inline");
		$(".picText").css("display", "inline");
		$(".finishWrapper").css("display", "none");
		$(".nextWrapper").css("display", "inline");
	})

	$(".dot").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#back").click(function() {
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
		window.location.href = "adventureHYMD.html";
	})
})

// function twinkle() {
// 	var nowVisibility = $(".dot").css("visibility");
// 	if(nowVisibility == "visible") {
// 		$(".dot").css("visibility", "hidden");
// 	}
// 	else {
// 		$(".dot").css("visibility", "visible");
// 	}
// }