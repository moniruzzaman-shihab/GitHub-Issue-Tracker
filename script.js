const username=document.getElementById("username")
const password=document.getElementById("password")
const loginBtn=document.getElementById("loginBtn")

loginBtn.addEventListener("click",function(){

if(username.value==="admin" && password.value==="admin123"){
location.assign("tracker.html")
}
else{
    alert("Enter a valid username or password.")
}

})