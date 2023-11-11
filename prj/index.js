let temperature=document.getElementById('temperature')
let city=document.getElementById('city')
let cityname=document.getElementById('cityname')
let submit=document.getElementById('submit')
let search=async()=>{
   if(cityname.value==""){
    alert('please enter the city name')
   }
//    else if(data.code==404){
//     alert("City not found")}
   
   
   else{
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
   let response= await fetch(url)
   let data=await response.json()
   temperature.textContent=data.main.temp

   city.textContent=`${cityname.value},${data.sys.country}`
  
   }
}