console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener(
  "DOMContentLoaded", 
  function(e) {
    let imageContainer = document.getElementById("dog-image-container");
    
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
        }) 
      })
    ;
  }
);