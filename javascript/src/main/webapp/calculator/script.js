/**
 * 문제 1. 
 * 각 버튼을 클릭했을 때 각 버튼의 값을 콘솔창에 출력
 * 
 * 문제 2.
 * 클릭 한 버튼의 값을 id 가 result 에 출력
 * .value 사용하면 된다. 
 * 
 * 문제 3.
 * 처음 입력하면 9 를 클릭하면 09 가 나오는데 
 * 09 가 아니라 9가 나오도록 출력
 * 
 * 문제 4.
 * C 버튼을 클릭하면 모든 내용이 지워지고 0으로 초기화
 * 
 * 문제 5.
 * < 버튼을 클릭하면 한글자씩 내용 지우고 값이 없으면 
 * 0으로 초기화
 * 
 * 문제 6.
 * 연산자가 두번 연속 출력 되지 않는다.
 * - 마지막 연산자만 출력
 * 
 * 문제 7.
 * 처음에 연산자로 시작할 수 없도록 구현
 * - -는 제외
 */


function main(){
	let btn = 
		document.getElementsByTagName('button');
	
	for(let i=0;i<btn.length;i++){
		btn[i].addEventListener('click', btnAction);
	}
}

function btnAction() {
	let result = document.getElementById("result");
	
	if(result.value == '0'){
		result.value = '';
	} 
	
	if (this.textContent == 'C') {
		result.value = '0';
	} else if (this.textContent == '<'){
		result.value =
			result.value.substr(0, result.value.length-1);
		
		if(result.value == '') {
			result.value = '0';
		}
	} else if (this.textContent == '='){
			result.value = eval(result.value);
	} else if(isNaN(this.textContent)){
		let lastChar = 
			result.value.substr(result.value.length-1, result.value.length);
		
		if(lastChar == '' && this.textContent != '-'){
			result.value = '0';
			return;
		} else if(isNaN(lastChar)){
			if(result.value.length > 1){
				result.value = 
					result.value.substr(0, result.value.length-1);	
			} else {
				result.value = '0';
				return;
			}
			
		}
		result.value += this.textContent;
	}  else {
		result.value += this.textContent;	
	}	
}








