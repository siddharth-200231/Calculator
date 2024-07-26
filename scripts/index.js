let val=document.querySelector('.cart')
no=0
let btn=document.querySelector('#add')
btn.addEventListener("click",(l)=>{
    val.innerHTML=`${no+=1}`
})
let wish=document.querySelector("#wishlist").addEventListener("click",()=>{
    if(no>=1){
        val.innerHTML=`${no-=1}`
    }

})