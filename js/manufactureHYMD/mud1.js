var putMud = false;
var putSilk = false;
var putCotton = false;
var putHammer = false;
var hasMud = true;
var hasSilk = true;
var hasCotton = true;
var hasHammer = true;

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
	
	$(".material").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#mud").hover(function() {
		$(".tipsTittle").html("泥块-用途");
		$(".tipsContent").html("&emsp;&emsp;乐清黄杨木雕的工具有泥锤、雕塑架和泥塑盒，以及卡钳、刮刀和各种形式的塑刀等。用于打粗坯的工具有锯、木敲锤、铁敲锤等。用于雕刻的主要工具是凿，它的种类很多，功能齐全，分为斜凿、三角凿、平凿、圆凿、中钢凿、反口凿、翘头凿、针凿和手锯、竹簪、拖钻等。<br>&emsp;&emsp;泥块的特点是可增可减,可大可小,它不像木雕那样受到木料形体的限制,它可以灵活变动人物的动态。");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})
	
	$("#silk").hover(function() {
		$(".tipsTittle").html("竹丝-用途");
		$(".tipsContent").html("&emsp;&emsp;乐清黄杨木雕的工具有泥锤、雕塑架和泥塑盒，以及卡钳、刮刀和各种形式的塑刀等。用于打粗坯的工具有锯、木敲锤、铁敲锤等。用于雕刻的主要工具是凿，它的种类很多，功能齐全，分为斜凿、三角凿、平凿、圆凿、中钢凿、反口凿、翘头凿、针凿和手锯、竹簪、拖钻等。<br>&emsp;&emsp;棉絮能使泥稿保持一定的坚固性。");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})
	
	$("#cotton").hover(function() {
		$(".tipsTittle").html("棉絮-用途");
		$(".tipsContent").html("&emsp;&emsp;乐清黄杨木雕的工具有泥锤、雕塑架和泥塑盒，以及卡钳、刮刀和各种形式的塑刀等。用于打粗坯的工具有锯、木敲锤、铁敲锤等。用于雕刻的主要工具是凿，它的种类很多，功能齐全，分为斜凿、三角凿、平凿、圆凿、中钢凿、反口凿、翘头凿、针凿和手锯、竹簪、拖钻等。<br>&emsp;&emsp;竹丝能使泥稿保持一定的坚固性");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})
	
	$("#hammer").hover(function() {
		$(".tipsTittle").html("泥锤-用途");
		$(".tipsContent").html("&emsp;&emsp;乐清黄杨木雕的工具有泥锤、雕塑架和泥塑盒，以及卡钳、刮刀和各种形式的塑刀等。用于打粗坯的工具有锯、木敲锤、铁敲锤等。用于雕刻的主要工具是凿，它的种类很多，功能齐全，分为斜凿、三角凿、平凿、圆凿、中钢凿、反口凿、翘头凿、针凿和手锯、竹簪、拖钻等。<br>&emsp;&emsp;泥锤用来捶打泥块。");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})

	$("#mud").mousedown(function(event) {
		putMud = true;
	})

	$("#silk").mousedown(function(event) {
		putSilk = true;
	})

	$("#cotton").mousedown(function(event) {
		putCotton = true;
	})

	$("#hammer").mousedown(function(event) {
		putHammer = true;
	})

	$(".next").click(function() {
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
		window.location.href = "wood1.html";
	})

	$(document).mousemove(function(event) {
		if(putMud && hasMud) {
			var itemWidth = $("#mud").width();
			var itemHeight = $("#mud").height();
			$(".tipsWrapper").css("visibility", "hidden");
			var hover = document.getElementById("hover");
			hover.pause();
			if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
				$("#mud").css({
					"position": "absolute",
					"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
					"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
				});
			}

			if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.55) {
				var newBG;
				if(putMud && putSilk && putCotton) newBG = "url(images/manufactureHYMD/putOn123.png)";
				else if(putMud && putSilk) newBG = "url(images/manufactureHYMD/putOn12.png)";
				else if(putMud && putCotton) newBG = "url(images/manufactureHYMD/putOn13.png)";
				else newBG = "url(images/manufactureHYMD/putOn1.png)";
				$("body").css("background-image", newBG);
				$("#mud").remove();
				hasMud = false;
			}
		}

		else if(putSilk && hasSilk) {
			var itemWidth = $("#silk").width();
			var itemHeight = $("#silk").height();
			$(".tipsWrapper").css("visibility", "hidden");
			var hover = document.getElementById("hover");
			hover.pause();
			if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
				$("#silk").css({
					"position": "absolute",
					"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
					"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
				});
			}

			if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.55) {
				var newBG;
				if(putSilk && putMud && putCotton) newBG = "url(images/manufactureHYMD/putOn123.png)";
				else if(putSilk && putMud) newBG = "url(images/manufactureHYMD/putOn12.png)";
				else if(putSilk && putCotton) newBG = "url(images/manufactureHYMD/putOn23.png)";
				else newBG = "url(images/manufactureHYMD/putOn2.png)";
				$("body").css("background-image", newBG);
				$("#silk").remove();
				hasSilk = false;
			}
		}

		else if(putCotton && hasCotton) {
			var itemWidth = $("#cotton").width();
			var itemHeight = $("#cotton").height();
			$(".tipsWrapper").css("visibility", "hidden");
			var hover = document.getElementById("hover");
			hover.pause();
			if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
				$("#cotton").css({
					"position": "absolute",
					"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
					"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
				});
			}

			if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.55) {
				var newBG;
				if(putCotton && putMud && putSilk) newBG = "url(images/manufactureHYMD/putOn123.png)";
				else if(putCotton && putMud) newBG = "url(images/manufactureHYMD/putOn13.png)";
				else if(putCotton && putSilk) newBG = "url(images/manufactureHYMD/putOn23.png)";
				else newBG = "url(images/manufactureHYMD/putOn3.png)";
				$("body").css("background-image", newBG);
				$("#cotton").remove();
				hasCotton = false;
			}
		}

		else if(putHammer && hasHammer) {
			if(hasMud || hasSilk || hasCotton) {
				alert("请先将泥块、竹丝、棉絮放至工作台上");
				putHammer = false;
			}
			else {
				var itemWidth = $("#hammer").width();
				var itemHeight = $("#hammer").height();
				$(".tipsWrapper").css("visibility", "hidden");
				var hover = document.getElementById("hover");
				hover.pause();
				if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
					$("#hammer").css({
						"position": "absolute",
						"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
						"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
					});
				}

				if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.55) {
					$("#hammer").remove();
					$(".cntWrapper").css("visibility", "visible");
					var newBG = "url(images/manufactureHYMD/mudBG.png)";
					$("body").css("background-image", newBG);
					var newItem = "<div class='gifWrapper'></div>"
					$(".cntWrapper").after(newItem);
					hasHammer = false;
				}	
			}
		}
	})

	var currentNum = $(".cntNum").html();
	$(".cntNum").click(function() {
		if(currentNum > 0) {
			if(currentNum != 3) $("#knockHammer").remove();
			var newItem = "<img id='knockHammer' src='images/manufactureHYMD/hammer.png' alt=''>"
			$(".gifWrapper").append(newItem);
			var knocking = document.getElementById("knocking");
			knocking.play();
			currentNum -= 1;
			$(".cntNum").html(currentNum);
			// console.log(currentNum);
		}
		if(currentNum == 0) {
			setTimeout(function() {
				$(".gifWrapper").remove();
				var newBG = "url(images/manufactureHYMD/mudOperate.gif)";
				$("body").css("background-image", newBG);
				$(".cntWrapper").remove();
			}, 1000);
			setTimeout(function() {
				var newBG = "url(images/manufactureHYMD/mudFinish1.png)";
				$("body").css("background-image", newBG);
				$(".next").css("visibility", "visible");
			}, 6500);
		}
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

	$("#help").hover(function() {
		$(".helpPicWrapper").css("display", "flex");
		$(".tipsContent").html("&emsp;&emsp;泥稿是根据事先构思好的草图塑制的。为了把泥塑稿做好，我们必须掌握泥塑可增可减、可大可小、灵活可变的特点。故此我们在塑制泥稿时，也可以在草图的基础上加工提高。<br>&emsp;&emsp;保存好泥稿也是一件重要工作，应在塑泥中加进适量的棉絮，在必要时还要以适当的竹丝或做稿件的骨架，使泥稿保持一定的坚固性。当然，随着时代的发展，新材料层出不穷，所以现在做设计稿已经不仅仅只用泥巴。");
	},function(){$(".helpPicWrapper").css("display", "none");})
})