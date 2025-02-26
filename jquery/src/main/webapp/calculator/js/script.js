/**
 * 문제 1. 
 * 버튼이 클릭 될 때 의 값을 콘솔 창에 출력 해 보세요.
 * 
 * 문제 2.
 * 버튼이 클릭 될 때 의 값을 result 창에 출력 구현
 * 
 * 문제 3.
 * result 의 값이 0 이면 클릭된 값으로 출력 되도록 구현
 * 
 * 문제 4.
 * C 버튼을 누르면 result 을 0을 초기화
 * 
 * 문제 5.
 * < 버튼을 누르면 한글자씩 지우고 값이 없으면 0 으로 초기화
 * 
 * 문제 6.
 * 연산자가 연속되지 않도록 구현
 * 
 * 문제 7.
 * 처음 입력할 때 - 를 제외 하고 나머지는 입력되지 않도록 구현
 * 
 * 
 */
$(function(){
	$('input[type="button"]').click(function(){
		// console.log(this.value);
		// console.log($(this).val());
		let result = $("#result").val();
		let val = this.value;
		
		if(result == 0) {
			result = '';
		}
		
		if(val == 'C') {
			result = 0;
		} else if (val == '<') {
			result = result.substr(0,result.length-1);
			if(result == '') {
				result = 0;
			}
		} else if(isNaN(val)){
			if(result.length == 0 && val != '-' ){
				result = '0';
				return;
			} else if(isNaN(result.charAt(result.length-1))){
				if(result.length == 1) {
					result = '0';
				} else {
					result = result.substr(0, result.length-1);
					result += val;
				}
			} else {
				result += val;
			} 
			
		} else {
			result += val;	
		}
		$("#result").val(result);
	});
});