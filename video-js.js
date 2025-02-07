var btn = document.querySelector("#btn")
var body = document.querySelector("body")
var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0) {
        body.style.backgroundColor = "white"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        btn.innerHTML = "Night mode"
        flag = 1
    }
    else{
        body.style.backgroundColor = "black"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        btn.innerHTML = "Day mode"
        flag = 0
    }
})