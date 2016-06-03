var urlAddress = "http://codepen.io/popolzooon/full/ONWXdm/";
  
function getRandomColor() {
    var letters = '6789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 10)];
    }
 return color;
}
var RandomColor= getRandomColor();

document.body.style.backgroundColor = RandomColor;
document.getElementById("twitterButton").style.backgroundColor = RandomColor;
document.getElementById("facebookButton").style.backgroundColor = RandomColor;
document.getElementById("getQuoteButton").style.backgroundColor = RandomColor;
document.getElementById("ContentText").style.color = RandomColor;

document.getElementById("ContentText").style.fontSize = "large";

$.getJSON("http://api.icndb.com/jokes/random", function(data) {
var jokeText = JSON.stringify(data.value.joke);
$(".message").html("<h3>"+jokeText+"</h3>");
var twitterLink = "https://twitter.com/intent/tweet?text="+jokeText+""+urlAddress;
var facebookLink= "https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&quote="+jokeText+"&href="+urlAddress;
$("a#twitterButton").attr('href', twitterLink);
$("a#facebookButton").attr('href', facebookLink);


}
          )

$("#getQuoteButton").on("click", function() {
  $.getJSON("http://api.icndb.com/jokes/random", function(data) {

  var jokeText = JSON.stringify(data.value.joke);
$(".message").html("<h3>"+jokeText+"</h3>");
var twitterLink = "https://twitter.com/intent/tweet?text="+jokeText+""+urlAddress;
var facebookLink= "https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&quote="+jokeText+"&href="+urlAddress;
$("a#twitterButton").attr('href', twitterLink);
$("a#facebookButton").attr('href', facebookLink);

var RandomColor= getRandomColor();

document.body.style.backgroundColor = RandomColor;
document.getElementById("twitterButton").style.backgroundColor = RandomColor;
document.getElementById("facebookButton").style.backgroundColor = RandomColor;
document.getElementById("getQuoteButton").style.backgroundColor = RandomColor;
document.getElementById("ContentText").style.color = RandomColor;
                }
               )
  });
