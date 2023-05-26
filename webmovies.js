


function menufunction() {
    const w = document.getElementById('btn');
    const q = document.getElementById('bar');
    document.getElementById('bar').style.width = "200px"
    document.getElementById('container').style.opacity = "0.2"
    document.getElementById('container').style.marginRight = "19px"
    document.getElementById('body').style.overflowY = "hidden"
    var pri = document.getElementById('privacy')
    var set2 = document.getElementById('set2')
    if(pri){
      pri.style.overflowY = "hidden"
    }
    if(set2){
      set2.style.overflowY = "hidden"
    }
  
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
  
  
  
    w.onclick = menufunction2
  
  };
  function menufunction2() {
    const w = document.getElementById('btn');
    document.getElementById('bar').style.width = ""
    document.getElementById('container').style.opacity = "1"
    document.getElementById('container').style.marginRight = "0px"
    document.getElementById('body').style.overflowY = "visible"
    var pri = document.getElementById('privacy')
    var set2 = document.getElementById('set2')
    if(pri){
      pri.style.overflowY = "visible"
    }
    if(set2){
      set2.style.overflowY = "visible"
    }
  
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





  





function prev(){
  var div = document.querySelector(".moo")
  var dive = window.getComputedStyle(div)
  ///var matrix = new WebKitCSSMatrix(dive.transform)
  var ml = parseInt(dive.getPropertyValue('margin-left'), 10)
  
if(ml >= -300){
    //div.style.transitionDuration = "1ms"
    // div.style.marginLeft = "11px"
    var mi = parseInt(dive.getPropertyValue('margin-left'))
    //console.log(mi)
    var mml =  11 - (mi)
    div.style.marginLeft = mml + mi + "px"
    


}else{
  div.style.transitionDuration = "1s"
  let num = ml + 300
  let w = num + "px"
  div.style.marginLeft = w
}


}
function next(){
  var div = document.querySelector(".moo")
  var dive = window.getComputedStyle(div)
  var ml = parseInt(dive.getPropertyValue('margin-left'), 10)
  
  
  
  let width = window.innerWidth
  if(width < 329){
    if(ml <= -1100){
      var mi = parseInt(dive.getPropertyValue('margin-left'))
      //console.log(mi)
      var mml = (-1273) - (mi)
      var mmm = mml + mi
      //console.log(mmm)
      div.style.marginLeft = mmm  + "px"
  
  }else{
    div.style.transitionDuration = "1s"
    let num = ml - 200
    let w = num + "px"
    div.style.marginLeft = w
  }
  }else{







if(ml <= -1100){
    var mi = parseInt(dive.getPropertyValue('margin-left'))
    //console.log(mi)
    var mml = (-1365) - (mi)
    var mmm = mml + mi
    //console.log(mmm)
    div.style.marginLeft = mmm  + "px"

}else{
  div.style.transitionDuration = "1s"
  let num = ml - 300
  let w = num + "px"
  div.style.marginLeft = w
}

}}

function prev2(){
  var div = document.querySelector(".maa")
  var dive = window.getComputedStyle(div)
  var ml = parseInt(dive.getPropertyValue('margin-left'), 10)
  
if(ml >= -300){

    var mi = parseInt(dive.getPropertyValue('margin-left'))

    var mml =  11 - (mi)
    div.style.marginLeft = mml + mi + "px"
    


}else{
  div.style.transitionDuration = "1s"
  let num = ml + 300
  let w = num + "px"
  div.style.marginLeft = w
}


}
function next2(){
  var div = document.querySelector(".maa")
  var dive = window.getComputedStyle(div)
  var ml = parseInt(dive.getPropertyValue('margin-left'), 10)
  

  let width = window.innerWidth
  if(width < 329){
    if(ml <= -1100){
      var mi = parseInt(dive.getPropertyValue('margin-left'))
      //console.log(mi)
      var mml = (-1273) - (mi)
      var mmm = mml + mi
      //console.log(mmm)
      div.style.marginLeft = mmm  + "px"
  
  }else{
    div.style.transitionDuration = "1s"
    let num = ml - 200
    let w = num + "px"
    div.style.marginLeft = w
  }
  }else{




if(ml <= -1100){
    var mi = parseInt(dive.getPropertyValue('margin-left'))
    
    var mml = (-1365) - (mi)
    var mmm = mml + mi
    
    div.style.marginLeft = mmm  + "px"

}else{
  div.style.transitionDuration = "1s"
  let num = ml - 300
  let w = num + "px"
  div.style.marginLeft = w
}

}}


function prev3(){
  var div = document.querySelector(".mee")
  var dive = window.getComputedStyle(div)
  var ml = parseInt(dive.getPropertyValue('margin-left'), 10)
  
if(ml >= -300){

    var mi = parseInt(dive.getPropertyValue('margin-left'))

    var mml =  11 - (mi)
    div.style.marginLeft = mml + mi + "px"
    


}else{
  div.style.transitionDuration = "1s"
  let num = ml + 300
  let w = num + "px"
  div.style.marginLeft = w
}


}
function next3(){
  var div = document.querySelector(".mee")
  var dive = window.getComputedStyle(div)
  var ml = parseInt(dive.getPropertyValue('margin-left'), 10)
  



  let width = window.innerWidth
  if(width < 329){
    if(ml <= -1100){
      var mi = parseInt(dive.getPropertyValue('margin-left'))
      //console.log(mi)
      var mml = (-1273) - (mi)
      var mmm = mml + mi
      //console.log(mmm)
      div.style.marginLeft = mmm  + "px"
  
  }else{
    div.style.transitionDuration = "1s"
    let num = ml - 200
    let w = num + "px"
    div.style.marginLeft = w
  }
  }else{




if(ml <= -1100){
    var mi = parseInt(dive.getPropertyValue('margin-left'))
    
    var mml = (-1365) - (mi)
    var mmm = mml + mi
    
    div.style.marginLeft = mmm  + "px"

}else{
  div.style.transitionDuration = "1s"
  let num = ml - 300
  let w = num + "px"
  div.style.marginLeft = w
}

}}





function fun2(){
  
  let width = window.innerWidth

  const classones = document.getElementsByClassName("ones")
for (let i = 0; i < classones.length; i++) {
    classones[i].addEventListener("mouseover", function() {

      if(width <= 350 && width > 0){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1383px"
          classones[i].style.width = "200px"
          classones[i].style.background = "black"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1383px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1383px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 400 && width > 350 ){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1625px"
          classones[i].style.width = "200px"
          classones[i].style.background = "green"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1625px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1625px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 450 && width > 400){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1366px"
          classones[i].style.width = "200px"
          classones[i].style.background = "gray"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1366px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1366px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 500 && width > 450){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1520px"
          classones[i].style.width = "200px"
          classones[i].style.background = "yellow"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1520px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1520px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 550 && width > 500){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1373px"
          classones[i].style.width = "200px"
          classones[i].style.background = "#77777"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1373px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1373px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 600 && width > 550){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1495px"
          classones[i].style.width = "200px"
          classones[i].style.background = "#aaaa"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1495px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1495px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 650 && width > 600){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1617px"
          classones[i].style.width = "200px"
          classones[i].style.background = "green"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1617px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1617px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 700 && width > 650){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1345px"
          classones[i].style.width = "200px"
          classones[i].style.background = "yellow"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1345px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1345px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 750 && width > 700){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1438px"
          classones[i].style.width = "200px"
          classones[i].style.background = "orange"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1438px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1438px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 800 && width > 750){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1251px"
          classones[i].style.width = "200px"
          classones[i].style.background = "cyan"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1251px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1251px"
          classones[i].style.width = "200px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "200px"
  
         
      }

      }else if(width <= 850 && width > 800){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1376px"
          classones[i].style.width = "250px"
          classones[i].style.background = "violet"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1376px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1376px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "250px"
  
         
      }

      }else if(width <= 900 && width > 850){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1449px"
          classones[i].style.width = "250px"
          classones[i].style.background = "brown"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1449px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1449px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "250px"
  
         
      }

      }else if(width <= 950 && width > 900){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1515px"
          classones[i].style.width = "250px"
          classones[i].style.background = "red"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1515px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1515px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "250px"
  
         
      }

      }else if(width <= 1000 && width > 950){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1588px"
          classones[i].style.width = "250px"
          classones[i].style.background = "red"
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1588px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1588px"
          classones[i].style.width = "250px"
          classones[i].style.background = "blue"
        }
        
        }else{
        classones[i].style.background = "blue"
        classones[i].style.width = "250px"
  
         
      }

      }else{








      if(i === 15 || i === 31 || i === 47){
        if(i === 15){ 
        let mm = document.querySelector(".moo")
        mm.style.marginLeft =  "-1470px"
        classones[i].style.width = "250px"
        classones[i].style.background = "blue"
      }else if( i === 31){
        let mn = document.querySelector(".maa")
        mn.style.marginLeft =  "-1470px"
        classones[i].style.width = "250px"
        classones[i].style.background = "blue"
      }else if( i === 47){
        let mnm = document.querySelector(".mee")
        mnm.style.marginLeft =  "-1470px"
        classones[i].style.width = "250px"
        classones[i].style.background = "blue"
      }
      
      }else{
      classones[i].style.background = "blue"
      classones[i].style.width = "250px"

       
    }}})
    classones[i].addEventListener("mouseout", function() {


      if(width <= 350 && width > 0){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1275px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1275px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1275px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      
      
      }else if(width <= 400 && width > 350){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1533px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1533px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1533px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 450 && width > 400){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1260px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1260px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1260px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 500 && width > 450){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1427px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1427px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1427px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 550 && width > 500){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1273px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1273px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1273px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 600 && width > 550){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1405px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1405px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1405px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 650 && width > 600){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1539px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1539px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1539px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 700 && width > 650){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1250px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1250px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1250px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 750 && width > 700){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1352px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1352px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1352px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 800 && width > 750){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1155px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1155px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1155px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 850 && width > 800){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1234px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1234px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1234px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 900 && width > 850){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1318px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1318px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1318px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 950 && width > 900){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1390px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1390px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1390px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else if(width <= 1000 && width > 950){

        if(i === 15 || i === 31 || i === 47){
          if(i === 15){ 
          let mm = document.querySelector(".moo")
          mm.style.marginLeft =  "-1470px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1470px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1470px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }
        
        }else{
        classones[i].style.background = ""
        classones[i].style.width = ""
  
         
      }

      }else{





      if(i === 15 || i === 31 || i === 47){
        if(i === 15){
          let mmm = document.querySelector(".moo")
        mmm.style.marginLeft =  "-1365px"
        classones[i].style.width = ""
        classones[i].style.background = ""
        }else if( i === 31){
          let mn = document.querySelector(".maa")
          mn.style.marginLeft =  "-1365px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }else if( i === 47){
          let mnm = document.querySelector(".mee")
          mnm.style.marginLeft =  "-1365px"
          classones[i].style.width = ""
          classones[i].style.background = ""
        }

      }else{
      classones[i].style.background = ""
      classones[i].style.width = ""
}}})
}}










