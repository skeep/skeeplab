(function(){
	var slider;
	slider = document.getElementById('range');
	slider.onchange = function(){
		var pos = parseInt(slider.value, 10);
		slider.style.background = '-webkit-linear-gradient(left, #009eed 0%,#009eed '+pos+'%,#002849 '+(pos+1)+'%,#002849 100%)';
	}
})();