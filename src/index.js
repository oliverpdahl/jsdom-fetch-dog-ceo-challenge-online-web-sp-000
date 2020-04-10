let dogBreeds = [];

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

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    breeds = json.message
    listBreeds(breeds);
    challenge3();
  })

  function makeBreedText(breed, subbreed){
    return `${subbreed} ${breed}`
  }

  function listBreeds(breeds){
    dogBreedsUl = document.getElementById('dog-breeds')
    dogBreeds.innerHTML = ''
    for (breed in breeds) {
      if (breeds[breed].length != 0){
        for (subbreed of breeds[breed]){
          makeBreedLi(breed, subbreed, breeds)
        }
      } else {
        makeBreedLi(breed, '', breeds)
      }
    }
  }

  function makeBreedLi(breed, subbreed, breeds){
    const li = document.createElement('li')
    if(breed == 'australian'){
      li.id = 'super-breed'
    }
    if(subbreed == ''){
      text = `${breed}`
    } else {
      text = makeBreedText(breed, subbreed);
    }
    li.innerText = text
    dogBreeds.push(text)
    dogBreedsUl.appendChild(li);
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
    selected = event.target.value
    newBreedsArray = []
    for (breed of dogBreeds){
      console.log(dogBreeds)
    }
  })
}

document.addEventListener("DOMContentLoaded", function() {
  challenge1();
  //challenge3(); CALLED IN challenge2
  challenge4();
});
