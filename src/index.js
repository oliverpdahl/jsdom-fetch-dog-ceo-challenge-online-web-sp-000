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
      if (breeds[breed].length != 0){
        for (subbreed of breeds[breed]){
          makeBreedLi(breed, subbreed)
        }
      } else {
        makeBreedLi(breed, '')
      }
    }
  })

  function makeBreedText(breed, subbreed){
    return `${subbreed} ${breed}`
  }

  function makeBreedLi(breed, subbreed){
    const li = document.createElement('li')
    li.class = 'dog-breed-li'
    if(subbreed != ''){
      li.innerText = makeBreedText(breed, subbreed);
    } else {
      li.innerText = `${breed}`
    }
    dogBreedsUl.appendChild(li);
  }
}

function challenge3(){
  allBreedLi = document.getElementsbyClass('dog-breed-li')
  chossenLi = allBreedLi[5]
  chossenLi.addEventListener('click', function(){
    chossenLi.style.color = "red";
  })
}

document.addEventListener("DOMContentLoaded", () => {
  challenge1();
  challenge2();
});
