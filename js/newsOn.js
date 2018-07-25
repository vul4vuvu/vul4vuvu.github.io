function newsOpen() {
	let newsWindow = document.getElementById('newsWindow1');
	//let newsWindowStatus = newsWindow.style.display;
	
	// button 1~3 
	let news1Button = document.getElementById('readMoreButton1');
	let news2Button = document.getElementById('readMoreButton2');
	let news3Button = document.getElementById('readMoreButton3');

	// 視窗內容
	let newsTitle = document.getElementById('newsTitle');
	let newsTime = document.getElementById('newsTime');
	let newsArticle = document.getElementById('newsArticle');

	// 註冊 按鈕一
	news1Button.addEventListener('click', function () {
		newsWindow.style.display = 'block';
		newsTitle.innerHTML = "7/11 停課一日";
		newsTime.innerHTML = "2018-07-10";
		newsArticle.innerHTML = "因應7/11 瑪莉亞颱風來襲，停課一日。";
	});
	
}