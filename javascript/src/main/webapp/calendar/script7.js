/**
 *  문제 1.
 * 	new Date()를 이용해서 console.log() 로
 * 	시간 : 분 : 초 형태로 출력
 * 	예) 15:36:20
 * 
 * 	문제 2.
 * 	setTimeView() 함수에서 1초에 한번씩 
 * 		id가 timeView 에 시간이 출력 되도록 해보세요.
 * 	
 * 	문제 3.
 * 	시간 표시가 16 표시 되는 것을 오후 04변경하고 
 * 	초와 분도 한자리 0 ~ 9 면 00 ~ 09 표시되도록 변경해 보세요.
 */

/* 
문제 1.
let now = new Date();
let txt = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
console.log(txt);
*/

function setTimeView(){
	const timeView = 
		document.getElementById("timeView");
	setInterval(function(){
		let time = new Date();
		timeView.innerText = 
			convertHour(time.getHours()) +
			":" + makeTwoWords(time.getMinutes())
			+ ":" + makeTwoWords(time.getSeconds());
	}, 1000);
}


function convertHour(hour){
	let str = "오전";
	
	if(hour > 12) {
		hour -= 12;
		str = "오후";
	}
	
	return str + " " + makeTwoWords(hour);
}

function makeTwoWords(time) {
	if(time < 10) {
		return '0' + time;
	}
	return time;
}







