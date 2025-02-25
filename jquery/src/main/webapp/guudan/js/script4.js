/**
 *  문제
 * 	맨 마지막 부분에 button 생성
 *  각 button 단의 값을 id 값으로 생성
 */

$(function(){
	$("h5").html(makeGugudan());
	
	$("#btn").click(function(){
		console.log(this);
		console.log(this.id);
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
	
	for(let i=2;i<10;i++){
		gugudanTxt += `<button id=${i}>${i}</button>`;
	}
	return gugudanTxt;
}














