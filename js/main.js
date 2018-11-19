
//get json data for suburbs
var myList = document.querySelector('listSubs');

fetch('parks.json')
.then(function(response) { return response.json(); })
.then(function(json) {

  for(var i = 0; i < json.parks.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML +=json.parks[i].Location;
    myList.appendChild(listItem);
  }
});
//get links to pages

var myList = document.querySelector('listSubs');

fetch('parks.json')
.then(function(response) { return response.json(); })
.then(function(json) {

  for(var i = 0; i < json.parks.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML +=json.parks[i].Name;
    listItem.innerHTML +=json.parks[i].features;
    myList.appendChild(listItem);
  }
})

var ourRequest = new XMLHttpRequest();
ourRequest.open ("GET", 'https://github.com/PennySeamer/Palmerston_Parks/blob/master/js/parks.json')
ourRequest.onload = function(){
  console.log(ourRequest.responseText);
};
function createHTML(parksData){
  var rawTemplate = document.getElementById("parksTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(parksData);
  var parksContainer = document.getElementById("parks-Container");
  parksContainer.innerHTML = ourGeneratedHTML;
}
