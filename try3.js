let my=[]
let input =document.getElementById("in")
let save=document.getElementById("save")
let del=document.getElementById("delete")
let sav=document.getElementById("savet")
const list=document.getElementById("list")
let led=JSON.parse(localStorage.getItem("my"))
if(led){
    my=led
    rend(my)
}
function rend(le){

    let listi=""
    for(i=0; i<le.length; i++){
       
        listi+=`<li>
        <a target=_blank href='"${le[i]}"'>${ le[i]}</a>
        </li>`
        
    }
    list.innerHTML=listi
}
let tab=[
    {url:"chrome://apps/"}
]
savet.addEventListener("click",function () {
    console.log(tab[0].url)
    my.push(tab[0].url)
    localStorage.setItem("my",JSON.stringify(my))
    rend(my)
})


del.addEventListener("dblclick",function(){
    console.log("ki")
   localStorage.clear()
   my=[]
   rend(my)
})
save.addEventListener("click",function(){
   
   my.push(input.value)
   input.value=""
   localStorage.setItem("my",JSON.stringify(my))
    rend(my)
   
    
})

