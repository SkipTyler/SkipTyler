var audio = document.getElementById("audio");
var $ = jQuery.noConflict();
audio.volume=0.1;

$(function() {
	$("a.fullscreenExit").hide();
	$("a.fullscreen").on("click", function(e) {
		e.preventDefault();
		var docElement, request;

		docElement = document.documentElement;
		request =
			docElement.requestFullScreen ||
			docElement.webkitRequestFullScreen ||
			docElement.mozRequestFullScreen ||
			docElement.msRequestFullScreen;

		if (typeof request != "undefined" && request) {
			request.call(docElement);
		}
		$(this).hide();
		$("a.fullscreenExit").show();
		$("#loader").fadeToggle(7000);
		$("#audio").get(0).play();
		$("p.tooltip").hide();
		return false;
	});

	$("a.fullscreenExit").on("click", function(e) {
		e.preventDefault();
		var docElement, request;

		docElement = document;
		request =
			docElement.cancelFullScreen ||
			docElement.webkitCancelFullScreen ||
			docElement.mozCancelFullScreen ||
			docElement.msCancelFullScreen ||
			docElement.exitFullscreen;
		if (typeof request != "undefined" && request) {
			request.call(docElement);
		}
		$(this).hide();
		$("#loader").fadeToggle();
		$("#audio").get(0).pause();
		$("p.tooltip").show();
		$("a.fullscreen").show();
		return false;
	});

	var index = 1;

	function plusIndex(n) {
		index = index + n;
		showBlock(index);
	}

	showBlock(1);

	function showBlock(n) {
		var i;
		var x = document.getElementsByClassName("slide");
		if (n > x.length) {
			index = 1;
		}
		if (n < 1) {
			index = x.length;
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[index - 1].style.display = "block";
	}

	autoSlide();

	function autoSlide() {
		var i;
		var x = document.getElementsByClassName("slide");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		if (index > x.length) {
			index = 1;
		}
		x[index - 1].style.display = "block";
		index++;
		setTimeout(autoSlide, 40);
	}



});





