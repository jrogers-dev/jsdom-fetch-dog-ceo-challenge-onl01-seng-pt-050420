console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener(
  "DOMContentLoaded", 
  function(e) {
    let imageContainer = document.getElementById("dog-image-container");
    let breedContainer = document.getElementById("dog-breeds");
    
    fetch(imgUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.message.forEach(function(item) {
          let image = document.createElement("IMG");
          image.src = item;
          imageContainer.appendChild(image);
          imageContainer.appendChild(document.createElement("BR"));
        }); 
      })
    ;
    
    fetch(breedUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        for(var key in data.message) {
          console.log(data.message[key]);
        }
      })
    ;
  }
);