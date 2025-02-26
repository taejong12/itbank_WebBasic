/**
 * 문제 
 * li 클릭하면 클릭된 li만 active 클래스 속성 추가
 * 나머지는 active 속성 제거
 */
$(function(){
	$('li').click(function(){
		let li = document.getElementsByTagName("li");
		for(let i =0;i<li.length;i++){
			li[i].removeAttribute('class');
		}
		this.setAttribute('class', 'active');
		// $('li').removeAttr('class');
		// $(this).attr('class', 'active');
	});
});

