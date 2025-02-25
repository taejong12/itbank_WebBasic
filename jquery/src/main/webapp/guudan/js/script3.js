/**
 * 문제 
 * btn 을 클릭 하면 text 를 "나타나기" 바꿔 보세요"; 
 */
$(function(){
	$("h5").html(makeGugudan());
	
	$("#btn").click(function(){
		if($("#btn").text() == '숨기기'){
			$("#btn").text("나타나기");
			$("h5").hide();	
		} else {
			$("#btn").text("숨기기");
			$("h5").show();
		}
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














