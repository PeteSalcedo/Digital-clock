function bigben(){

const fullDate = new Date();

 let hours = fullDate.getHours();
 let mins = fullDate.getMinutes();
 let secs = fullDate.getSeconds();

 if(hours < 10){
     hours = '0' + hours;
 }


 if(mins < 10){
    mins = '0' + mins;
}

if(secs < 10){
    secs = '0' + secs;
}
 
document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ": " + mins + " : ";
document.getElementById('second').innerHTML = secs;

}

setInterval(bigben,1000); 

let apikey = "";
const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;

async function getImage(url){
  const response = await fetch(url);
  let data = await response.json()
  console.log(data.url)
  if(data.url !== ''){
    document.getElementById('imageofday').src= data.url
  }
}

getImage(url)