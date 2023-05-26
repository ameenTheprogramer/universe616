

var takeoffinter;
var after =  setTimeout(after , 10000);

function f1(){
    // console.log(99999999);
    clearTimeout(f1 , 10000)
    let r = document.getElementById("rocket")
    let s = document.getElementById("s1")
    r.style.top = "-108%"
    r.style.left = "75.7%"
    s.style.display = "block"
    s.style.animation = "movesideways3 150ms linear infinite"
    document.getElementById("rocket").style.animation = "movesideways 150ms linear infinite"
    document.removeEventListener("mousedown", f1)
    document.addEventListener("mousedown", f2)
    let takeoffinter = setTimeout(takeoff , 5000)
    document.addEventListener("mousedown", function(){
        clearTimeout(takeoffinter)
        document.removeEventListener("mousedown", f2)
        // console.log(77777777);
    })

    
    
}
function takeoff(){
    f2();
    clearTimeout(takeoffinter)
    clearTimeout(takeoff , 5000)
    // console.log(000000000);
}
function f2 (){
    clearTimeout(takeoff , 5000)
    clearTimeout(takeoffinter)
    // console.log(888888);
    document.removeEventListener("mousedown", f2)
    document.getElementById("rocket").style.animation = "takeoff 5s linear "
    let s = document.getElementById("s1")
    let rocket = document.getElementById("rocket")
    s1.src = "ps/flame.png"
    s1.style.top = "-31px"
    s1.style.left = "30px"
    s1.style.animation = "movesideways2 150ms linear infinite"

    
   

}


// function after(){
//     clearTimeout(after)
//     clearTimeout(after, 10000)
//     let rocket = document.getElementById("rocket")
//     rocket.style.transitionDuration = "10000ms"
//     rocket.style.top = "-87%" 
//     rocket.style.left = "8.7%" 
//     rocket.style.transform = `rotate(-90deg)` 
//     rocket.style.animation = " nothing 1s "


// }


function f3(){
    let rocket = document.getElementById("rocket")
    rocket.style.top = "-126%"
    rocket.style.left = "64.7%"
    rocket.style.transform = `rotate(-70deg)`
    rocket.style.animationPlayState = 'paused';

    f4();
}
function f4(){
    let rocket = document.getElementById("rocket")
    rocket.style.animation = "nothing 10s linear 1"
    rocket.style.transform = `rotate(-133deg)`
    rocket.style.top ="-81%"
    rocket.style.left ="4.7%"
    // rocket.style.transform =""  
  
}



function f5(){
    let scrollv = document.documentElement.scrollTop 
    console.log(scrollv);
    let rocket = document.getElementById("rocket")

    if(rocket.style.top === "-81%" || rocket.style.left === "4.7%"){
        let num = parseInt(rocket.style.top)

        let scroll = scrollv -700
    if(rocket.style.left >= "76.8%"){
        rocket.style.transform = ""
            rocket.style.top = ""
            rocket.style.transitionDuration =  ""
    }else{

        if(scroll < num){
            rocket.style.transform = `rotate(-313deg)`
            rocket.style.top = scroll + "px"
            rocket.style.transitionDuration =  "10ms"
        }else{
            rocket.style.transform = `rotate(-133deg)`
            rocket.style.top = scroll + "px"
            rocket.style.transitionDuration =  "10ms"
  
        }}}

   if(scrollv <= 6500 && scrollv >= 6000 ){
    document.documentElement.scrollTop  = 6255
    document.body.style.scrollBehavior = "smooth"
    // setInterval(changetext , 1000)
    // setInterval(changetext2 , 2000)

   }
   else if(scrollv <= 7000 && scrollv >= 6700) {
    document.documentElement.scrollTop  = 6856
    document.body.style.scrollBehavior = "smooth"
   }else if (scrollv <= 7551 && scrollv >= 7550){
rocket.style.transitionDuration = "5s"

}else if (scrollv <= 9461 && scrollv >= 7552) {
        rocket.style.top = 7551 - 700 + "px"
        rocket.style.transform = `rotate(-222deg)`
    document.addEventListener("dblclick", land)

        if(rocket.style.top === "6851px"){
            document.getElementById("btn3").style.display = "block"
        document.getElementById("line3").style.display = "block"
        document.getElementById("line3").style.animation = " length2 4s ease-out infinite"
    document.getElementById("btn3").style.animation = "blink 2s ease-out infinite"

        }else{

        }
}else{
    document.getElementById("line3").style.animation = "length2e 4s ease-out infinite"
    document.getElementById("btn3").style.animation = "length2e 4s ease-out infinite"

}
    // }else if (scrollv <= 7800 && scrollv >= 7300){
    // document.documentElement.scrollTop  = 7551
        
    //     }
// if(rocket.style.animation === "land"){}???????????????????????
   
}

