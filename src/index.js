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
  })

  function makeBreedText(breed, subbreed){
    return `${subbreed} ${breed}`
  }

  // function makeBreedArray(breed, subbreed){
  //   const li = document.createElement('li')
  //   li.className = 'dog-breed-li'
  //   if(breed == 'australian'){
  //     li.id = 'super-breed'
  //   }
  //   if(subbreed != ''){
  //     text = makeBreedText(breed, subbreed);
  //   } else {
  //     text = `${breed}`
  //   }
  //   li.innerText = text
  //   dogBreeds.push(text)
  //   dogBreedsUl.appendChild(li);
  // }

  function listBreeds(breeds){
    dogBreedsUl = document.getElementById('dog-breeds')
    dogBreeds.innerHTML = ''
    for (breed in breeds) {
      if (breeds[breed].length != 0){
        for (subbreed of breeds[breed]){

        }
      } else {
        const li = document.createElement('li')

        li.innerText = text
        dogBreeds.push(text)
        dogBreedsUl.appendChild(li);
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
  })
}

document.addEventListener("DOMContentLoaded", function() {
  challenge1();

  //challenge3(); CALLED IN challenge2
  challenge4();
});