// let startX = 0;
// let offsetX = 0;


//   function fun3(e){

//     const classones = document.getElementsByClassName("ones")
//     let mm = document.querySelector(".moo")
//     startX = e.clientX;
//     offsetX = mm.offsetLeft;
//     //classones.style.cursor = "grabbing"
    
//     for (let i = 0; i < classones.length; i++) {
//       if(i < 16){
//     classones[i].addEventListener('mousemove', fun4)
//     classones[i].addEventListener('mouseup', fun5)

//     }else{
//       console.log("gggggdg")

//     }}}
  
  

//   function fun4(e){

//     let mm = document.querySelector(".moo")
//     let newX = e.clientX;
//     let moveX = newX - startX;
//     let newmove = offsetX + moveX
//     console.log(startX)
//     mm.style.marginLeft = newmove + "px";
  
//   }

  

//   function fun5(){
    
//     document.removeEventListener("mousemove", fun4);
//     document.removeEventListener("mouseup",  fun5);
    

//   }



function fun6(){
  let set2 = document.querySelector(".settwo")
  let set2top = set2.scrollTop
  
  let hvhv = document.getElementsByClassName("hvhv")
  for(var i = 0; i < hvhv.length ; i++){}
  if(set2top < 550 ){
    hvhv[0].style.background = "#414148"
    hvhv[1].style.background = ""
    hvhv[2].style.background = ""
    hvhv[3].style.background = ""
    hvhv[4].style.background = ""
    hvhv[5].style.background = ""
  }else if( set2top > 550 && set2top < 1100){
    hvhv[0].style.background = ""
    hvhv[1].style.background = "#414148"
    hvhv[2].style.background = ""
    hvhv[3].style.background = ""
    hvhv[4].style.background = ""
    hvhv[5].style.background = ""
  }else if( set2top > 1100 && set2top < 1650){
    hvhv[0].style.background = ""
    hvhv[1].style.background = ""
    hvhv[2].style.background = "#414148"
    hvhv[3].style.background = ""
    hvhv[4].style.background = ""
    hvhv[5].style.background = ""
  }else if( set2top > 1650 && set2top < 2200){
    hvhv[0].style.background = ""
    hvhv[1].style.background = ""
    hvhv[2].style.background = ""
    hvhv[3].style.background = "#414148"
    hvhv[4].style.background = ""
    hvhv[5].style.background = ""
  }else if( set2top > 2200 && set2top < 2750){
    hvhv[0].style.background = ""
    hvhv[1].style.background = ""
    hvhv[2].style.background = ""
    hvhv[3].style.background = ""
    hvhv[4].style.background = "#414148"
    hvhv[5].style.background = ""
   }else if( set2top > 2750 && set2top < 3300){
    hvhv[0].style.background = ""
    hvhv[1].style.background = ""
    hvhv[2].style.background = ""
    hvhv[3].style.background = ""
    hvhv[4].style.background = ""
    hvhv[5].style.background = "#414148"
   }
}




