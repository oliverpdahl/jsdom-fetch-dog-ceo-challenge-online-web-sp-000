function challenge1(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    imageContainer = document.getElementById('dog-image-container')
    for (const url of json.message){
      img = document.createElement('img')
      img.src = url
      imageContainer.appendChild(img)
    }
  })
}

function challenge2(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    dogBreedsUl = document.getElementById('dog-breeds')
    breeds = json.message
    console.log(breeds)
    for (breed in breeds) {
      for (subbreed of breeds[breed]){
        const li = document.createElement('li')
        li.innerText = makeBreedText(breed, subbreed);
        dogBreedsUl.appendChild(li);
      }
    }
  })

  function makeBreedText(breed, subbreed){
    if(subbreed){
      return `${subbreed} ${breed}`
    } else {
      return breed
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  challenge1();
  challenge2();
});
