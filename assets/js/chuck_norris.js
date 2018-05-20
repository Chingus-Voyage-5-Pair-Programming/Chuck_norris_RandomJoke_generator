// this should be fun
var humbleRequest = new XMLHttpRequest();
humbleRequest.open('GET', 'https://api.chucknorris.io/jokes/random');
humbleRequest.onload = function(){
    var humbleData = JSON.parse(humbleRequest.responseText);
    console.log(humbleData.value);
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
