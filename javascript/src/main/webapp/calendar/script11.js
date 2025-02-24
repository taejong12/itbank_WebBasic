let dayArr = ['일','월','화','수','목','금','토'];

function main(){
	let now = new Date();
	setTimeView();
	setTimeDateView(now);
	setCalendarYearMonth(now);
	setCalendarDate(now);
	setMoveBtn();
	setTimeWindowCtrlminimumBtn();
	setCalendarWindowCtrlMinimumBtn()
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
	
	let today = now.getDate();
	calendarDate.innerHTML = '';
	calendarDate.appendChild(
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
	let table = document.createElement('table');
	
	// 월의 행 갯수
	let maxI = ((endDay + day) / 7) + 1;
	
	let dateCnt = 1;
	
	for(let i=0;i<maxI;i++) {
		let tr = document.createElement('tr');
		
		for(let j=0;j<7;j++){
			let td = document.createElement('td');
			
			if(i == 0) {
				td.innerText = dayArr[j];
			} else if (i == 1 && j < day){
				td.innerText = '';
			} else if (dateCnt == today) {
				td.setAttribute('class', 'active');
				td.innerText = dateCnt++;
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

function setMoveBtn(){
	let calendarBeforeBtn =
		document.getElementById("calendarBeforeBtn");
	let calendarAfterBtn =
		document.getElementById("calendarAfterBtn");
		
	calendarBeforeBtn.addEventListener('click', moveCalendar);
	calendarAfterBtn.addEventListener('click', moveCalendar);
}

function moveCalendar() {
	let calendarYearMonth =
		document.getElementById("calendarYearMonth");
	
	// 2025년, 02월
	let yearMonth = 
		calendarYearMonth.innerText.split(' ');
	
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
	let timeWindowCtrlBtn =
		document.getElementById("timeWindowCtrlBtn");
	timeWindowCtrlBtn.addEventListener('click', function(){
		// timeMain, timeView, timeDateView
		// 아이디 값을 가져와서 
		// timeView와 timeDateView 보이지 않게 해보기.
		let timeMain = 
			document.getElementById("timeMain");
		let timeView = 
			document.getElementById("timeView");
		let timeDateView =
			document.getElementById("timeDateView");
		
		if(timeWindowCtrlBtn.innerText == '-'){
			timeWindowCtrlBtn.innerText = 'ㅁ';
			timeMain.setAttribute('class', 'minimumMain');
			timeView.setAttribute('class', 'minimum');
			timeDateView.setAttribute('class', 'minimum');	
		} else {
			timeWindowCtrlBtn.innerText = '-';
			timeMain.removeAttribute('class');
			timeView.removeAttribute('class');
			timeDateView.removeAttribute('class');
		}
		 
	});
}

function setCalendarWindowCtrlMinimumBtn(){
	// 위와 같은 방법으로 구현해 보세요.
	let calendarWindowCtrlBtn =
		document.getElementById("calendarWindowCtrlBtn");
	calendarWindowCtrlBtn.addEventListener('click', function (){
		let calendarMain = 
			document.getElementById('calendarMain');
		let calendarYearMonth =
			document.getElementById('calendarYearMonth');
		let calendarDate = 
			document.getElementById('calendarDate');
		let calendarBeforeBtn = 
			document.getElementById('calendarBeforeBtn');
		let calendarAfterBtn = 
			document.getElementById('calendarAfterBtn');
		
		if(calendarWindowCtrlBtn.innerText == '-'){
			calendarWindowCtrlBtn.innerText = 'ㅁ';
			calendarMain.setAttribute('class','minimumMain');
			calendarYearMonth.setAttribute('class', 'minimum');
			calendarDate.setAttribute('class', 'minimum');
			calendarBeforeBtn.setAttribute('class', 'minimum');
			calendarAfterBtn.setAttribute('class', 'minimum');
		} else {
			calendarWindowCtrlBtn.innerText = '-';
			calendarMain.removeAttribute('class');
			calendarYearMonth.removeAttribute('class');
			calendarDate.removeAttribute('class');
			calendarBeforeBtn.removeAttribute('class');
			calendarAfterBtn.removeAttribute('class');
		}
	})
}
