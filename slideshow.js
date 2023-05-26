let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let columns = document.getElementsByClassName("column");
  //let captionText = document.getElementById("caption");


  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    columns[i].className = columns[i].className.replace(" active", "");
  }

  //let slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  //document.getElementById('line2').style.width="200px"

  dots[slideIndex - 1].className += " active";
  columns[slideIndex - 1].className += " active";
  ///console.log(slides[slideIndex - 1]);

  //captionText.innerHTML = dots[slideIndex-1].alt;

}









function menufunction() {

  
  const w = document.getElementById('btn');
  const q = document.getElementById('bar');
  document.getElementById('bar').style.width = "200px"
  document.getElementById('container').style.opacity = "0.2"
  document.getElementById('container').style.marginRight = "19px"
  document.getElementById('body').style.overflowY = "hidden"

  document.getElementById('menu').style.width = "180px"
  document.getElementById('moviesb').style.width = "180px"
  document.getElementById('seriesb').style.width = "180px"
  document.getElementById('settingsb').style.width = "180px"
  document.getElementById('bugb').style.width = "180px"
  document.getElementById('feedb').style.width = "180px"
  document.getElementById('questb').style.width = "180px"
  document.getElementById('homeb').style.width = "180px"
  document.getElementById('musicb').style.width = "180px"

  document.getElementById('btn').style.width = "180px"
  document.getElementById('hbtn').style.width = "180px"
  document.getElementById('mbtn').style.width = "180px"
  document.getElementById('sbtn').style.width = "180px"
  document.getElementById('setbtn').style.width = "180px"
  document.getElementById('qbtn').style.width = "180px"
  document.getElementById('fbtn').style.width = "180px"
  document.getElementById('rbtn').style.width = "180px"
  document.getElementById('musbtn').style.width = "180px"


  document.getElementById('mmu').style.display = "block"
  document.getElementById('hme').style.display = "block"
  document.getElementById('mes').style.display = "block"
  document.getElementById('ses').style.display = "block"
  document.getElementById('sgs').style.display = "block"
  document.getElementById('qst').style.display = "block"
  document.getElementById('fed').style.display = "block"
  document.getElementById('mic').style.display = "block"
  document.getElementById('bug').style.display = "block"



  w.onclick = function2

};
function function2() {
  const w = document.getElementById('btn');
  document.getElementById('bar').style.width = ""
  document.getElementById('container').style.opacity = "1"
  document.getElementById('container').style.marginRight = "0px"
  document.getElementById('body').style.overflowY = "visible"

  document.getElementById('menu').style.width = "45px"
  document.getElementById('moviesb').style.width = "45px"
  document.getElementById('seriesb').style.width = "45px"
  document.getElementById('settingsb').style.width = "45px"
  document.getElementById('bugb').style.width = "45px"
  document.getElementById('feedb').style.width = "45px"
  document.getElementById('questb').style.width = "45px"
  document.getElementById('homeb').style.width = "45px"
  document.getElementById('musicb').style.width = "45px"

  document.getElementById('hbtn').style.width = "36px"
  document.getElementById('btn').style.width = "36px"
  document.getElementById('mbtn').style.width = "36px"
  document.getElementById('sbtn').style.width = "36px"
  document.getElementById('setbtn').style.width = "36px"
  document.getElementById('qbtn').style.width = "36px"
  document.getElementById('fbtn').style.width = "36px"
  document.getElementById('rbtn').style.width = "36px"
  document.getElementById('musbtn').style.width = "36px"

  document.getElementById('mmu').style.display = "none"
  document.getElementById('hme').style.display = "none"
  document.getElementById('mes').style.display = "none"
  document.getElementById('ses').style.display = "none"
  document.getElementById('sgs').style.display = "none"
  document.getElementById('mic').style.display = "none"
  document.getElementById('bug').style.display = "none"
  document.getElementById('qst').style.display = "none"
  document.getElementById('fed').style.display = "none"

  w.onclick = menufunction

};

