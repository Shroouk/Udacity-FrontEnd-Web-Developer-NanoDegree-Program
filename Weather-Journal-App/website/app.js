/* Global Variables */
const apiKey  = '&appid=15a3bbc602aec5428aa4fbf45391d348&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let date = d.getDate() + '.'+ (d.getMonth() + 1 )+ '.' + d.getFullYear();


// our api key for OpenWeatherMap website
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';


//Adds an event listener to an HTML button witth id generate  and a named callback function
document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){

    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    if(newZip.length<4||feelings.length<3){
        alert('invalid field')
    }else{

    // const url = `${baseURL}${newZip}${apiKey}`;

    getWeather(baseURL,newZip,apiKey)

    .then(function(data){
        console.log(data);
        postData('http://localhost:8000/add',{date:date, temp:data.main.temp, content:feelings,name:data.name});
        updateUI();
    })

}
};


//get data from web api
const getWeather = async(baseURL,Zip,apiKey)=>{
    const res = await fetch(baseURL+Zip+apiKey);
    try{
        const data = await res.json();
        return data;
    }catch(error){
        console.log('Error ',error);
    }
}



//to post the data
const postData = async(url='',data={})=>{
    const response = await fetch(url,{
        method : 'post',
        credentials :'same-origin',
        headers :{
            'content-Type' : 'application/json',
        },
          // Body data type must match "Content-Type" header  
        body : JSON.stringify(data)
    });

    try{
        const newData = await response.json();
        return newDate;
    }catch(error){
        console.log('Error ',error);
    }
}


//updateui to display our data on the browser
const  updateUI = async ()=>{
    const request = await fetch('http://localhost:8000/all');
    try{
        const allData = await request.json();
        console.log(allData[0]);
        
        document.getElementById('date').innerHTML = 'Date: '+ allData[0].date;
        document.getElementById('name').innerHTML = 'Country: '+ allData[0].name;
        document.getElementById('temp').innerHTML = 'Temperature: '+ allData[0].temp;
        document.getElementById('content').innerHTML = 'I feel: '+ allData[0].content;
        document.getElementById('title').innerHTML  = 'Most Recent Entry';
       

            var x = document.getElementsByClassName('info');
            var i;
            for (i = 0; i < x.length; i++) 
            {
            x[i].className += ' list-group-item'; 
            }
        
    }catch(error){
        console.log('Error ',error);
    }
}




