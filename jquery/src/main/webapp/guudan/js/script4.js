/**
 *  문제 1.
 * 	맨 마지막 부분에 button 생성
 *  각 button 단의 값을 id 값으로 생성
 * 
 *  문제 2.
 * 	class divCell 에도 각 단의 값을 아이디로 지정
 *  아래 단 번호의 버튼을 누르면 해당 단이 보이지 않게 구현
 * 
 *  문제 3.
 * 	숨기기 버튼을 클릭하면 전체 구구단이 안 보이게 구현
 *  숨기기 텍스트는 나타나기로 변경하고 
 *  나타나기를 클릭하면 전체 구구단이 보이게 구현
 */

$(function(){
	$("h5").html(makeGugudan());
	
	$("button").click(function(){
		if(this.id == 'btn'){
			if($("#btn").text() == '숨기기'){
				$('.divTbl').hide();
				$('#btn').text('나타나기');	
			} else {
				$('.divTbl').show();
				$('#btn').text('숨기기');
			}
		} else if($('.divCell#'+this.id).css('display') == 'none'){
			$(".divCell#"+this.id).show();
		} else {
			$(".divCell#"+this.id).hide();	
		}
	});
});
	
function makeGugudan(){
	let gugudanTxt = '';
	
	gugudanTxt += "<div class='divTbl'>";
	gugudanTxt += '<div class="divRow">';
	
	for(let dan=2;dan<10;dan++){
		gugudanTxt += '<div class="divCell" id='+dan+ '><hr><h4>'
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