// function changetext(){
//     document.getElementById("btn").innerText = "Click Here to"
// }
// function changetext2(){
//     document.getElementById("btn").innerText = "Land on Earth"
// }
    


function dust2() {
    let dt1 = document.getElementById("dt1")
    let dt2 = document.getElementById("dt2")
    let dt3 = document.getElementById("dt3")
    let dt4 = document.getElementById("dt4")
    let dt5 = document.getElementById("dt5")
    let dt6 = document.getElementById("dt6")
    let dt7 = document.getElementById("dt7")
    let dt8 = document.getElementById("dt8")
    let dt9 = document.getElementById("dt9")
    let dt10 = document.getElementById("dt10")
    let math = Math.floor(Math.random()*10)
    // console.log(math);

    if(math === 0){
        dt1.style.animation = "dt1 10s linear infinite"
    }else if(math === 1){
        dt2.style.animation = "dt2 10s linear infinite"
    }else if(math === 2){
        dt3.style.animation = "dt3 10s linear infinite"
    }else if(math === 3){
        dt4.style.animation = "dt4 10s linear infinite"
    }else if(math === 4){
        dt5.style.animation = "dt5 10s linear infinite"
    }else if(math === 5){
        dt6.style.animation = "dt6 10s linear infinite"
    }else if(math === 6){
        dt7.style.animation = "dt7 10s linear infinite"
    }else if(math === 7){
        dt8.style.animation = "dt8 10s linear infinite"
    }else if(math === 8){
        dt9.style.animation = "dt9 10s linear infinite"
    }else if(math === 9){
        dt10.style.animation = "dt10 10s linear infinite"
    }
    
}



function gotoearth(){
    document.documentElement.scrollTop = 7551

}

function gotospace(){
    document.documentElement.scrollTop = 5998
}

function land(){
    document.getElementById("rocket").style.animation = "land 10s linear 1"
    document.getElementById("rocket").addEventListener("animationstart", landing)
    document.getElementById("rocket").addEventListener("animationend", landed)
}

function landing(){
    document.getElementById("btn3").style.animation = "none"
    document.getElementById("btn3").style.display = "none"
    document.getElementById("line3").style.animation = "none"
    document.getElementById("line3").style.display = "none"
}

function landed(){
    document.getElementById("line3").style.display = "none"
    document.getElementById("btn3").style.display = "block"
    document.getElementById("line3").style.animation = "none"
    document.getElementById("btn3").innerText = "Take off"
    document.getElementById("btn3").onclick = "take()"
    document.getElementById("btn3").addEventListener("click",take)
    document.addEventListener("dblclick", take)
    document.removeEventListener("dblclick", land)




    document.getElementById("rocket").style.transform = "rotate(-332deg)"
    document.getElementById("rocket").style.left = "8.7%"
    document.getElementById("rocket").style.top = "7000px"
    document.getElementById("rocket").style.animation = "none"
    document.getElementById("s1").style.display = "none"


    document.getElementById("rocket").removeEventListener("animationend", landed)
    document.getElementById("rocket").addEventListener("animationend", took )



}

function take(){
    document.getElementById("rocket").style.animation = "take 10s linear 1"
    document.getElementById("s1").style.display = "block"
    document.getElementById("rocket").addEventListener("animationend", took )


}
function took (){
    document.getElementById("rocket").removeEventListener("animationend", took )
    document.getElementById("rocket").addEventListener("animationend", landed)

    
    document.getElementById("rocket").style.transform = "rotate(-313deg)"
    document.getElementById("rocket").style.left = "4.7%"
    document.getElementById("rocket").style.top = "6851px"
    document.getElementById("rocket").style.animation = "none"
    document.getElementById("s1").style.display = "block"


    document.getElementById("rocket").style.animation = "none"

    document.getElementById("btn3").style.animation = ""
    document.getElementById("btn3").style.display = "block"
    document.getElementById("line3").style.animation = ""
    document.getElementById("line3").style.display = "block"

    document.getElementById("btn3").innerText = "land"
    document.getElementById("btn3").onclick = "land"
    document.getElementById("btn3").addEventListener("click", land)
    document.addEventListener("dblclick", land)
    document.removeEventListener("dblclick", take)




    
    


    }