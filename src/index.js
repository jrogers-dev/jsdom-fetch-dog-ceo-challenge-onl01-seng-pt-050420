console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener(
  "DOMContentLoaded", 
  function(e) {
    console.log(fetch(url)
      .then(function(response) {
          return response.json();
        }
      )
    );
  }
);