 
function calculate(num){
    document.getElementById("input").innerHTML +=num
    
}
function compute(){
    let x = document.getElementById("input").innerHTML
    let y = eval(x)
    document.getElementById("input").innerHTML = y;       
   var history = document.getElementById("history").innerHTML += x + "</br>" + "= " + y  + "<br/>";
}
 function clrall(){
    document.getElementById("input").innerHTML=" "
    document.getElementById("history").innerHTML=" "
}
function clr(){
    num = document.getElementById("input").innerHTML ;
    document.getElementById("input").innerHTML = num.substr(0,num.length -1);
 }
 
//  DARK MODE TOGGLE
 const myMove = ()=>{
    console.log("my name")
    const play = document.querySelector(".darkOrLight")
    const main = document.getElementById("main")
                play.classList.toggle("move");
                main.classList.toggle("dark");
                document.getElementById("input").style.color = "#fff"
     const drop = document.querySelectorAll(".drop");
            drop.classList.toggle("bright")

}