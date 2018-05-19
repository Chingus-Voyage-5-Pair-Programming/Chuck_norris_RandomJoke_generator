// this should be fun

$.ajax({
  url: 'https://api.chucknorris.io/jokes/random',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
