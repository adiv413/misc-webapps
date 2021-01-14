$(document).ready(function(){
	$("#welcomeHeader").fadeIn(1300);
	$("#screenshot").delay(800).fadeIn(1300);
	$("#test").delay(1600).fadeIn(1300);
	$("#main-desc").delay(800).fadeIn(1300);
	setTimeout(typingFunction, 2100);
	setTimeout(contributeTyping, 30000);
})


var i = 0;
var words = ["casual chatting    ", "learning       ", "debating/discussing serious topics    ", "stale memes     "]
var state = "increasing"
var temp = ""
var speed = 200;
var txtnum = 3;
var txt;

function typingFunction() {
	if((i == 0) && (state == "decreasing")){
		temp = txt.slice(0, -1);
		document.getElementById("word").innerHTML = temp;
		txt = temp;
	}

	if (i == 0){
		if(txtnum == 3){
			txtnum = 0;
		}
		else{
			txtnum++;
		}
		state = "increasing"
		txt = words[txtnum];
	}

	if ((i < txt.length) && (state == "increasing")) {
		document.getElementById("word").innerHTML += txt.charAt(i);
		i++;
	}

	else if(i == txt.length) {
		i--;
		temp = txt.slice(0, -1);
		document.getElementById("word").innerHTML = temp;
		txt = temp;
		i--;
		state = "decreasing";
	}

	else if((i < txt.length) && (state == "decreasing")){
		temp = txt.slice(0, -1);
		document.getElementById("word").innerHTML = temp;
		txt = temp;
		i--;
	}

	if(state == "increasing"){
		setTimeout(typingFunction, 100);
	}

	else{
		setTimeout(typingFunction, 200);
	}
}

var j = 0;

function contributeTyping() {
	var text = 'What will you contribute to our community?';
	if (j < text.length) {
		console.log(j)
    	document.getElementById("contributetyping").innerHTML += text.charAt(j);
    	j++;
 	}
 	console.log(j + 1)
    setTimeout(contributeTyping, 50);
}