function fun7(){
  const set2 = document.getElementById('set2')
  set2.scrollTop = 0
}
function fun8(){
  const set2 = document.getElementById('set2')
 let width = window.innerWidth
   if(width < 879){
     set2.scrollTop = 540
   }else{
  set2.scrollTop = 615
}}
function fun9(){
  const set2 = document.getElementById('set2')
  let width = window.innerWidth
   if(width < 879){
     set2.scrollTop = 1060
   }else{
  set2.scrollTop = 1230
}}
function fun10(){
  const set2 = document.getElementById('set2')

  let width = window.innerWidth
   if(width < 879){
     set2.scrollTop = 1560
   }else{
  set2.scrollTop = 1845
}}
function fun11(){
  const set2 = document.getElementById('set2')
  let width = window.innerWidth
   if(width < 879){
     set2.scrollTop = 2100
   }else{
  set2.scrollTop= 2460
}}
function fun12(){
  const set2 = document.getElementById('set2')
  set2.scrollTop= 3075
}




function checkbox(){
  let toggle = document.getElementById("toggle")
  if(toggle.checked){
    document.getElementById("setp2").style.display = "block"
  }else{
    document.getElementById("setp2").style.display = "none"
  }








//   let toggle = document.getElementById("toggle")
//   let bulb = document.getElementById("bulbn")
//   let wire = document.getElementsByClassName("wire")
//   for(var i = 0; i< wire.length; i++)

//   wire[i].style.opacity = "1"
//     bulb.style.opacity = "1"

    

//   if(toggle.checked){
//    wire[0].style.height = "103px"
   
//    let onetime = setTimeout(function(a) {
//      wire[1].style.width = "103px"
     
//    }, 500);
//   }else{ notfun(); }


//    if(toggle.checked){

//    setTimeout(function(b) {
//     wire[2].style.height = "70px"
//     wire[2].style.top = "30px"
//    }, 1000);

//   }else{ notfun(); }
//   if(toggle.checked){

//    setTimeout(function(c) {
//     wire[3].style.width = "90px"
//    }, 1500);

//   }else{ notfun(); }
//   if(toggle.checked){


//    setTimeout(function(d) {
//     wire[4].style.height = "120px"
//    }, 2000);

//   }else{ notfun(); }
//   if(toggle.checked){


//    setTimeout(function(e) {
//     wire[5].style.width = "60px"
//    }, 2500);

//   }else{ notfun(); }
//   if(toggle.checked){


//    setTimeout(function(f) {
//     wire[6].style.height = "160px"
//     wire[6].style.bottom = "12px"
//    }, 3000);

//   }else{ notfun(); }
//   if(toggle.checked){

//    setTimeout(function(g) {
//     wire[7].style.width = "100px"
//    }, 3500);

//   }else{ notfun(); }
//   if(toggle.checked){

//    setTimeout(function(h) {
//     wire[8].style.height = "50px"
//    }, 4000);

//   }else{ notfun(); }
//   if(toggle.checked){

//    setTimeout(function(i) {
//     wire[9].style.width = "50px"
//    }, 4500);

//   }else{ notfun(); }
//   if(toggle.checked){

//    setTimeout(function(j) {
//     wire[10].style.height = "75px"
//    }, 5000);

//   }else{ notfun(); }
//   if(toggle.checked){

//    setTimeout(function(k) {
//     document.getElementById("bulbn").style.color = "#bbb8b8"
//    }, 5500);

//   }else{ notfun(); }

// }



//  function notfun(){


//   let wire = document.getElementsByClassName("wire")

//   let bulb = document.getElementById("bulbn")
//   let toggle = document.getElementById("toggle")
//   for(var i = 0; i< wire.length; i++){
//     wire[i].style.opacity = "0"
//     bulb.style.opacity = "0"
//   }
 
//      setTimeout(function() {
//       document.getElementById("bulbn").style.color = ""
//      }, 500);
     
//      setTimeout(function() {
//       wire[10].style.height = ""
//      }, 1000);

//      setTimeout(function() {
//       wire[9].style.width = ""
//      }, 1500);
      
//      setTimeout(function() {
//       wire[8].style.height = ""
//      }, 2000);

//      setTimeout(function() {
//       wire[7].style.width = ""
//      }, 2500);
      
//      setTimeout(function() {
//       wire[6].style.height = ""
//       wire[6].style.bottom = ""
//      }, 3000);

//      setTimeout(function() {
//       wire[5].style.width = ""
//      },3500);

//       setTimeout(function() {
//       wire[4].style.height = ""
//       }, 4000);

//       setTimeout(function() {
//         wire[3].style.width = ""
//       }, 4500);
      
//       setTimeout(function() {
//       wire[2].style.height = ""
//       wire[2].style.top = ""
//       }, 5000);
   
//       setTimeout(function() {
//         wire[1].style.width = ""
//       }, 5500);
      
//       setTimeout(function() {
//        wire[0].style.height = ""
//       }, 6000);


}

