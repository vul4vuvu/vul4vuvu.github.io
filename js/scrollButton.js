/*

  滑動特效

*/

let intervalId;

/*
===========================

###     滑到『最新消息』

===========================
*/

function startScrollToNews() {

  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+WebTitleFrameSize-navFrameSize;

  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    intervalId = window.setInterval(scrollUpToNewsFrame, 4);
    
  }else if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    intervalId = window.setInterval(scrollDownToNewsFrame, 4);
  }
}

// 滑上去

function scrollUpToNewsFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+WebTitleFrameSize-navFrameSize;
  
  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    body.scrollTop-=20;
    html.scrollTop-=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

// 滑下去

function scrollDownToNewsFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+WebTitleFrameSize-navFrameSize;
  
  if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    body.scrollTop+=20;
    html.scrollTop+=20;
  }else{
    window.clearInterval(intervalId);
  }
}  



/*
===========================

###     滑到『品牌故事』

===========================
*/

function startScrollToAbout() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;  
  let sectionDiv1Size = document.getElementById('sectionDiv1').getBoundingClientRect().height;
  let sectionDiv2Size = document.getElementById('sectionDiv2').getBoundingClientRect().height;
  let sectionDiv3Size = document.getElementById('sectionDiv3').getBoundingClientRect().height;
  let sectionDiv4Size = document.getElementById('sectionDiv4').getBoundingClientRect().height;

  let OrffClassFrame = document.getElementById('OrffClassFrame').getBoundingClientRect().height;
  let musicClassFrame = document.getElementById('musicClassFrame').getBoundingClientRect().height;

  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+WebTitleFrameSize+newsFrameSize+sectionDiv1Size+sectionDiv2Size+sectionDiv3Size+sectionDiv4Size+OrffClassFrame+musicClassFrame-navFrameSize;

  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    intervalId = window.setInterval(scrollUpToAboutFrame, 4);
    
  }else if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    intervalId = window.setInterval(scrollDownToAboutFrame, 4);
  }
}

// 滑上去

function scrollUpToAboutFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;  
  let sectionDiv1Size = document.getElementById('sectionDiv1').getBoundingClientRect().height;
  let sectionDiv2Size = document.getElementById('sectionDiv2').getBoundingClientRect().height;
  let sectionDiv3Size = document.getElementById('sectionDiv3').getBoundingClientRect().height;
  let sectionDiv4Size = document.getElementById('sectionDiv4').getBoundingClientRect().height;
  let OrffClassFrame = document.getElementById('OrffClassFrame').getBoundingClientRect().height;
  let musicClassFrame = document.getElementById('musicClassFrame').getBoundingClientRect().height;

  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+WebTitleFrameSize+newsFrameSize+sectionDiv1Size+sectionDiv2Size+sectionDiv3Size+sectionDiv4Size+OrffClassFrame+musicClassFrame-navFrameSize;
  
  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    body.scrollTop-=20;
    html.scrollTop-=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

// 滑下去

function scrollDownToAboutFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;  
  let sectionDiv1Size = document.getElementById('sectionDiv1').getBoundingClientRect().height;
  let sectionDiv2Size = document.getElementById('sectionDiv2').getBoundingClientRect().height;
  let sectionDiv3Size = document.getElementById('sectionDiv3').getBoundingClientRect().height;
  let sectionDiv4Size = document.getElementById('sectionDiv4').getBoundingClientRect().height;
  let OrffClassFrame = document.getElementById('OrffClassFrame').getBoundingClientRect().height;
  let musicClassFrame = document.getElementById('musicClassFrame').getBoundingClientRect().height;

  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+WebTitleFrameSize+newsFrameSize+sectionDiv1Size+sectionDiv2Size+sectionDiv3Size+sectionDiv4Size+OrffClassFrame+musicClassFrame-navFrameSize;
  
  if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    body.scrollTop+=20;
    html.scrollTop+=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

/*
===========================

###     滑到『課程資訊』

===========================
*/


function startScrollToClass() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+newsFrameSize+aboutFrameSize-navFrameSize;

  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    intervalId = window.setInterval(scrollUpToClassFrame, 4);
   
  }else if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    intervalId = window.setInterval(scrollDownToClassFrame, 4);
  }
}

// 滑上去

function scrollUpToClassFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;  
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+newsFrameSize+aboutFrameSize-navFrameSize;
  
  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    body.scrollTop-=20;
    html.scrollTop-=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

// 滑下去

function scrollDownToClassFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;  
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+newsFrameSize+aboutFrameSize-navFrameSize;
  
  if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    body.scrollTop+=20;
    html.scrollTop+=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

/*
===========================

###     滑到『成果發表』

===========================
*/


function startScrollToResult() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;
  let classInfornationFrame = document.getElementById('classInfornationFrame').getBoundingClientRect().height;
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+newsFrameSize+aboutFrameSize+classInfornationFrame-navFrameSize;

  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    intervalId = window.setInterval(scrollUpToResultFrame, 4);
    
  }else if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    intervalId = window.setInterval(scrollDownToResultFrame, 4);
  }
}

// 滑上去

function scrollUpToResultFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;  
  let classInfornationFrame = document.getElementById('classInfornationFrame').getBoundingClientRect().height;  
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+newsFrameSize+aboutFrameSize+classInfornationFrame-navFrameSize;
  
  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    body.scrollTop-=20;
    html.scrollTop-=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

