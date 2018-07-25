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

  // 註冊 按鈕一
  news1Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "7/11 停課一日";
    newsTime.innerHTML = "2018-07-10";
    newsArticle.innerHTML = "因應7/11 瑪莉亞颱風來襲，停課一日。";
  });

  // 註冊 按鈕二
  news2Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "7/03 停課一日";
    newsTime.innerHTML = "2018-07-02";
    newsArticle.innerHTML = "因應7/03 本教室裝修，停課一日";
  });

  // 註冊 按鈕三
  news3Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "本教室開始招生";
    newsTime.innerHTML = "2018-06-21";
    newsArticle.innerHTML = "本教室即日起開始招收2018年7月份新生！";
  });
  
}


window.addEventListener('load', function () {
  menuOn();
  //showTheNEWSWindow();
  newsOpen();
});



