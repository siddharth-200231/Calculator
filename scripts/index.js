let display_text=""
let display_area=document.querySelector(".display")
let btn=document.getElementsByTagName("button")
btn.addEventListener('click',()=>{
    display_text+=btn.innerText;
    display_area.innerHTML=`<p>${display_text}</p>`
})