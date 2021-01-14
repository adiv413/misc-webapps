$(document).ready(function(){
	$("#welcomeHeader").fadeIn(1300);
	$("#subHeader").delay(800).fadeIn(1300);
	$("#learnMoreButton").delay(800).fadeIn(1300);
	$("#screenshot").delay(800).fadeIn(1300);
	$("#section-1").delay(1600).fadeIn(1300);
	var fileName = location.pathname.split("/").slice(-1);
	if(fileName == "index.html") {
		setTimeout(typingFunction, 2390);
	}
	 /* Every time the window is scrolled ... */
    $(window).scroll(function(){

    	var top_of_object = $('#hideme').offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > top_of_object ){
            $('#hideme').delay(300).animate({'opacity':'1'},1300);                   
        }
    
    });
})


var i = 0;
var words = ["Powerful heat at the touch of a button.                    ", "High quality fabrics and weave that wick away moisture.                   ", "Fast USB charging and a battery that lasts all day.                  "]
var state = "increasing"
var temp = ""
var speed = 50;
var txtnum = words.length - 1;
var txt;


function typingFunction() {
	if((i == 0) && (state == "decreasing")){
		temp = txt.slice(0, -1);
		document.getElementById("word").innerHTML = temp;
		txt = temp;
	}

	if (i == 0){
		if(txtnum == words.length - 1){
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
		setTimeout(typingFunction, speed);
	}

	else{
		setTimeout(typingFunction, speed);
	}
}