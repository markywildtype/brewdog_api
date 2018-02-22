const app = function () {
  const url = "https://api.punkapi.com/v2/beers"
  requestBeerData(url, requestComplete);

  const savedBeerJSON = localStorage.getItem('All beers');
  const savedBeerArray = JSON.parse(savedBeerJSON);

//beer picker dropdown
  const beerPicker = function(){
    savedBeerArray.forEach(function(beer){
      const beerList = document.getElementById('beer-list');
      if(beer.name === this.value){
        beerList.innerHTML = " ";
        populateBeerList(beer);
        console.log(beer);
        populateBeerDetails(beer);
      } else if(this.value === "All our beers"){
        document.location.reload(false);
      }
    }.bind(this));
  }

  const selectBeer = document.querySelector('#choose-beer');
  selectBeer.addEventListener('change', beerPicker)
};


//API Request Handling:
const requestBeerData = function(url, callback){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  localStorage.setItem('All beers', jsonString);
  const beerArray = JSON.parse(jsonString);
  getBeerInfo(beerArray);
  populateSelector(beerArray);
}

//Data display handling
const appendInfo = function(name, image){
  const beerList = document.getElementById('beer-list');
  const beerArticle = document.createElement('article');
  beerArticle.appendChild(name);
  beerArticle.appendChild(image);
  beerList.appendChild(beerArticle);
}

const populateBeerList = function(beer){
  const namePTag = document.createElement('p');
  namePTag.innerText = beer.name;
  const imageItem = document.createElement('img');
  imageItem.src = beer.image_url;
  imageItem.alt = beer.name;
  imageItem.height = 200;
  appendInfo(namePTag, imageItem)
}

const getBeerInfo = function(array){
  array.forEach(function(beer){
    populateBeerList(beer);
  });
}

// Selector
const populateSelector = function(array){
  const selectBeer = document.getElementById('choose-beer');
  array.forEach(function(item, index){
    const option = document.createElement('option');
    option.innerText = item.name;
    selectBeer.appendChild(option);
  });
}

//Beer details
const populateBeerDetails = function(beer){
  console.log("Here be beer!");
  const detailsArticle = document.createElement('article');
  // detailsArticle.classlist.add('individual-details')
  const beerList = document.getElementById('beer-list');
  const pDescription = document.createElement('p');
  pDescription.innerText = beer.description;
  //create a ul element
  //create li elements for ingredients
  //add list items with beer attributes
  //append list items to ul
  //append ul to detailsArticle
  detailsArticle.appendChild(pDescription)
  beerList.appendChild(detailsArticle);
  // beerList.appendChild(detailsArticle);
}




document.addEventListener('DOMContentLoaded', app);
