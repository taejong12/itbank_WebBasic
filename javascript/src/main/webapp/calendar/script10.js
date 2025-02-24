let dayArr = ['일','월','화','수','목','금','토'];

function main(){
	let now = new Date();
	setTimeView();
	setTimeDateView(now);
	setCalendarYearMonth(now);
	setCalendarDate(now);
	setMoveBtn();
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
	/*
		문제.
		현재 날짜를 createTable 에 매개변수로 받는다.
		현재 날짜는 td 에 active 속성을 넣는다.
		td 에 active 속성은 
			background-color:blue 로 적용
	*/
	
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

/**
 * setMoveBtn() 생성 한 후
 * calendarBeforeBtn 과 calendarAfterBtn
 * 을 클릭하면 '이전 버튼 클릭' 과 '다음 버튼 클릭'을 
 * console.log 에 출력하면 됩니다.
 * addEventListener 를 사용하세요.
 */
function setMoveBtn(){
	let calendarBeforeBtn =
		document.getElementById("calendarBeforeBtn");
	let calendarAfterBtn =
		document.getElementById("calendarAfterBtn");
		
	calendarBeforeBtn.addEventListener('click', moveCalendar);
	calendarAfterBtn.addEventListener('click', moveCalendar);
}

function moveCalendar() {
	// 문제 
	// calendarYearMonth 의 id 에서 
	// 년와 월의 값을 추출하고 콘솔에 출력 해 보세요.
	let calendarYearMonth =
		document.getElementById("calendarYearMonth");
	
	// 2025년, 02월
	let yearMonth = 
		calendarYearMonth.innerText.split(' ');
	
/*	let year = yearMonth[0].split('년')[0];
	let month = yearMonth[1].split('월')[0];
	
	console.log(Number(year));
	console.log(Number(month));*/
		
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



