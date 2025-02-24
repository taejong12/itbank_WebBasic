/**
 * 문제 setCalendarYearMonth() 함수를 생성하고 
 * calendarYearMonth id 값에 년도와 월을 출력
 */
let dayArr = ['일','월','화','수','목','금','토'];

function main(){
	let now = new Date();
	setTimeView();
	setTimeDateView(now);
	setCalendarYearMonth(now);
	setCalendarDate(now);
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



function setTimeDateView(now) {
	let timeDateView = 
		document.getElementById("timeDateView");
	
	timeDateView.innerText = `${now.getFullYear()}년 ${makeTwoWords(now.getMonth() + 1)}월 ${makeTwoWords(now.getDate())}일 ${getDay(now.getDay())}`; 
		
}

function getDay(day){
	return dayArr[day] + '요일';
}

function setCalendarYearMonth(now) {
	let calendarYearMonth =
		document.getElementById("calendarYearMonth");
	
	calendarYearMonth.innerText =
		now.getFullYear() + "년 " + 
		makeTwoWords(now.getMonth()+1) + "월";
}

function setCalendarDate(now){
	const calendarDate = 
		document.getElementById("calendarDate");
	
	let firstDaylastDay = 
			getCurrentCalendar(now);
	
	calendarDate.innerHTML = '';
	calendarDate.appendChild(
		createTable(firstDaylastDay.firstDay, 
			firstDaylastDay.lastDay
		)
	);
}

function getCurrentCalendar(now){
	// 문제 : 현재 월의 첫째날과 마지막날을 콘솔로 출력
	return {
	firstDay : new Date(now.getFullYear(), 
		now.getMonth(), 1).getDay(),
	lastDay : 32 - new Date(now.getFullYear(),
		now.getMonth(), 32).getDate()
	}
}

function createTable(day, endDay) {
	// table 을 생성 후 
	// day, endDay 까지 테이블에 날짜를 넣어 출력
	//  1  2  3  4  5  6  7
	//  8  9 10 11 12 13 14
	// 15 16 17 18 19 20 21
	// 22 23 24 25 26 27 28
	let table = document.createElement('table');
	
	// 월의 행 갯수
	// ((28 + 6) / 7) + 1;
	let maxI = ((endDay + day) / 7) + 1;
	
	let dateCnt = 1;
	
	// 첫번째 tr의 td 를 일 월 화 수 목 금 토 로 출력
	for(let i=0;i<maxI;i++) {
		let tr = document.createElement('tr');
		
		for(let j=0;j<7;j++){
			let td = document.createElement('td');
			
			if(i == 0) {
				td.innerText = dayArr[j];
			} else if (i == 1 && j < day){
				td.innerText = '';
			} else {
				td.innerText = dateCnt++;
			}
			
			tr.appendChild(td);
			if(endDay < dateCnt) {
				break;
			}
		}
		
		table.appendChild(tr);
	}
	
	return table;
}








