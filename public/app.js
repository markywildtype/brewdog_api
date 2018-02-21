const app = function () {
  const url = "https://api.punkapi.com/v2/beers"
  requestBeerData(url, requestComplete);

  const beerList = document.getElementById('beer-list');

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
  populateBeerList(beerArray);
}

//Data handling
const populateBeerList = function(){

}


document.addEventListener('DOMContentLoaded', app);
