var routine = [-500,-1000,-500,0]
var teller = 0;

var main = function() {
      var imgs = document.getElementsByClassName("img");
      var i = 0;
      while (i < imgs.length) {
             imgs[i].style.transform = "translatex(" + routine[teller] + "px)";
             i++;
      }
       teller++;
      if (teller === routine.length) {teller = 0};
}

setInterval(main, 5000);

var mijnImg = document.getElementsByClassName("hover");

var i = 0;
while(i<mijnImg.length){
mijnImg[i].onmouseover = function(){
 var deVoorkant = this.getAttribute("src");
 this.setAttribute("src",this.getAttribute("data-rug"));
 this.setAttribute("data-rug", deVoorkant);
}
mijnImg[i].onmouseout = function(){
  var deAchterkant = this.getAttribute("src");
  this.setAttribute("src", this.getAttribute("data-rug"));
  this.setAttribute("data-rug", deAchterkant);
}
i++;
}

var afbeeldingen = document.getElementsByTagName("img");

afbeeldingen[1].onclick = function(){
  window.location.href="hejz.html";
}


afbeeldingen[2].onclick = function(){
  window.location.href="myrrh.html";
}


afbeeldingen[3].onclick = function(){
  window.location.href="tox.html";
}
