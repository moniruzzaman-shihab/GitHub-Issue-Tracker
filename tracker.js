const allBtn = document.getElementById("all")
const openBtn = document.getElementById("open")
const closedBtn = document.getElementById("closed")
function initial(){
    allBtn.classList.add("bg-purple-800","text-white")
}
initial()

function reset(){
allBtn.classList.remove("bg-purple-800","text-white")
openBtn.classList.remove("bg-purple-800","text-white")
closedBtn.classList.remove("bg-purple-800","text-white")
}

allBtn.addEventListener("click",function(){
reset()
allBtn.classList.add("bg-purple-800","text-white")
})

openBtn.addEventListener("click",function(){
reset()
openBtn.classList.add("bg-purple-800","text-white")
})

closedBtn.addEventListener("click",function(){
reset()
closedBtn.classList.add("bg-purple-800","text-white")
})