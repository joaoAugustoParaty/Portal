/*____Primeiro item a ser mostrado___*/
var slideItem = 0;

/*_____Passar o slide_______*/
window.onload = function() {
	setInterval(passarSlide, 2000); 

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}

/*__________Voltar para o primeiro Slide______*/
function passarSlide() {
		var slidewidth = document.getElementById("slideshow").offsetWidth;
		if(slideItem >= 3) {
		slideItem = 0;
		} else {
		slideItem++;
		}
		document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
		var bolinhas = document.getElementsByClassName("bolinha");
		for (var i = 0; i < bolinhas.length; i++) {
		bolinhas[i].style.backgroundColor = "#CCC";
		}
		bolinhas[slideItem].style.backgroundColor = "#FF0000";
		}

/*___________EFEITO DE CLICK NAS BOLINHAS_______*/
function mudarSlide(pos) {
	slideItem = pos;
var slidewidth = document.getElementById("slideshow").offsetWidth;
document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
var bolinhas = document.getElementsByClassName("bolinha");
for (var i = 0; i < bolinhas.length; i++) {
bolinhas[i].style.backgroundColor = "#CCC";
}
bolinhas[pos].style.backgroundColor = "#FF0000";
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}