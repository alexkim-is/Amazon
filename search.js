var inventory = [
  { description: "Cat food for lazy cats.", name: "Lazy cat", price: "$10.99", image: "lazy-cat.png"},
  { description: "Cat food for fat cats.", name: "Fat cat", price: "$11.99", image: "fat-cat.png"},
  { description: "Cat food for angry cats.", name: "Angry cat", price: "$9.99", image: "angry-cat.png"},
  { description: "Cat food for grumpy cats.", name: "Grumpy cat", price: "$12.99", image: "grumpy-cat.png"},
  { description: "Cat food for skinny cats.", name: "Skinny cat", price: "$15.99", image: "skinny-cat.png"},
  { description: "Cat food for cute cats.", name: "Cute cat", price: "$14.99", image: "cute-cat.png"},
  { description: "Cat food for kittnes.", name: "Kittens", price: "$19.99", image: "kittens.png"}
];

function showNewInventory(inventory, theSearchTerm, newInventory) {
  for (var i = 0 ; i < inventory.length; i++) {
    var matchingItems = [];
    var item = inventory[i];
    var itemText = item.description + item.name;
    var theMatch = itemText.toLowerCase().includes(theSearchTerm.toLowerCase());
    if (theMatch != false) {
      matchingItems.push(item);
      var newDivName = document.createElement('div');
      var newDivDescription = document.createElement('div');
      var newDivPrice = document.createElement('div')
      newDivName.textContent = item.name;
      newDivDescription.textContent = item.description;
      newDivPrice.textContent = item.price;
      newInventory.appendChild(newDivName);
      newInventory.appendChild(newDivDescription);
      newInventory.appendChild(newDivPrice);
      console.log(matchingItems)
    }
  }
}

document.getElementById('search-button').addEventListener('click', function (event) {
  var theSearchTerm = document.getElementById('search-term').value;
  var theInventory = document.getElementById('inventory');
  showNewInventory(inventory, theSearchTerm, theInventory);
})