function f1() {
  document.getElementById('btn').style.color = "#424242"
  document.getElementById('menu').style.background = "#9c9c9cc5"

}
function f2() {
  document.getElementById('btn').style.color = "#bbb8b8"
  document.getElementById('menu').style.background = "transparent"

}


function f3() {
  document.getElementById('homie').style.color = "#424242"
  document.getElementById('hme').style.color = "#424242"
  document.getElementById('homeb').style.background = "#9c9c9cc5"
};



function f4() {
  document.getElementById('homie').style.color = "#bbb8b8"
  document.getElementById('hme').style.color = "#bbb8b8"
  document.getElementById('homeb').style.background = "transparent"

};

function f5() {
  document.getElementById('movie').style.color = "#424242"
  document.getElementById('mes').style.color = "#424242"
  document.getElementById('moviesb').style.background = "#9c9c9cc5"
};



function f6() {
  document.getElementById('movie').style.color = "#bbb8b8"
  document.getElementById('mes').style.color = "#bbb8b8"
  document.getElementById('moviesb').style.background = "transparent"

};

function f7() {
  document.getElementById('serie').style.color = "#424242"
  document.getElementById('ses').style.color = "#424242"
  document.getElementById('seriesb').style.background = "#9c9c9cc5"
};



function f8() {
  document.getElementById('serie').style.color = "#bbb8b8"
  document.getElementById('ses').style.color = "#bbb8b8"
  document.getElementById('seriesb').style.background = "transparent"

};

function f9() {
  document.getElementById('settie').style.color = "#424242"
  document.getElementById('sgs').style.color = "#424242"
  document.getElementById('settingsb').style.background = "#9c9c9cc5"
};



function f10() {
  document.getElementById('settie').style.color = "#bbb8b8"
  document.getElementById('sgs').style.color = "#bbb8b8"
  document.getElementById('settingsb').style.background = "transparent"

};

function f11() {
  document.getElementById('questie').style.color = "#424242"
  document.getElementById('qst').style.color = "#424242"
  document.getElementById('questb').style.background = "#9c9c9cc5"
};



function f12() {
  document.getElementById('questie').style.color = "#bbb8b8"
  document.getElementById('qst').style.color = "#bbb8b8"
  document.getElementById('questb').style.background = "transparent"

};

function f13() {
  document.getElementById('feedie').style.color = "#424242"
  document.getElementById('fed').style.color = "#424242"
  document.getElementById('feedb').style.background = "#9c9c9cc5"
};



function f14() {
  document.getElementById('feedie').style.color = "#bbb8b8"
  document.getElementById('fed').style.color = "#bbb8b8"
  document.getElementById('feedb').style.background = "transparent"

};

function f15() {
  document.getElementById('bugie').style.color = "#424242"
  document.getElementById('bug').style.color = "#424242"
  document.getElementById('bugb').style.background = "#9c9c9cc5"
};



function f16() {
  document.getElementById('bugie').style.color = "#bbb8b8"
  document.getElementById('bug').style.color = "#bbb8b8"
  document.getElementById('bugb').style.background = "transparent"

};

function f17() {
  document.getElementById('musicie').style.color = "#424242"
  document.getElementById('mic').style.color = "#424242"
  document.getElementById('musicb').style.background = "#9c9c9cc5"
};



function f18() {
  document.getElementById('musicie').style.color = "#bbb8b8"
  document.getElementById('mic').style.color = "#bbb8b8"
  document.getElementById('musicb').style.background = "transparent"

};



function f19() {
  document.getElementById('angle').style.color = "#424242"
  document.getElementById('ion').style.background = "#9c9c9cc5"
};
function f20() {
  document.getElementById('angle').style.color = "#bbb8b8"
  document.getElementById('ion').style.background = "transparent"
};
function f21() {
  document.getElementById('anglee').style.color = "#424242"
  document.getElementById('ioon').style.background = "#9c9c9cc5"
};
function f22() {
  document.getElementById('anglee').style.color = "#bbb8b8"
  document.getElementById('ioon').style.background = "transparent"
};
function f23() {
  document.getElementById('angl').style.color = "#424242"
  document.getElementById('in').style.background = "#9c9c9cc5"
};
function f24() {
  document.getElementById('angl').style.color = "#bbb8b8"
  document.getElementById('in').style.background = "transparent"
};




