let windowWidth = window.innerWidth;
console.log(windowWidth);

if (windowWidth < 775){
  //document.getElementById("replace-cv").visibility = 'visible';
  document.getElementById("cv-div").hidden = 'true';
} else {
  //document.getElementById("cv-div").visibility = 'visible';
  document.getElementById("replace-cv").hidden = 'true';
}

window.onresize = loadAgain;

function loadAgain(){
  if (window.innerWidth != windowWidth){
    location.reload();
  }
}

