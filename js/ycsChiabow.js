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
    console.log(menuBarWidth);
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
    newsTitle.innerHTML = "嘉寶的繆思課搬新家了！";
    newsTime.innerHTML = "2019-10-30";
    newsArticle.innerHTML = "為了更好的上課環境、<br>更大的上課空間、提高交通便利性，<br>嘉寶的繆思課搬家了！充滿綠意和童趣的上課空間🌱<br>期待家長和寶貝可以在此放鬆身心，投入音樂的懷抱， <br> 歡迎大家來繆思課的新窩玩唷！";
    newsPic.innerHTML = '<img src="img/index/20191030.png" style="width: 70%; height:90%; margin: auto;">';
  });

  // 註冊 按鈕二
  news2Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "小提琴團體班熱烈開班";
    newsTime.innerHTML = "2019-10-30";
    newsArticle.innerHTML = `
      降低孩子學樂器的門檻，就要從興趣開始， 樂器的學習需要專注力和練習的恆心，才能走得長遠，<br>
     
      初學期間，在同儕環境中，以遊戲的方式親近樂器，拉近孩子和樂器之間的關係，提升興趣引導自主學習，<br>
      
      鼓勵家長一同成為孩子的學習夥伴，讓樂器學習成為親子互動的橋樑，孩子的第一堂提琴課，從繆思課開始！<br>
      
      課程年齡：4.5歲半以上<br>
      課程時間：週三下午 16:30、週六下午 14:30（詳細時間請私訊）<br>
          
      課程費用：一堂NT$650，一期12堂課，共三期。<br>
      課程特色：1. 精緻小團班2.遊戲中建立器樂能力 3. 培養那唱能視譜的基本功 4. ChiaBow music for fun設計深刻的圖像結合聲音教學方式 <br>
      課程計畫：請私訊。<br>

    `
    newsPic.innerHTML = '<img src="img/index/new2.png" style="width: 70%; height:90%; margin: auto;">';

  });

  // 註冊 按鈕三
  news3Button.addEventListener('click', function () {
    newsWindow.style.display = 'block';
    newsTitle.innerHTML = "歡迎加入ChiaBow's Music的官方Line帳號";
    newsTime.innerHTML = "2018-08-10";
    newsArticle.innerHTML = "ChiaBow的官方Line即日起上線，<br>趕快掃描QRcode，或搜尋ID，<br>加入Line，來教室體驗課就送音樂小禮物唷!<br>ID：@ver2312s <br> <img src='img/index/qrcode.png' style = 'width:80px; height:80px;'>";
    newsPic.innerHTML = '<img src="img/index/new1.png" style="width: 70%; height:90%; margin: auto;">';
  });
  
}

function scrollBoomb() {
  // 

}


window.addEventListener('load', function () {
  menuOn();
  
  newsOpen();
});



