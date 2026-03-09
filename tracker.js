const allBtn = document.getElementById("all")
const openBtn = document.getElementById("open")
const closedBtn = document.getElementById("closed")
const issueCount = document.getElementById("allIssu")
let activeTab = "all"
function initial(){
    allBtn.classList.add("bg-purple-800","text-white")
}
initial()


function reset(){
allBtn.classList.remove("bg-purple-800","text-white")
openBtn.classList.remove("bg-purple-800","text-white")
closedBtn.classList.remove("bg-purple-800","text-white")
  document.getElementById("green").classList.add("hidden")
  document.getElementById("purple").classList.add("hidden")
}

allBtn.addEventListener("click",function(){
reset()
activeTab = "all"

  document.getElementById("green").classList.remove("hidden")
  document.getElementById("purple").classList.remove("hidden")
allBtn.classList.add("bg-purple-800","text-white")
loadData()
})

openBtn.addEventListener("click",function(){
reset()
spinner(true)
 activeTab = "open"

  document.getElementById("green").classList.remove("hidden") 


openBtn.classList.add("bg-purple-800","text-white")
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(json => {
            
            const openIssues = json.data.filter(issue =>
                issue.status=="open"
            );

            dispData({ data: openIssues });
            spinner(false)
        })
})

closedBtn.addEventListener("click",function(){
  
reset()
spinner(true)
activeTab = "closed"

  document.getElementById("purple").classList.remove("hidden") 
closedBtn.classList.add("bg-purple-800","text-white")

fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(res=>res.json())
.then(json=>{

const closedIssues = json.data.filter(issue =>
                issue.status === "closed"
            );

dispData({data:closedIssues})
spinner(false)

})
})
const spinner=(stat)=>{
  if(stat==true){
      document.getElementById("spin").classList.remove("hidden")
      document.getElementById("card-container").classList.add("hidden")
  }else{
    document.getElementById("spin").classList.add("hidden")
      document.getElementById("card-container").classList.remove("hidden")
  }
}


const loadDetail = async (id) => {
  const url =`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`

  const res=await fetch(url)
  const detail=await res.json()
  dispDetail(detail.data)
}
const dispDetail = (issue) => {

const detailContainer = document.getElementById("detail-container")

let statusColor = issue.status === "open"
? "bg-green-500"
: "bg-purple-800"

let priorityClass = ""

if(issue.priority==="low"){
priorityClass="text-gray-400 bg-gray-300 border border-gray-400 p-1"
}
else if(issue.priority==="medium"){
priorityClass="text-yellow-500 bg-yellow-100 border border-yellow-500 p-1"
}
else{
priorityClass="text-red-500 bg-red-100 border border-red-500 p-1"
}

const labels=issue.labels.map(label=>{

if(label==="bug"){
return `<div class="bg-red-100 border border-red-500 text-red-500 p-1 rounded-full text-sm">${label.toUpperCase()}</div>`
}

if(label==="help wanted"){
return `<div class="bg-yellow-100 border border-yellow-500 text-yellow-500 p-1  rounded-full text-sm">${label.toUpperCase()}</div>`
}

if(label==="enhancement" || label==="good first issue"){
return `<div class="bg-green-100 border border-green-500 text-green-500 p-1  rounded-full text-sm">${label.toUpperCase()}</div>`
}

if(label==="documentation"){
return `<div class="bg-blue-100 border border-blue-500 text-blue-500 p-1   rounded-full text-sm">${label.toUpperCase()}</div>`
}
}).join("")

detailContainer.innerHTML = `

<div class="space-y-3">

<h2 class="text-lg font-bold">
${issue.title}
</h2>

<div class="flex max-[510px]:flex-col gap-2 max-[510px]:gap-1 items-center max-[510px]:justify-start">

<button class="${statusColor} text-white px-2 py-1 rounded">
${issue.status}
</button>

<p>&nbsp - &nbsp ${issue.status} by ${issue.assignee ? issue.assignee : "Unassigned"}</p>

<p>&nbsp - &nbsp ${new Date(issue.updatedAt).toLocaleDateString()}</p>

</div>

<div class="flex gap-1 max-[510px]:flex-col">
${labels}
</div>


<div class="bg-gray-100 p-3  max-[510px]:p-2 flex justify-between items-center rounded-lg">

<div>
<p class="text-gray-400 text-sm">Assigned By:</p>
<p>${issue.assignee ? issue.assignee : "Unassigned"}</p>
</div>
<div>
<p class="text-gray-400 text-sm">Priority:</p>
<p class="${priorityClass} rounded-full text-sm">${issue.priority.toUpperCase()}</p>
</div>



</div>

</div>

`

document.getElementById("my_modal_1").showModal()

}


