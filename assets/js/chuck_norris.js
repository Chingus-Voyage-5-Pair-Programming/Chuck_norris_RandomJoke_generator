
// create a variable for the joke-btn 
//may need to review this idea
var btn = document.getElementById("joke-btn");

var randomJoke = '';
// this should be fun

var humbleRequest = new XMLHttpRequest();
humbleRequest.open('GET', 'https://api.chucknorris.io/jokes/random');
humbleRequest.onload = function(){
var humbleData = JSON.parse(humbleRequest.responseText);

randomJoke = humbleData.value;
// $('.joke-to-change').html(randomJoke); next move
// console.log(humbleData.value);

document.getElementById('joke-to-change').innerHTML = randomJoke;
    
};
humbleRequest.send();


// Begin accessing JSON data here



// $.ajax({
//   url: 'https://api.chucknorris.io/jokes/random',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });
// 