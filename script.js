let input = document.querySelector("#inputtext");
let button = document.querySelector(".buttonclass")
button.addEventListener("click",()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=bee24b72d8d919f70f51c41a942074a9`)
    .then((res)=>res.json())

    .then((data)=>{
     console.log(data)
     let result =` <div class='city'>
     <h2>${data.name}</h2> 
     <h1>${Math.floor(data["main"].temp - 273)}°c</h1>
     </div>
    <div class='city'>
     <h2>Humidity - ${data["main"].humidity}%</h2> 
     <h2>Wind - ${data["wind"].speed}m/s</h2>
     </div>
     <div class='city'>
     <h2>Visibility - ${(data.visibility)/1000}km</h2> 
     <h1>${data["weather"][0].main}</h1>
     </div>`
    let container = document.querySelector(".container")
    container.innerHTML = result

    }).catch((error)=>alert("error"))


})
