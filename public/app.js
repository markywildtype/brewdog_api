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
  beerList.appendChild(name);
  beerList.appendChild(image);
}

const populateBeerList = function(beer){
  const nameLi = document.createElement('li');
  nameLi.innerText = beer.name;
  const imageLi = document.createElement('img');
  imageLi.src = beer.image_url
  imageLi.height = 200;
  appendInfo(nameLi, imageLi)
}

const getBeerInfo = function(array){
  array.forEach(function(beer){
    populateBeerList(beer);
  });


}


document.addEventListener('DOMContentLoaded', app);
