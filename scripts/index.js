let display_text = "";
let display_area = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(button.innerText=="C"){
            display_text="";
            display_area.innerText=display_text

        }
        else if(button.innerText!="="){
        display_text+=button.innerText
        display_area.innerText=display_text
        }
        else if(button.innerText=="="){
            display_area.innerText=eval(display_text)
        }
       
    })
})