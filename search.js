var inventory = [
  { id: "1", description: "Cat food for lazy cats. Make them more active!", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Lazy cat", price: "$10.99", pic: "http://london.trusttown.net/wp-content/uploads/2015/04/lazy-cat-tries-to-help-9.jpg"},
  { id: "2", description: "Cat food for fat cats. Make them lose weight!", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Fat cat", price: "$11.99", pic: "http://static.flickr.com/34/122530930_6e16f1eb5c.jpg"},
  { id: "3", description: "Cat food for angry cats. Make them less angry!", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Angry cat", price: "$9.99", pic: "http://geekologie.com/2016/02/17/angry-cat-7.jpg"},
  { id: "4", description: "Cat food for grumpy cats. Make them less grumpy!", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Grumpy cat", price: "$12.99", pic: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg"},
  { id: "5", description: "Cat food for skinny cats. Make them more plump!", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Skinny cat", price: "$15.99", pic: "http://www.theultimatecatwebsite.com/uploads/1/1/0/8/11083235/8953931_orig.jpg"},
  { id: "6", description: "Cat food for cute cats. Make them even cutter!", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Cute cat", price: "$14.99", pic: "http://www.petsftw.com/wp-content/uploads/2016/03/cutecat.jpg"},
  { id: "7", description: "Cat food for kittnes. Keep them as kittens forever!", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Kittens", price: "$19.99", pic: "http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg"}
];
var $search = document.getElementById('search-button');
var $detailView = document.getElementById('detail-view');
var $inventory = document.getElementById('inventory-view');

var cart = [];
var $cart = document.getElementById ('cart');

function searchItems(AllItems, searchText) {
  $detailView.innerHTML = '';
  $inventory.innerHTML = '';
  var matchingItems = [];
  for (var i = 0; i < AllItems.length; i++) {
    var theItem = AllItems[i];
    var itemText = theItem.description + theItem.name;
    var theMatch = itemText.toLowerCase().includes(searchText.toLowerCase());
    if (theMatch == true) {
      matchingItems.push(theItem);
    }
  }
  return matchingItems;
}

function renderItem (eachItem) {
  var $container = document.createElement('div');
  $container.className = 'container';
  $container.dataset.id = eachItem.id;
  var $pic = document.createElement('img');
  $pic.setAttribute('id', 'pic')
  $pic.setAttribute('src', eachItem.pic);
  var $name = document.createElement('h3');
  $name.setAttribute('id', 'name');
  $name.textContent = eachItem.name;
  var $description = document.createElement ('p');
  $description.setAttribute('id', 'description');
  $description.textContent = eachItem.description;
  var $price = document.createElement('div');
  $price.setAttribute('id', 'price');
  $price.textContent = eachItem.price;
  // var $cartButton = document.createElement('button');
  // $cartButton.setAttribute('id', 'cartButton');
  // $cartButton.textContent = 'Add to Cart';
  $container.appendChild($pic);
  $container.appendChild($name);
  $container.appendChild($description);
  $container.appendChild($price);
  // $container.appendChild($cartButton);
  return $container;
}

function renderItemDetail (eachItem) {
  var $container = document.createElement('div');
  $container.className = 'detail-container';
  $container.dataset.id = eachItem.id;
  var $pic = document.createElement('img');
  $pic.setAttribute('id', 'pic')
  $pic.setAttribute('src', eachItem.pic);
  var $name = document.createElement('h3');
  $name.setAttribute('id', 'name');
  $name.textContent = eachItem.name;
  var $description = document.createElement ('p');
  $description.setAttribute('id', 'description');
  $description.textContent = eachItem.description;
  var $detail = document.createElement ('p');
  $detail.setAttribute('id', 'detail');
  $detail.textContent = eachItem.detail;
  var $price = document.createElement('div');
  $price.setAttribute('id', 'price');
  $price.textContent = eachItem.price;
  var $cartButton = document.createElement('button');
  $cartButton.setAttribute('id', 'cartButton');
  $cartButton.textContent = 'Add to Cart';
  $container.appendChild($pic);
  $container.appendChild($name);
  $container.appendChild($description);
  $container.appendChild($detail);
  $container.appendChild($price);
  $container.appendChild($cartButton);
  return $container;
}

//addEventListener for SEARCH CLICK
// listen for 'click' on the search form
// prevent default behaivor
// clear /empty any previous results
// read the text withink search form and store
// exit the listner if the form is empty/blank
// run the searchItems function using (inventory, "input")
//loop through matchingitems[i] and for each, renderedItem, append it to $inventory which is 'veiw-html;

$search.addEventListener('click', function (event) {
    event.preventDefault();
    var $inventory = document.getElementById('inventory-view');
    $inventory.innerHTML = '';
    var $searchText = document.getElementById('search').value;
    if ($searchText.trim() == false) return;
    var $result = searchItems (inventory, $searchText);
    for (var i = 0; i < $result.length; i++) {
      var $renderResult = renderItem ($result[i]);
      $inventory.appendChild($renderResult)
    }
  })

//Write a function for switching views when a product is clicked.
// 1.
// 2. Hide by removing active class and adding hidden class.
// 3. Show by adding active class and removing hideen class.

function showProduct (item) {
  var $active = document.getElementsByClassName('active')[0];
  $active.classList.remove("active");
  $active.classList.add('hidden');
  var $hidden = document.getElementsByClassName('hidden')[1];
  $hidden.classList.remove('hidden');
  $hidden.classList.add('active');
  var $details = document.createElement('div');
  $details.appendChild(item);
  return $details
}

//An eventlisner that listens when a product is clicked.
//1. Listen for a 'click' on a product('')
//2. Prevent default bahvior.
//3. Check to see if a 'container' was clicked.
//4. Find the matching item.
//5. Render Item.
//6. Display the item.

$inventory.addEventListener('click', function(event){
  event.preventDefault();

  if ( event.target.className == 'container') {
    for (var i = 0; i < inventory.length; i++) {
      var item = inventory[i];
      if (event.target.dataset.id == item.id) {
        var $renderItem = renderItemDetail(item);
        showProduct($renderItem);
        $detailView.appendChild($renderItem)
      }
    }
  }
})

// Add an eventListner for the cart-button.
//  1. Listen for a 'click'
//  2. check to see if cartButton was clicked. If not return.
//  3. check to make sure it's not an empty string. If empty return.
//  4. Add to cart.
$detailView.addEventListener('click', function (event) {
  if (event.target.id !== 'cartButton') return;
  if (event.target.textContent == '') return;
  var item = $detailView;
  cart.push(item);
  $cart.textContent = cart.length + ' Items';
  return
})

function hideProduct(item) {
  var $active = document.getElementsByClassName('active')[0];
  $active.classList.add('hidden');
  $active.classList.remove("active");
  var $hidden = document.getElementsByClassName('hidden')[0];
  $hidden.classList.add('active');
  $hidden.classList.remove('hidden');
  $inventory.appendChild(item);
  document.innerHTML = '';
  inventory.innerHTML = ''
}

//Add an eventListner to revert back to search result.
// 1. Listen for a click on document level.
// 2. Prevent default bahavior.
// 3. Check to see if element 'search-box' was clicked.
// 4. If yes, then clear the page and call hideProduct function which hides.
document.addEventListener('click', function (event){
    if (event.target.id == 'search-box') {
    $inventory.innerHTML ='';
    $detailView.innerHTML ='';
    hideProduct();
  }
  else if (event.target.id == 'title') {
    $inventory.innerHTML = '';
    $detailView.innerHTML = '';
    hideProduct();
  }
})

//This eventListner allows user to search for other items from detail view page.
$detailView.addEventListener('click', function (event) {
    event.preventDefault();
    $inventory.innerHTML ='';
    $detailView.innerHTML ='';
    hideProduct();
    var $inventory = document.getElementById('inventory-view');
    $inventory.innerHTML = '';
    var $searchText = document.getElementById('search').value;
    if ($searchText.trim() == false) return;
    var $result = searchItems (inventory, $searchText);
    for (var i = 0; i < $result.length; i++) {
      var $renderResult = renderItem ($result[i]);
      $inventory.appendChild($renderResult)
    }
  })