let prob = []


function problems(){

  

  let probs = document.getElementById("inprob")
  // let probsvalue = probs.value 
  prob.push(probs.value)
  console.log(prob)
  

  // localStorage.setItem('probs', prob)

}



// Retrieve the array from local storage
    // var retrievedProb = JSON.parse(localStorage.getItem('prob'));
        // Save the array to local storage
    // localStorage.setItem('prob', JSON.stringify(prob));




function probfocus1(){
  let inprob = document.getElementById("inprob")
  let probbtn = document.getElementById("probbtn")
  let  margintop = document.getElementById("margintop")
  let width = window.innerWidth
  if(width < 979){
    inprob.style.outline = "1px solid  rgb(0, 149, 255)"
  inprob.style.color = "#bbb8b8"
  probbtn.style.borderTop = "1px solid  rgb(0, 149, 255)"
  probbtn.style.borderRight = "1px solid  rgb(0, 149, 255)"
  probbtn.style.borderBottom = "1px solid  rgb(0, 149, 255)"
  probbtn.style.top = "14px"
  probbtn.style.height = "34px"
  margintop.style.marginTop = "-2px"

  }else{
  inprob.style.outline = "1px solid  rgb(0, 149, 255)"
  inprob.style.color = "#bbb8b8"
  probbtn.style.borderTop = "1px solid  rgb(0, 149, 255)"
  probbtn.style.borderRight = "1px solid  rgb(0, 149, 255)"
  probbtn.style.borderBottom = "1px solid  rgb(0, 149, 255)"
  probbtn.style.top = "-28px"
  probbtn.style.height = "34px"
  margintop.style.marginTop = "-2px"
}}


function probfocus2(){
  let inprob = document.getElementById("inprob")
  let  margintop = document.getElementById("margintop")
  let probbtn = document.getElementById("probbtn")
  inprob.style.outline = ""
  inprob.style.color = ""
  probbtn.style.borderTop = ""
  probbtn.style.borderRight = ""
  probbtn.style.borderBottom = ""
  probbtn.style.top = ""
  probbtn.style.height = ""
  margintop.style.marginTop = ""

}
    










    

    
   

