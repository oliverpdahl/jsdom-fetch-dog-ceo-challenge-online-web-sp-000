function challenge1(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    response.json
  })
  .then(function(json){
    console.log(json)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  challenge1()
});
