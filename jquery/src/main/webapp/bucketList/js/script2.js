/**
 * 문제 
 * li의 삭제 버튼을 클릭하면 삭제가 되도록 구현
 * remove() 사용 하면 삭제 가능 
 * 
 * 문제
 * addBtn 을 클릭하여 prompt 를 이용하여 값을 받고
 * ul 에 추가해 보세요. 
 * 
 * 문제 
 * 새로 추가된 내용의 삭제 버튼을 누르면 삭제가 되도록 구현
 */
let idx = 3;

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
	$('li#'+this.id).remove();
}
function addBtnEvent(){	
/*	let li = document.createElement("li");
	li.innerText = prompt('추가 내용을 입력하세요.');
	
	let button = document.createElement("button");
	button.innerText = '삭제';
	
	li.appendChild(button);
	
	let lst = document.getElementById("lst");
	lst.appendChild(li);*/
	// $("li") : 선택자 - html 에 있는 요소 선택
	// $("<li>") : 생성 - html 에 추가할 수 있는 요소 생성
/*	let liList = document.getElementsByTagName("li");
	
	for(let i =0;i<liList.length;i++){
		liList[i].setAttribute('id',i);
	}*/
	
	
	let li = $("<li>", {id:idx, text:prompt('추가 내용을 입력하세요.')})
	// li.attr('id', idx);
	let button = $("<button>", {id:idx, text:'삭제'});
	// button.attr('id', idx);
	
	idx++;
	li.append(button);
	$("#lst").append(li);
	
	li.click(liEvent);	
	button.click(liBtnEvent);
}




