function challenge1(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    imageContainer = document.getElementById('dog-image-container')
    for (const url of json.message){
      console.log(url)
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  challenge1()
});
