console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let imageArray = [];

document.addEventListener(
  "DOMContentLoaded", 
  function(e) {
    fetch(imgUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.message
      })
    ;
  }
);