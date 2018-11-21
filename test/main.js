//get json data
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'parks.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var parks = JSON.parse(ourRequest.responseText);
    createHTML(parks);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(parksTemplate){
  var rawTemplate = document.getElementById('parksTemplate').innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(parksTemplate);

  var parksContainer =document.getElementById("park1");
  park1.innerHTML = ourGeneratedHTML;
};


//get json data for suburbs

//  for(var i = 0; i < json.parks.length; i++) {
  //  var listItem = document.createElement('li');
    //listItem.innerHTML +=json.parks[i].Name;
    //listItem.innerHTML +=json.parks[i].features;
  //  myList.appendChild(listItem);
  //}
//});
