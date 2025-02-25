/**
 * 문제 1.
 * thumb 이라는 클래스를 addEventListener 만들기
 * 클릭했을 때 lightBoxOpen 함수로 이동하도록 구현
 * lightBox, block 이라는 id에 active 클래스 추가
 * 
 * 문제 2.
 * btnClose 클래스를 클릭하면 화면 제거 
 * lightBoxClose 함수로 이동하여 구현
 * 
 * 문제 3.
 * thumb 에서 클릭한 이미지를 imageChange 함수로 출력
 * active 클래스를 지정하면 된다. 
 * 
 * 문제 4.
 * indicator 클래스를 클릭해도 이미지가 변경 되도록 해 보세요.
 * imageChange 함수를 이용해서 하면 된다. 
 */

function main (){
	const thumb =
		document.querySelectorAll(".thumb");
	for(let i=0;i<thumb.length;i++){
		thumb[i].addEventListener('click', lightBoxOpen);
	}
	
	const btnClose = 
		document.querySelector(".btnClose");
	btnClose.addEventListener('click', lightBoxClose);
	
	const indicator = 
		document.querySelector(".indicator");
	indicator.addEventListener('click', imageChange);
}

function lightBoxOpen(event){
	let lightBox = 
		document.getElementById("lightBox");
	let block = 
		document.getElementById("block");
	
	lightBox.setAttribute('class', 'active');
	block.setAttribute('class', 'active');
	
	imageChange(event);
}

function lightBoxClose(){
	let lightBox = 
		document.getElementById("lightBox");
	let block = 
		document.getElementById("block");
	
	lightBox.removeAttribute('class');
	block.removeAttribute('class');
}

function imageChange(event){
	// let img = document.getElementsByTagName('figure')[0].children;
	let img = document.querySelector('figure').children;
	
	if(event.target.className == 'indicator') {
		return;
	}
	
	for(let i=0;i<img.length;i++){
		img[i].removeAttribute('class');
	}
	
	img[event.target.id-1].setAttribute('class', 'active');
	// console.log(event.target.id-1);
	setCarInfo(event.target.id-1);	
}

/**
 * 문제 5.
 * imageChange 가 실행 될때마다 setCarInfo(carNum)를
 * 실행 하도록 구현
 * carNum 는 id-1 값을 의미 한다.
 * setCarInfo() 함수에는 아래와 같은 배열을 사용한다.
 * let carDataArr = [
	["어큐리 NSX GT3", "포르쉐 911 GT2 RS 클럽에디션", 
			"람보르기니 SC18 컨셉트"],
	["GT3", "3501cc", "정보없음", 
			"정보없음", "465,000유로"],
	["3.8 가솔린", "3800cc", "700hp", 
			"11.81l/km", "가격정보없음"],
	["SC18", "6498cc", "770hp", 
			"정보없음", "정보없음"]
	];
 */
function setCarInfo(carNum) {
	let carDataArr = [
		["어큐리 NSX GT3", "포르쉐 911 GT2 RS 클럽에디션", 
				"람보르기니 SC18 컨셉트"],
		["GT3", "3501cc", "정보없음", 
				"정보없음", "465,000유로"],
		["3.8 가솔린", "3800cc", "700hp", 
				"11.81l/km", "가격정보없음"],
		["SC18", "6498cc", "770hp", 
				"정보없음", "정보없음"]
		];
	
	let lightBox = 
		document.getElementById("lightBox");
	
	console.log(lightBox.children);
	
	let h1 = lightBox.children[0];
	h1.innerText = carDataArr[0][carNum];
	
	let table = lightBox.children[2];
	console.log(table.rows[1].cells[0]);
	
	for(let i=0;i<table.rows[1].cells.length;i++){
		table.rows[1].cells[i].innerText =
			carDataArr[carNum+1][i];
	}	
}

	
	
	
	
	
	
	
	