function scroll1() {

  const scroll2 = window.scrollY


  if (document.documentElement.scrollTop > 420) {
    document.getElementById('row').style.marginTop = "-160px"

    document.getElementById('aw').style.opacity = "1"
    document.getElementById('bw').style.opacity = "1"
    document.getElementById('cw').style.opacity = "1"
    document.getElementById('dw').style.opacity = "1"
    document.getElementById('ew').style.opacity = "1"

    document.getElementById('aw').style.border = "2px solid #51dbfd"
    document.getElementById('bw').style.border = "2px solid #51dbfd"
    document.getElementById('cw').style.border = "2px solid #51dbfd"
    document.getElementById('dw').style.border = "2px solid #51dbfd"
    document.getElementById('ew').style.border = "2px solid #51dbfd"

  }
  if (scroll2 < 420) {
    document.getElementById('row').style.marginTop = ""

    document.getElementById('aw').style.opacity = ""
    document.getElementById('bw').style.opacity = ""
    document.getElementById('cw').style.opacity = ""
    document.getElementById('dw').style.opacity = ""
    document.getElementById('ew').style.opacity = ""

    document.getElementById('aw').style.border = ""
    document.getElementById('bw').style.border = ""
    document.getElementById('cw').style.border = ""
    document.getElementById('dw').style.border = ""
    document.getElementById('ew').style.border = ""


  } else {
    document.getElementById('row').id = "row"
  }
}


function slidepress() {


  plusSlides(1);


}







// function line1() {
//   document.getElementById('line1').style.transitionDuration = "10000ms"
//   document.getElementById('line1').style.width = "200px"
//   change1();
// }
// function line01() {
//   document.getElementById('line1').style.transitionDuration = "1ms"
//   document.getElementById('line1').style.width = "0px"
//   change1();
// }
// function change1() {
//   line1 = line01;
// }



// function line3() {
//   console.log("////");
  // document.getElementById('line3').style.transitionDuration = "10000ms"
  // document.getElementById('line3').style.width = "200px"
  // change3();
//}
// function line03() {
//   document.getElementById('line3').style.transitionDuration = "1ms"
//   document.getElementById('line3').style.width = "0px"
//   change3();
// }
// function change3() {
//   line3 = line03;
// }
//function change03(){
//  line03 = line3;
//}



// function line3(){
//   document.getElementById('line3').style.transitionDuration="10000ms"
//   document.getElementById('line3').style.width="200px"
//   change3();
// }
// function line03(){
//   document.getElementById('line3').style.transitionDuration="1ms"
//   document.getElementById('line3').style.width="0px"
// }
// function change3(){
//   line3 = line03;
// }

function prime(){
  document.getElementById('prime').style.display="block"
  document.getElementById('body').style.overflowY = "hidden"
  document.getElementById('container').style.opacity = "0.2"
  document.getElementById('bar').style.opacity = "0.2"
  // document.getElementById('trend').style.marginLeft = "-18px"
  // document.getElementById('footer').style.marginLeft = "-18px"


  var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].id !== "cross"){
    if (buttons[i].id !== "pribtn"){
    
  buttons[i].disabled = true;
    }
}
}


}
function prime2(){
  document.getElementById('prime').style.display="none"
  document.getElementById('body').style.overflowY = "visible"
  document.getElementById('container').style.opacity = "1"
  document.getElementById('bar').style.opacity = "1"
  // document.getElementById('trend').style.marginLeft = "0"
  // document.getElementById('footer').style.marginLeft = "0"

  var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].disabled = false;
  
}
}

if(window.innerWidth <= 1025){
  document.getElementById('one').classNam="nooo"
}