// 滑下去

function scrollDownToResultFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;  
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;
  let classInfornationFrame = document.getElementById('classInfornationFrame').getBoundingClientRect().height;  
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = headerFrameSize+newsFrameSize+aboutFrameSize+classInfornationFrame-navFrameSize;
  
  if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    body.scrollTop+=20;
    html.scrollTop+=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

/*
===========================

###     滑到『聯絡我』

===========================
*/


function startScrollToContact() {

  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;  
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;
  let sectionDiv1Size = document.getElementById('sectionDiv1').getBoundingClientRect().height;
  let sectionDiv2Size = document.getElementById('sectionDiv2').getBoundingClientRect().height;
  let sectionDiv3Size = document.getElementById('sectionDiv3').getBoundingClientRect().height;
  let sectionDiv4Size = document.getElementById('sectionDiv4').getBoundingClientRect().height;
  let sectionDiv5Size = document.getElementById('sectionDiv5').getBoundingClientRect().height;

  let OrffClassFrame = document.getElementById('OrffClassFrame').getBoundingClientRect().height;
  let musicClassFrame = document.getElementById('musicClassFrame').getBoundingClientRect().height;
  let orderClassFrame = document.getElementById('orderClassFrame').getBoundingClientRect().height;
  let slideFrame = document.getElementById('slideFrame').getBoundingClientRect().height;
  
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = sectionDiv1Size+sectionDiv2Size+sectionDiv3Size+sectionDiv4Size+sectionDiv5Size+WebTitleFrameSize+headerFrameSize+newsFrameSize+aboutFrameSize+OrffClassFrame+musicClassFrame+orderClassFrame+slideFrame-navFrameSize;

  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    intervalId = window.setInterval(scrollUpToContactFrame, 4);
    
  }else if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    intervalId = window.setInterval(scrollDownToContactFrame, 4);
  }
}

// 滑上去

function scrollUpToContactFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;  
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;
  let sectionDiv1Size = document.getElementById('sectionDiv1').getBoundingClientRect().height;
  let sectionDiv2Size = document.getElementById('sectionDiv2').getBoundingClientRect().height;
  let sectionDiv3Size = document.getElementById('sectionDiv3').getBoundingClientRect().height;
  let sectionDiv4Size = document.getElementById('sectionDiv4').getBoundingClientRect().height;
  let sectionDiv5Size = document.getElementById('sectionDiv5').getBoundingClientRect().height;

  let OrffClassFrame = document.getElementById('OrffClassFrame').getBoundingClientRect().height;
  let musicClassFrame = document.getElementById('musicClassFrame').getBoundingClientRect().height;
  let orderClassFrame = document.getElementById('orderClassFrame').getBoundingClientRect().height;
  let slideFrame = document.getElementById('slideFrame').getBoundingClientRect().height;
  
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = sectionDiv1Size+sectionDiv2Size+sectionDiv3Size+sectionDiv4Size+sectionDiv5Size+WebTitleFrameSize+headerFrameSize+newsFrameSize+aboutFrameSize+OrffClassFrame+musicClassFrame+orderClassFrame+slideFrame-navFrameSize;
  
  if(body.scrollTop > locationFrame || html.scrollTop > locationFrame){
    body.scrollTop-=20;
    html.scrollTop-=20;
  }else{
    window.clearInterval(intervalId);
  }
}  

// 滑下去

function scrollDownToContactFrame() {
  let headerFrameSize = document.getElementById('headerFrame').getBoundingClientRect().height;
  let WebTitleFrameSize = document.getElementById('WebTitleFrame').getBoundingClientRect().height;  
  let newsFrameSize = document.getElementById('newsFrame').getBoundingClientRect().height;
  let aboutFrameSize = document.getElementById('aboutMeFrame').getBoundingClientRect().height;
  let sectionDiv1Size = document.getElementById('sectionDiv1').getBoundingClientRect().height;
  let sectionDiv2Size = document.getElementById('sectionDiv2').getBoundingClientRect().height;
  let sectionDiv3Size = document.getElementById('sectionDiv3').getBoundingClientRect().height;
  let sectionDiv4Size = document.getElementById('sectionDiv4').getBoundingClientRect().height;
  let sectionDiv5Size = document.getElementById('sectionDiv5').getBoundingClientRect().height;

  let OrffClassFrame = document.getElementById('OrffClassFrame').getBoundingClientRect().height;
  let musicClassFrame = document.getElementById('musicClassFrame').getBoundingClientRect().height;
  let orderClassFrame = document.getElementById('orderClassFrame').getBoundingClientRect().height;
  let slideFrame = document.getElementById('slideFrame').getBoundingClientRect().height;
  
  let navFrameSize = document.getElementById('navFrame').getBoundingClientRect().height;
  let body = document.body; // For Safari
  let html = document.documentElement; // For Chrome, IE, and FireFox
  let locationFrame = sectionDiv1Size+sectionDiv2Size+sectionDiv3Size+sectionDiv4Size+sectionDiv5Size+WebTitleFrameSize+headerFrameSize+newsFrameSize+aboutFrameSize+OrffClassFrame+musicClassFrame+orderClassFrame+slideFrame-navFrameSize;
  
  if(body.scrollTop < locationFrame && html.scrollTop < locationFrame){
    body.scrollTop+=20;
    html.scrollTop+=20;
  }else{
    window.clearInterval(intervalId);
  }
}  


