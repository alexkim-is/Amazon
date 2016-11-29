var inventory = [
  { description: "Cat food for lazy cats.", name: "Lazy cat", price: "$10.99", pic: "/images/lazy-cat-tries-to-help-9.jpeg"},
  { description: "Cat food for fat cats.", name: "Fat cat", price: "$11.99", pic: "fat-cat.png"},
  { description: "Cat food for angry cats.", name: "Angry cat", price: "$9.99", pic: "angry-cat.png"},
  { description: "Cat food for grumpy cats.", name: "Grumpy cat", price: "$12.99", pic: "grumpy-cat.png"},
  { description: "Cat food for skinny cats.", name: "Skinny cat", price: "$15.99", pic: "skinny-cat.png"},
  { description: "Cat food for cute cats.", name: "Cute cat", price: "$14.99", pic: "cute-cat.png"},
  { description: "Cat food for kittnes.", name: "Kittens", price: "$19.99", pic: "kittens.png"}
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
  var newDivName = document.createElement('div');
  var newDivDescription = document.createElement('div');
  var newDivPrice = document.createElement('div');
  newDivName.textContent = searchResult.name;
  newDivDescription.textContent = searchResult.description;
  newDivPrice.textContent = searchResult.price;
  newDivContainer.appendChild(newDivName);
  newDivContainer.appendChild(newDivDescription);
  newDivContainer.appendChild(newDivPrice);
  return newDivContainer;
}

document.getElementById('search-button').addEventListener('click', function (event) {
  var $inventory = document.getElementById('inventory');
  $inventory.innerHTML = "";
  var theSearchTerm = document.getElementById('search-term').value;
  var searchResults = searchItems (inventory, theSearchTerm);
  for (var i = 0; i < searchResults.length; i++) {
    var renderResult = renderItem (searchResults[i]);
    $inventory.appendChild(renderResult);
  }
})
