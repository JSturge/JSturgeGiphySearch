//clear

function clear() {
  
  var container = document.querySelector(".searchResults");
  
  container.innerHTML = "";
}

//input

document.querySelector(".search").addEventListener("click", function() {

  var input = document.querySelector("input").value;

  clear();
  showResults(input);

});

document.querySelector(".userInput").addEventListener("keyup", function(e) {

  var input = document.querySelector("input").value;

  if (e.which === 13) {

    clear();
    showResults(input);

  }

});

//Show GIFs

var showResults = function(input) {

  var url = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";

  var callGiphy = new XMLHttpRequest();
  callGiphy.open("GET", url);
  callGiphy.send();

  callGiphy.addEventListener("load", function(e) {

    var data = e.target.response;
    showResults(data);
  });

  var response = JSON.parse(input);
  var imageURL = response.data;

  imageURL.forEach(function(image) {
    
    var src = image.images.fixed_width.url;
    var gifContainer = document.querySelector(".searchResults");
    
    gifContainer.innerHTML += "<img src=\"" + src + "\" class=\"gifs\">";

  });

};