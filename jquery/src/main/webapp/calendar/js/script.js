/**
 * javascript 로 만들어 놓은 코드를 JQuery 로 변경
 */

let dayArr = ['일','월','화','수','목','금','토'];

function main(){
	let now = new Date();
	setTimeView();
	setTimeDateView(now);
	setCalendarYearMonth(now);
	setCalendarDate(now);
	setMoveBtn();
	setTimeWindowCtrlminimumBtn();
	setCalendarWindowCtrlMinimumBtn();
}

function setTimeView(){
	setInterval(function(){
		let time = new Date();
		$("#timeView").text(
			convertHour(time.getHours()) +
			":" + makeTwoWords(time.getMinutes())
			+ ":" + makeTwoWords(time.getSeconds())
		);
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
	$("#timeDateView").text(`${now.getFullYear()}년 ${makeTwoWords(now.getMonth() + 1)}월 ${makeTwoWords(now.getDate())}일 ${getDay(now.getDay())}`); 
}

function getDay(day){
	return dayArr[day] + '요일';
}

function setCalendarYearMonth(now) {
	$("#calendarYearMonth").text(
		now.getFullYear() + "년 " + 
		makeTwoWords(now.getMonth()+1) + "월"
	);
}

function setCalendarDate(now){

	let firstDaylastDay = getCurrentCalendar(now);
	let today = now.getDate();

	$("#calendarDate").empty().append(
		createTable(firstDaylastDay.firstDay, 
			firstDaylastDay.lastDay,
			today
		)
	);
}

function getCurrentCalendar(now){
	return {
	firstDay : new Date(now.getFullYear(), 
		now.getMonth(), 1).getDay(),
	lastDay : 32 - new Date(now.getFullYear(),
		now.getMonth(), 32).getDate()
	}
}

function createTable(day, endDay, today) {
	let table = $("<table>");
	
	// 월의 행 갯수
	let maxI = ((endDay + day) / 7) + 1;
	
	let dateCnt = 1;
	
	for(let i=0;i<maxI;i++) {
		let tr = $("<tr>");
		
		for(let j=0;j<7;j++){
			let td = $("<td>");
			
			if(i == 0) {
				td.text(dayArr[j]);
			} else if (i == 1 && j < day){
				td.text('');
			} else if (dateCnt == today) {
				td.addClass("active").text(dateCnt++);
			} else {
				td.text(dateCnt++);
			}
			
			tr.append(td);
			if(endDay < dateCnt) {
				break;
			}
		}
		
		table.append(tr);
	}
	
	return table;
}

function setMoveBtn(){
	$("#calendarBeforeBtn").on('click', moveCalendar);
	$("#calendarAfterBtn").on('click', moveCalendar);
}

function moveCalendar() {

	// 2025년, 02월
	let yearMonth = $("#calendarYearMonth").text().split(' ');
	
	let year = parseInt(yearMonth[0]);
	let month = parseInt(yearMonth[1]);
	
	let value = 0;
	if(this.id == 'calendarBeforeBtn') {
		value = -1;
	} else if (this.id == 'calendarAfterBtn') {
		value = +1;
	}
	
	let day = new Date();
	let moveDate = new Date(year, 
			month-1 + value, day.getDate());
	
	setCalendarYearMonth(moveDate);
	setCalendarDate(moveDate);
}

/*
	문제
	setTimeWindowCtrlMinimumBtn() 함수 생성
	timeWindowCtrlBtn 의 아이디를 클릭했을 때 
	클릭 이벤트 발생하도록 구현
	setCalendarWindowCtrlMinimumBtn() 함수 생성
	calendarWindowCtrlBtn 의
	아이디를 클릭했을 때 클릭 이벤트 발생 하도록 구현
	- 콘솔에 출력 
*/
function setTimeWindowCtrlminimumBtn(){
		let timeWindowCtrlBtn = $("#timeWindowCtrlBtn");
	
		timeWindowCtrlBtn.on('click', function(){
		// timeMain, timeView, timeDateView
		// 아이디 값을 가져와서 
		// timeView와 timeDateView 보이지 않게 해보기.
		let timeMain = $("#timeMain");
		let timeView = $("#timeView");
		let timeDateView =$("#timeDateView");
		
		if(timeWindowCtrlBtn.text() == '-'){
			timeWindowCtrlBtn.text('ㅁ');
			timeMain.addClass('minimumMain');
			timeView.addClass('minimum');
			timeDateView.addClass('minimum');	
		} else {
			timeWindowCtrlBtn.text('-');
			timeMain.removeClass();
			timeView.removeClass();
			timeDateView.removeClass();
		}
		 
	});
}

function setCalendarWindowCtrlMinimumBtn(){
	// 위와 같은 방법으로 구현해 보세요.
	let calendarWindowCtrlBtn = $("#calendarWindowCtrlBtn");
	
	calendarWindowCtrlBtn.on('click', function (){
		let calendarMain = $("#calendarMain");
		let calendarYearMonth = $("#calendarYearMonth");
		let calendarDate = $("#calendarDate");
		let calendarBeforeBtn = $("#calendarBeforeBtn");
		let calendarAfterBtn = $("#calendarAfterBtn");
		
		if(calendarWindowCtrlBtn.text() == '-'){
			calendarWindowCtrlBtn.text('ㅁ');
			calendarMain.addClass('minimumMain');
			calendarYearMonth.addClass('minimum');
			calendarDate.addClass('minimum');
			calendarBeforeBtn.addClass('minimum');
			calendarAfterBtn.addClass('minimum');
		} else {
			calendarWindowCtrlBtn.text('-');
			calendarMain.removeClass();
			calendarYearMonth.removeClass();
			calendarDate.removeClass();
			calendarBeforeBtn.removeClass();
			calendarAfterBtn.removeClass();
		}
	})
}
