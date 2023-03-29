var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay=false;
	video.loop=false;
	
});

document.getElementById("pause").addEventListener("click", function(){
	video.pause();
});

document.getElementById("play").addEventListener("click", function(){
	video.play();
	video.volume = document.getElementById("slider").value * 0.01
	document.getElementById("volume").innerHTML = (video.volume * 100).toString() + "%"
});

document.getElementById("slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.9;	
	console.log(video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.9;	
	console.log(video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function(){
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime + 10;
	}
	console.log(video.currentTime)
});

document.getElementById("mute").addEventListener("click", function(){
	if(video.muted) {
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	}
	else {
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
	}
});

document.getElementById("vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
});

document.getElementById("slider").addEventListener("input", function(){
	video.volume = document.getElementById("slider").value * 0.01
	document.getElementById("volume").innerHTML = (video.volume * 100).toString() + "%"
})

document.getElementById("orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

