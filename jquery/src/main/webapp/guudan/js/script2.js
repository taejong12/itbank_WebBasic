/**
 * 문제 1. 
 * JavaScript 와 CSS 로 숨기기 버튼을 누르면 
 * 구구단 안 보이게 하고 나타나기 버튼을 누르면 
 * 구구단이 보이게 구현
 */
$(function(){
	$("h5").html(makeGugudan());
	
/*	$("#hide").click(function (){
		let h5 = document.querySelector("h5");
		h5.setAttribute('class', 'hide');	
	});
	$("#show").click(function () {
		let h5 = document.querySelector("h5");
		h5.removeAttribute('class');
	});*/
	
	// .show() : 보여주기 (display:inline-block)
	// .hide() : 안 보이게 하기 (display:none)
	$("#show").hide();
	$("#hide").click(function(){
		$('h5').hide();
		$('#show').show();
		$('#hide').hide();
	});
	
	$("#show").click(function(){
		$('h5').show();
		$('#show').hide();
		$('#hide').show();
	});
});
	
function makeGugudan(){
	let gugudanTxt = '';
	
	gugudanTxt += "<div class='divTbl'>";
	gugudanTxt += '<div class="divRow">';
	
	for(let dan=2;dan<10;dan++){
		gugudanTxt += '<div class="divCell"><hr><h4>'
			+ dan + '단</h4><hr>';
		for(let i=1;i<10;i++){
			gugudanTxt += dan + " * " + i + " = " + (dan * i) + '<br>';
		}
		gugudanTxt += "</div>";
	}
	
	gugudanTxt += "</div></div>";
	return gugudanTxt;
}














