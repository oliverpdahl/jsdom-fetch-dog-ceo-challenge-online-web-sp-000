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
    for (breed in breeds) {
      if (breeds[breed].length != 0){
        for (subbreed of breeds[breed]){
          makeBreedLi(breed, subbreed)
        }
      } else {
        makeBreedLi(breed, '')
      }
    }
  challenge3();
  })

  function makeBreedText(breed, subbreed){
    return `${subbreed} ${breed}`
  }

  function makeBreedLi(breed, subbreed){
    const li = document.createElement('li')
    li.className = 'dog-breed-li'
    if(breed == 'australian'){
      li.id = 'super-breed'
    }
    if(subbreed != ''){
      li.innerText = makeBreedText(breed, subbreed);
    } else {
      li.innerText = `${breed}`
    }
    dogBreedsUl.appendChild(li);
  }
}

function challenge3(){
  let li = document.getElementById('super-breed')
  li.addEventListener('click', function(event){
    console.log('clicked')
    li.style.color = "red";
  })
}

function challenge4(){
  selector = document.querySelector('select')
  selector.addEventListener('change', function(event){
    console.log('changed')
  })
}

document.addEventListener("DOMContentLoaded", function() {
  challenge1();
  challenge2();
  //challenge3(); CALLED IN challenge2
  challenge4
});
