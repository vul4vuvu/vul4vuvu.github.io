var counter = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
    slide = document.querySelector('#slide'),
    items = slide.querySelectorAll('div'), // 抓取所有 img
    //items = slide.querySelectorAll('div'), // 抓取所有 img
    itemsCount = items.length, // 圖片總數 
    prevBtn = document.createElement('a'), // 上一張按鈕
    nextBtn = document.createElement('a'), // 下一張按鈕
    timer = 4000, // 4 秒換圖
    interval = window.setInterval(showNext, timer);  // 設定循環

	prevBtn.classList.add('prev'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
	nextBtn.classList.add('next'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
	slide.appendChild(prevBtn); // 將按鈕加到 #slide 裡
	slide.appendChild(nextBtn);

	// 帶入目前要顯示第幾張圖 
	var showCurrent = function(){
	  	var itemToShow = Math.abs(counter % itemsCount); // 取餘數才能無限循環
	  	[].forEach.call( items, function(el){
	    	el.classList.remove('show'); // 將所有 img 的 class="show" 移除
	  	});
	  	items[itemToShow].classList.add('show'); // 將要顯示的 img 加入 class="show"
	};

	function showNext(){
		counter++; // 將 counter+1 指定下一張圖
		showCurrent();
	}

	function showPrev(){
		counter--; // 將 counter－1 指定上一張圖
		showCurrent();
	}

	// 滑鼠移到 #slider 上方時，停止循環計時
	slide.addEventListener('mouseover', function(){
		interval = clearInterval(interval);
	});

	// 滑鼠離開 #slider 時，重新開始循環計時
	slide.addEventListener('mouseout', function(){
		interval = window.setInterval(showNext, timer);
	});

	// 綁定點擊上一張，下一張按鈕的事件
	nextBtn.addEventListener('click', showNext, false);
	prevBtn.addEventListener('click', showPrev, false);

	// 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
	items[0].classList.add('show');
	