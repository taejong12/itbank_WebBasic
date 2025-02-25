/**
 * 
 */

/*
window.onload = function() {
	// 자바스크립트에서 로딩 후 실행
}
*/
/*
$(document).ready(function(){
	// JQuery 에서 로딩 후 실행
});
*/

$(function(){
	// let h5 = document.getElementsByTagName("h5");
	// let selectH5 = document.querySelector("h5");
	
	// h5[0].innerText = 'tagName';
	// selectH5.innerText = "querySelector";
	// $().html() ==> .innerHTML 
	// $().text() ==> .innerText
	$("h5").html(makeGugudan());
});
	
// 문제 
// $("h5").html(makeGugudan());
// makeGugudan() 함수를 만들어서 구구단을 출력
// <table> 대신에 <div class='divTbl'>
// <tr> 대신에 <div class='divRow'>
// <td> 대신에 <div class='divCell'>
// 로 만드시면 됩니다.

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














