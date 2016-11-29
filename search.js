var inventory = [
  { description: "Cat food for lazy cats. Make them more active!", name: "Lazy cat", price: "$10.99", pic: "http://london.trusttown.net/wp-content/uploads/2015/04/lazy-cat-tries-to-help-9.jpg"},
  { description: "Cat food for fat cats. Make them lose weight!", name: "Fat cat", price: "$11.99", pic: "http://static.flickr.com/34/122530930_6e16f1eb5c.jpg"},
  { description: "Cat food for angry cats. Make them less angry!", name: "Angry cat", price: "$9.99", pic: "http://geekologie.com/2016/02/17/angry-cat-7.jpg"},
  { description: "Cat food for grumpy cats. Make them less grumpy!", name: "Grumpy cat", price: "$12.99", pic: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg"},
  { description: "Cat food for skinny cats. Make them more plump!", name: "Skinny cat", price: "$15.99", pic: "http://www.theultimatecatwebsite.com/uploads/1/1/0/8/11083235/8953931_orig.jpg"},
  { description: "Cat food for cute cats. Make them even cutter!", name: "Cute cat", price: "$14.99", pic: "http://www.petsftw.com/wp-content/uploads/2016/03/cutecat.jpg"},
  { description: "Cat food for kittnes. Keep them as kittens forever!", name: "Kittens", price: "$19.99", pic: "http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg"}
];

function searchItems(inventory, theSearchTerm) {
  var matchingItems = [];
  for (var i = 0; i < inventory.length; i++) {
    var item = inventory[i];
    var itemText = item.description + item.name;
    var theMatch = itemText.toLowerCase().includes(theSearchTerm.toLowerCase());
    if (theMatch == true) {
      matchingItems.push(item);
    }
  }
  return matchingItems;
}

function renderItem (searchResult) {
  var newDivContainer = document.createElement('div');
  newDivContainer.className = 'container';
  var $pic = document.createElement('img');
  $pic.setAttribute('id', 'pic')
  $pic.setAttribute('src', searchResult.pic);
  var $name = document.createElement('h3');
  $name.setAttribute('id', 'name');
  $name.textContent = searchResult.name;
  var $description = document.createElement ('p');
  $description.setAttribute('id', 'description');
  $description.textContent = searchResult.description;
  var $price = document.createElement('div');
  $price.setAttribute('id', 'price');
  $price.textContent = searchResult.price;
  newDivContainer.appendChild($pic);
  newDivContainer.appendChild($name);
  newDivContainer.appendChild($description);
  newDivContainer.appendChild($price);
  return newDivContainer;
}

document.getElementById('search-button').addEventListener('click', function () {
  var $inventory = document.getElementById('inventory');
  $inventory.innerHTML = "";
  var theSearchTerm = document.getElementById('search-term').value;
  var searchResults = searchItems (inventory, theSearchTerm);
  for (var i = 0; i < searchResults.length; i++) {
    var renderResult = renderItem (searchResults[i]);
    $inventory.appendChild(renderResult);
  }
})
