document.getElementById("btn").addEventListener("click",function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {console.log(data)
        document.getElementById("activity-name").textContent = data.activity})
        document.getElementById("title").textContent = "HappyRoBoT"
        document.body.classList.add("fun");
})



