/**
 * 문제 1. thumb 클래스를 클릭했을 때 각자의 아이디 값을 
 * 콘솔에 출력 하기
 * 
 * 문제 2. lightBoxOpen() 함수를 생성 후 
 * thumb 클래스 이미지를 클릭하면 lightBox에 
 * active class 속성 추가 
 * 
 * 문제 3. btnClose 클릭하면 lightBox 에
 * active class 속성 제거
 * 
 * 문제 4. thumb 을 클릭 하면 
 * id인 block 도 active 속성 추가
 * btnClose 를 클릭하면 active 속성 제거
 * 
 * 문제 5. thumb 을 클릭하면 이미지가 현재 안 나오고 있음
 * thumb 을 클릭하면 해당 하는 이미지가 출력 되도록 구현
 * 
 * 문제 6. indicator 를 클릭하면 각 이미지를 출력 하도록 구현
 * 
 * 문제 7. table 에 저장된 문자를 carDataArr 데이터로 대체
 * 하여 구현 해 보세요.
 */
$(function(){
	$(".thumb").click(function(){
		// console.log(this.id);
		lightBoxOpen(this.id-1);
	});
	
	$(".btnClose").click(lightBoxClose);
	$(".indicator>button").click(function(){
		// console.log(this);
		imageChange(this.id-1);
	});		
});

function lightBoxOpen(idx){
	$("#lightBox").attr('class', 'active');
	$("#block").attr('class', 'active');
	imageChange(idx);
}

function lightBoxClose(){
	$("#lightBox").removeAttr('class');
	$("#block").removeAttr('class');
}

function imageChange(idx) {
	setCarInfo(idx);
	// console.log($("figure>img")[idx]);
	$("figure>img").removeAttr('class');
	$("figure>img")[idx].setAttribute('class', 'active');
}

function setCarInfo(idx){
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
	
	$("#lightBox>h1").text(carDataArr[0][idx]);
	for(let i=0;i<carDataArr[1].length;i++){
		// $("#lightBox>table").children(1).children(0)[1].cells[i].innerText= carDataArr[idx+1][i];
		// $("#carInfo td")[i].innerText = carDataArr[idx+1][i];
		$("#carInfo td").eq(i).text(carDataArr[idx+1][i]);
	}
}