const loadData=()=>{
  spinner(true)
    const url= "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
      dispData(json)
      spinner(false)
    })
    
}
const container=document.getElementById("card-container")

const dispData=(issues)=>{
  
    issueCount.innerText = issues.data.length + " Issues"
container.innerHTML=""

issues.data.forEach(issue=>{

let priorityClass=""
let priorityText=""

if(issue.priority==="low"){
priorityClass="bg-gray-200 text-gray-400 border border-gray-400"
priorityText="LOW"
}
else if(issue.priority==="medium"){
priorityClass="bg-yellow-100 text-yellow-500 border border-yellow-500"
priorityText="MEDIUM"
}
else{
priorityClass="bg-red-100 text-red-500 border border-red-500"
priorityText="HIGH"
}


let borderColor = issue.status==="closed"?  "border-purple-800":  "border-green-500"

let statusIcon=issue.status==="closed"?"Closed-Status":"Open-Status"

const labels=issue.labels.map(label=>{

if(label==="bug"){
return `<div class="bg-red-100 border border-red-500 text-red-500 p-1 rounded-full text-sm">${label.toUpperCase()}</div>`
}

if(label==="help wanted"){
return `<div class="bg-yellow-100 border border-yellow-500 text-yellow-500 p-1  rounded-full text-sm">${label.toUpperCase()}</div>`
}

if(label==="enhancement" || label==="good first issue"){
return `<div class="bg-green-100 border border-green-500 text-green-500 p-1  rounded-full text-sm">${label.toUpperCase()}</div>`
}

if(label==="documentation"){
return `<div class="bg-blue-100 border border-blue-500 text-blue-500 p-1   rounded-full text-sm">${label.toUpperCase()}</div>`
}
}).join("")

const div=document.createElement("div")

div.innerHTML=`

<div onclick="loadDetail(${issue.id})" class="bg-white p-2 m space-y-1 border-t-4 ${borderColor} rounded-lg m-1 min-h-[280px] mb-5 max-[510px]:mb-3 shadow-sm">

<div class="flex justify-between items-center">

<img src="assets/${statusIcon}.png">

<div class="${priorityClass} px-3 py-1 rounded-full text-sm">
${priorityText}
</div>

</div>

<h2 class="font-semibold text-gray-700">
${issue.title}
</h2>

<p class="text-gray-400 text-sm">
${issue.description}
</p>

<div class="flex max-[510px]:flex-col gap-1">
${labels}
</div>

<hr class="text-gray-400 mt-2">

<div class="my-1 bg-white p-2 text-sm text-gray-400  rounded-b-lg">
<p>#${issue.id} by ${issue.author}</p>
<p>${new Date(issue.createdAt).toLocaleDateString()}</p>
</div>

</div>


`

container.appendChild(div)

})


}

loadData()
document.getElementById("search-btn").addEventListener("click", () => {

const input = document.getElementById("search-in")
const value = input.value.trim()

if(value === "") return

spinner(true)

const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${value}`

fetch(url)
.then(res => res.json())
.then(data => {

let result = data.data

if(activeTab === "open"){
result = result.filter(issue => issue.status === "open")
}

if(activeTab === "closed"){
result = result.filter(issue => issue.status === "closed")
}

dispData({data: result})
spinner(false)

})

})
document.getElementById("search-in").addEventListener("keypress", (e)=>{
  if(e.key === "Enter"){
    document.getElementById("search-btn").click()
  }
})