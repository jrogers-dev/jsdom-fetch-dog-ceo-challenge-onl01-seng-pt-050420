console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let imageArray = [];

document.addEventListener(
  "DOMContentLoaded", 
  function(e) {
    let imageContainer = document.getElementById()
    
    
    
    fetch(imgUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.message.forEach(function(item) {
          imageArray.push(item);
        }) 
      })
    ;
  }
);