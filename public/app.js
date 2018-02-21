const app = function () {
  const url = "https://api.punkapi.com/v2/beers"
  requestBeerData(url, requestComplete);

  // const beerList = document.getElementById('beer-list');

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
  const beerArray = JSON.parse(jsonString);
  getBeerInfo(beerArray);
}

//Data handling
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
  imageItem.src = beer.image_url
  imageItem.height = 200;
  appendInfo(namePTag, imageItem)
}

const getBeerInfo = function(array){
  array.forEach(function(beer){
    populateBeerList(beer);
  });


}


document.addEventListener('DOMContentLoaded', app);
