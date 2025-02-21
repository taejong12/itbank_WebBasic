/**
 * 	문제1.
 * 	setTimeDateView() 함수를 만들고
 * 		id가 timeDateView 에 오늘 날짜를 출력 해보세요.
 * 	형식 : 2025년 02월 21일 금요일
 */

function main(){
	setTimeView();
	setTimeDateView();
}

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



function setTimeDateView() {
	let timeDateView = 
		document.getElementById("timeDateView");
	
	let now = new Date();
	
	timeDateView.innerText = `${now.getFullYear()}년 ${makeTwoWords(now.getMonth() + 1)}월 ${makeTwoWords(now.getDate())}일 ${getDay(now.getDay())}`; 
		/*
		now.getFullYear() + "년 " +
		makeTwoWords(now.getMonth() + 1) + "월 "
		+ makeTwoWords(now.getDate()) + "일 " +
		getDay(now.getDay());
		*/
		
}

function getDay(day){
	let dayArr = ['일','월','화','수','목','금','토'];
	return dayArr[day] + '요일';
}


