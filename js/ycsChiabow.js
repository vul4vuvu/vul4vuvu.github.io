/**
  * LAVOYA 全網站通用的js 
  
  * Manipulate documentation:
  * Copyright (c) 2018-2021 LAVOYA, Miss Deer Studio.
  * Please check everythings before you fix something.
**/
/*
=====================================

### 選單按鈕

=====================================
*/


function menuOn() {
  let menuButton = document.getElementById('navButton');

  let nav = document.getElementById('nav');
  menuButton.addEventListener('click', function () {
    let menuBarWidth = nav.style.width;
    let menuBarHeight = nav.style.height;
    if(menuBarWidth == 50+'px' && menuBarHeight == 50+'px'){
      
      nav.style.width = 200+'px';
      nav.style.height = 500+'px';
      /*
      document.getElementById('menuList').style.display = "block";
      
      document.getElementById('navButtonIcon').className = "fa fa-times";
      */
      showBlock();
    }else{
      document.getElementById('menuList').style.display = "none";
      nav.style.width = 50+'px';
      nav.style.height = 50+'px';
      document.getElementById('navButtonIcon').className = "fa fa-sliders";
    }
   
  });
}
function showBlock() {
  let menuBarWidth = document.getElementById('nav').style.width;
  let menuBarHeight = document.getElementById('nav').style.height;
  if(menuBarWidth == 200+'px' && menuBarHeight== 500+'px'){
    document.getElementById('menuList').style.display = "block";
    document.getElementById('navButtonIcon').className = "fa fa-times";
  }
}

/*
=====================================

### 最新消息彈出視窗

=====================================
*/

function showTheNEWSWindow(){
  // News 1
  let readMoreButton1 = document.getElementById('readMoreButton1'),
      newsWindow1 = document.getElementById('newsWindow1'),
      newsOffButton1 = document.getElementById('newsOffButton1'),
  // News 2
      readMoreButton2 = document.getElementById('readMoreButton2'),
      newsWindow2 = document.getElementById('newsWindow2'),
      newsOffButton2 = document.getElementById('newsOffButton2'),
  // News 3
      readMoreButton3 = document.getElementById('readMoreButton3'),
      newsWindow3 = document.getElementById('newsWindow3'),
      newsOffButton3 = document.getElementById('newsOffButton3');

  // News 1 ON
  if (newsWindow1.style.display = "none") {
    readMoreButton1.addEventListener('click', function(){
      newsWindow1.style.display = "block";
    });
  // News 1 OFF
  }else if(newsWindow1.style.display = "block"){
    newsOffButton1.addEventListener('click', function(){
      newsWindow1.style.display = "none";
    });
  }

  // News 2 ON
  if (newsWindow2.style.display = "none") {
    readMoreButton2.addEventListener('click', function(){
      newsWindow2.style.display = "block";
    });
  // News 2 OFF
  }else if(newsWindow2.style.display = "block"){
    newsOffButton2.addEventListener('click', function(){
      newsWindow2.style.display = "none";
    });
  }

  // News 3 ON
  if (newsWindow3.style.display = "none") {
    readMoreButton3.addEventListener('click', function(){
      newsWindow3.style.display = "block";
    });
  // News 3 OFF
  }else if(newsWindow3.style.display = "block"){
    newsOffButton3.addEventListener('click', function(){
      newsWindow3.style.display = "none";
    });
  }

  
  
}


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
  let newsPic = document.getElementById('newsPic');
  // 註冊 按鈕一
  news1Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "歡迎加入ChiaBow's Music的官方Line帳號";
    newsTime.innerHTML = "2018-08-10";
    newsArticle.innerHTML = "ChiaBow的官方Line即日起上線，<br>趕快掃描QRcode，或搜尋ID，<br>加入Line，來教室體驗課就送音樂小禮物唷!<br>ID：@ver2312s <br> <img src='img/index/qrcode.png' style = 'width:80px; height:80px;'>";
    newsPic.innerHTML = '<img src="img/index/new1.png" style="width: 70%; height:90%; margin: auto;">';
  });

  // 註冊 按鈕二
  news2Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "松山區『八德教室』招生中，開放體驗報名";
    newsTime.innerHTML = "2018-08-09";
    newsArticle.innerHTML = "積累10多年的音樂教學經驗，嘉寶老師在松山區『八德教室』創立『繆思課品牌，將多年研究幼兒音樂教學的心得，研發出分齡化的課程，包括『Orff奧福音樂遊戲』親子班，以及結合各大音樂教學法的『ChiaBow嘉寶樂器課』小提琴及鋼琴班。<br>招生期間，開放單堂體驗課，優惠價NT$400。<br>快來預約，跟嘉寶老師一起開心的玩樂器。<br>預約→ <a href='https://goo.gl/forms/hNB0LnBAn3mfUEcS2' target='_blank'>https://goo.gl/forms/hNB0LnBAn3mfUEcS2</a>";
    newsPic.innerHTML = '<img src="img/index/new2.png" style="width: 70%; height:90%; margin: auto;">';

  });

  // 註冊 按鈕三
  news3Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "歡迎下載『嘉寶的繆思課』最新課程簡章。";
    newsTime.innerHTML = "2018-08-01";
    newsArticle.innerHTML = "歡迎下載『嘉寶的繆思課』最新課程簡章。<br> <a href='https://drive.google.com/open?id=1JIA3u4Cm4v-CMCcLZln7xhYm2Phn6sJ1'  target='_blank'>點我下載</a>";
    newsPic.innerHTML = '<img src="img/index/new3.jpg" style="width: 70%; height:90%; margin: auto;">';  
  });
  
}

function scrollBoomb() {
  // 

}


window.addEventListener('load', function () {
  menuOn();
  
  newsOpen();
});



