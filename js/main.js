
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
});

document.getElementById("bellamack").onclick = displayBell;

    listItem.innerHTML +=json.parks[i].Name;
    listItem.innerHTML +=json.parks[i].features;
    displayBell.appendChild(listItem);

function createHTML(parksData){
  var rawTemplate = document.getElementById("parksTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(parksData);
  var parksContainer = document.getElementById("parks-Container");
  parksContainer.innerHTML = ourGeneratedHTML;
}
