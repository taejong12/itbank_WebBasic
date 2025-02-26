/**
 * 문제
 * 삭제가 가능하도록 구현 
 */

$(function(){
	$('li').click(liEvent);
	$('li>button').click(liBtnEvent);
	$('#addBtn').click(addBtnEvent);
});

function liEvent(){
	$('li').removeAttr('class');
	$(this).attr('class', 'active');
}
function liBtnEvent(){
/*	console.log(this);
	console.log($(this));
	console.log($(this).parent());
	console.log($(this).parents());*/
	$(this).parent().remove();
}
function addBtnEvent(){	
	let li = $("<li>", {text:prompt('추가 내용을 입력하세요.')})
	let button = $("<button>", {text:'삭제'});
	
	li.append(button);
	$("#lst").append(li);
	
	li.click(liEvent);	
	button.click(liBtnEvent);
}




