function challenge1(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .this(function(response){
    response.json
  })
  .this(function(json){
    console.log(json)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  challenge1()
});
