var myRestaurants = [
  {
    name: "Ruth's Chris Steak House",
    location: "Irvine, CA",
    rating: 5,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/Ruths-Chris-Exterior-Night.jpg",
    description: "The best steakhouse in Irvine, California is Ruth's Chris Steak House. Treat yourself to a USDA Prime steak that arrives sizzling on a 500 degree plate."
  },
  {
    name: "BRIO Tuscan Grille",
    location: "Irvine, CA",
    rating: 4,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/brio.jpg",
    description: "At BRIO, we celebrate life, love & all things Italian!  In our restaurants, the chef-inspired cuisine at BRIO is simply prepared using the finest and freshest ingredients, with an emphasis on high-quality steaks, housemade pasta specialties and flatbreads prepared in an authentic Italian oven."
  },
  {
    name: "Lazy Dog Restaurant & Bar",
    location: "Irvine, CA",
    rating: 3,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/Ruths-Chris-Exterior-Night.jpg",
    description: "Lazy Dog Restaurant & Bar is a family-run Southern California based restaurant group."
  },
  {
    name: "BJ's Restaurant & Brewhouse",
    location: "Irvine, CA",
    rating: 2,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/Ruths-Chris-Exterior-Night.jpg",
    description: "Welcome to BJ's Restaurant & Brewhouse! We're the place to go when you're looking for amazing craft beer, delicious pizza selections, and an extensive menu of high quality food--all in a fun, casual, accommodating setting."
  }
];


var search = document.getElementById('search');

search.addEventListener('submit', function(event) {
  event.preventDefault();
  var keyword = document.getElementById('keyword');
  for (var i = 0; i < myRestaurants.length; i++) {
    if (myRestaurants[i].name === keyword.value) {
      displayRestaurants(myRestaurants[i]);
    };
  }
});

function displayRestaurants(restaurant) {
  var displayResults = document.getElementById('results')
  displayResults.className = 'panel panel-default'
  displayResults.setAttribute('width', '700px');

  var displayArea = document.createElement('div');
  displayArea.className = 'media';
  displayArea.setAttribute('width', '700px');

  var imageArea = document.createElement('div');
  imageArea.setAttribute('class', 'media-left');

  var restaurantPicture = document.createElement('img');
  restaurantPicture.className = 'media-object';
  restaurantPicture.setAttribute('width', '200px');
  restaurantPicture.src = restaurant.image;

  var restaurantInfo = document.createElement('div');
  restaurantInfo.setAttribute('class', 'media-body');

  var restaurantName = document.createElement('h4');
  restaurantName.setAttribute('class', 'media-heading');
  restaurantName.textContent = restaurant.name;

  var restaurantDescription = document.createElement('p');
  restaurantDescription.setAttribute('width', '500px');
  restaurantDescription.textContent = restaurant.description;


  restaurantInfo.appendChild(restaurantDescription);
  displayArea.appendChild(restaurantName);
  displayArea.appendChild(restaurantInfo);

  imageArea.appendChild(restaurantPicture);
  displayArea.appendChild(imageArea);

  displayResults.appendChild(displayArea);
}
