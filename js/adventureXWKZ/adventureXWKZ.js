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

	$(".dot").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#dot1").click(function() {
		$("#text1").css("display", "flex");
		$(".dot").css("visibility","hidden");
	})

	$("#dot2").click(function() {
		$("#text2").css("display", "flex");
		$(".dot").css("visibility","hidden");
	})

	$("#dot3").click(function() {
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
		window.location.href = "manufactureXWKZ.html";
	})

	$("#test1").click(function() {
		$(".tipsWrapper").css("display", "none");
		$("#question1").css("display", "flex");
	})

	$("#test2").click(function() {
		$(".tipsWrapper").css("display", "none");
		$("#question5").css("display", "flex");
	})

	$("#next1").click(function() {
		$(".tipsWrapper").css("display", "none");
		$("#question2").css("display", "flex");
	})

	$("#next2").click(function() {
		$(".tipsWrapper").css("display", "none");
		$("#question3").css("display", "flex");
	})

	$("#next3").click(function() {
		$(".tipsWrapper").css("display", "none");
		$("#question4").css("display", "flex");
	})
	
	$("#next4").click(function() {
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "studyXWKZ", progress: 1, addScore: 10},  
			error: function() {
				alert("saveError");
			}
		});
		window.location.href = "adventureXWKZ.html";
	})

	$("#next5").click(function() {
		$(".tipsWrapper").css("display", "none");
		$("#question6").css("display", "flex");
	})
	
	$("#next6").click(function() {
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "studyXWKZ", progress: 1, addScore: 10},  
			error: function() {
				alert("saveError");
			}
		});
		window.location.href = "adventureXWKZ.html";
	})

	var wrong = document.getElementById("wrong");
	var correct = document.getElementById("correct");

	$("#Q1A").click(function() {
		$("#Q1A").css("text-shadow", "1px 1px 1px #2E967C");
		$("#Q1B").css("text-shadow", "none");
		$("#Q1C").css("text-shadow", "none");
		$("#Q1D").css("text-shadow", "none");
		correct.play();
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "testXWKZ", progress: 1, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
	})

	$("#Q1B").click(function() {
		$("#Q1A").css("text-shadow", "none");
		$("#Q1B").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q1C").css("text-shadow", "none");
		$("#Q1D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q1C").click(function() {
		$("#Q1A").css("text-shadow", "none");
		$("#Q1B").css("text-shadow", "none");
		$("#Q1C").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q1D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q1D").click(function() {
		$("#Q1A").css("text-shadow", "none");
		$("#Q1B").css("text-shadow", "none");
		$("#Q1C").css("text-shadow", "none");
		$("#Q1D").css("text-shadow", "1px 1px 1px #CC4D4D");
		wrong.play();
	})

	$("#Q2A").click(function() {
		$("#Q2A").css("text-shadow", "1px 1px 1px #2E967C");
		$("#Q2B").css("text-shadow", "none");
		$("#Q2C").css("text-shadow", "none");
		$("#Q2D").css("text-shadow", "none");
		correct.play();
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "testXWKZ", progress: 1, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
	})

	$("#Q2B").click(function() {
		$("#Q2A").css("text-shadow", "none");
		$("#Q2B").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q2C").css("text-shadow", "none");
		$("#Q2D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q2C").click(function() {
		$("#Q2A").css("text-shadow", "none");
		$("#Q2B").css("text-shadow", "none");
		$("#Q2C").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q2D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q2D").click(function() {
		$("#Q2A").css("text-shadow", "none");
		$("#Q2B").css("text-shadow", "none");
		$("#Q2C").css("text-shadow", "none");
		$("#Q2D").css("text-shadow", "1px 1px 1px #CC4D4D");
		wrong.play();
	})

	$("#Q3A").click(function() {
		$("#Q3A").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q3B").css("text-shadow", "none");
		$("#Q3C").css("text-shadow", "none");
		$("#Q3D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q3B").click(function() {
		$("#Q3A").css("text-shadow", "none");
		$("#Q3B").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q3C").css("text-shadow", "none");
		$("#Q3D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q3C").click(function() {
		$("#Q3A").css("text-shadow", "none");
		$("#Q3B").css("text-shadow", "none");
		$("#Q3C").css("text-shadow", "1px 1px 1px #2E967C");
		$("#Q3D").css("text-shadow", "none");
		correct.play();
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "testXWKZ", progress: 1, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
	})

	$("#Q3D").click(function() {
		$("#Q3A").css("text-shadow", "none");
		$("#Q3B").css("text-shadow", "none");
		$("#Q3C").css("text-shadow", "none");
		$("#Q3D").css("text-shadow", "1px 1px 1px #CC4D4D");
		wrong.play();
	})

	$("#Q4A").click(function() {
		$("#Q4A").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q4B").css("text-shadow", "none");
		$("#Q4C").css("text-shadow", "none");
		$("#Q4D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q4B").click(function() {
		$("#Q4A").css("text-shadow", "none");
		$("#Q4B").css("text-shadow", "1px 1px 1px #2E967C");
		$("#Q4C").css("text-shadow", "none");
		$("#Q4D").css("text-shadow", "none");
		correct.play();
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "testXWKZ", progress: 1, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
	})

	$("#Q4C").click(function() {
		$("#Q4A").css("text-shadow", "none");
		$("#Q4B").css("text-shadow", "none");
		$("#Q4C").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q4D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q4D").click(function() {
		$("#Q4A").css("text-shadow", "none");
		$("#Q4B").css("text-shadow", "none");
		$("#Q4C").css("text-shadow", "none");
		$("#Q4D").css("text-shadow", "1px 1px 1px #CC4D4D");
		wrong.play();
	})

	$("#Q5A").click(function() {
		$("#Q5A").css("text-shadow", "1px 1px 1px #2E967C");
		$("#Q5B").css("text-shadow", "none");
		$("#Q5C").css("text-shadow", "none");
		$("#Q5D").css("text-shadow", "none");
		correct.play();
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "testXWKZ", progress: 1, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
	})

	$("#Q5B").click(function() {
		$("#Q5A").css("text-shadow", "none");
		$("#Q5B").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q5C").css("text-shadow", "none");
		$("#Q5D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q5C").click(function() {
		$("#Q5A").css("text-shadow", "none");
		$("#Q5B").css("text-shadow", "none");
		$("#Q5C").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q5D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q5D").click(function() {
		$("#Q5A").css("text-shadow", "none");
		$("#Q5B").css("text-shadow", "none");
		$("#Q5C").css("text-shadow", "none");
		$("#Q5D").css("text-shadow", "1px 1px 1px #CC4D4D");
		wrong.play();
	})

	$("#Q6A").click(function() {
		$("#Q6A").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q6B").css("text-shadow", "none");
		$("#Q6C").css("text-shadow", "none");
		$("#Q6D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q6B").click(function() {
		$("#Q6A").css("text-shadow", "none");
		$("#Q6B").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q6C").css("text-shadow", "none");
		$("#Q6D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q6C").click(function() {
		$("#Q6A").css("text-shadow", "none");
		$("#Q6B").css("text-shadow", "none");
		$("#Q6C").css("text-shadow", "1px 1px 1px #CC4D4D");
		$("#Q6D").css("text-shadow", "none");
		wrong.play();
	})

	$("#Q6D").click(function() {
		$("#Q6A").css("text-shadow", "none");
		$("#Q6B").css("text-shadow", "none");
		$("#Q6C").css("text-shadow", "none");
		$("#Q6D").css("text-shadow", "1px 1px 1px #2E967C");
		correct.play();
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "testXWKZ", progress: 1, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
	})

	// $(document).mousedown(function(event) {
		// console.log($(event.target).attr("class"));
		// if($(event.target).attr("id") == "pictureScroll") {
			// $(".tipsWrapper").css("display", "none");
			// $(".dot").css("visibility", "visible");
			// $(".optionItem").css("text-shadow", "none");
		// }
	// 
	$(".x").mousedown(function() {
		// console.log($(event.target).attr("class"));
		$(".tipsWrapper").css("display", "none");
		$(".dot").css("visibility", "visible");
		$(".optionItem").css("text-shadow", "none");
	})

	$("#home").click(function() {
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
		window.location.href = "main.html";
	})

	const progressDone = document.querySelectorAll('.progress-done');

	$.ajax({
		type: "POST",
		url: "php/index/read.php",
		async: false,
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data!=''){
				var jsondata = data;
				$telephone = jsondata.telephone;
				$.ajax({
					type: "POST",
					url: "php/personalCenter/personalCenter.php",
					// dataType: "json",
					data: {telephone: $telephone},
					success: function(data){
						if(data!=''){
							var jsondata = $.parseJSON(data);
							temp = parseInt(Number(jsondata.studyXWKZ) * 10000 / 3) / 100;
							if (temp > 100) temp = 100;
							$(".percent").text(temp + "%");
							$(".progress-done").attr('data-done' , temp + "%");
							$(".progress-done").css('width' , temp + "%");
						}
					},
					error: function() {
						alert("数据库错误");
					}
				});
			}
		},
		error: function() {
			alert("会话错误");
		}
	});
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