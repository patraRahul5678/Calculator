let display=document.querySelector(".display");

let buttons=document.querySelectorAll("button")
let string="";

buttons.forEach(choice=>{
    choice.addEventListener("click",(e)=>{
        if(e.target.innerText == "="){
            display.innerText = eval(string)
        }
        else if(e.target.innerText == "C"){
            string=""
            display.innerText=string
        }
        else if(e.target.innerText == "DEL"){
            string=string.substring(0,string.length-1)
            display.innerText=string;
        }
        else{
            string=string+e.target.innerText
            display.innerText=string;
        }
    })
})