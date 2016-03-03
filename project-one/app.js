var myRestaurants = [
  {
    name: "Ruth's Chris Steak House",
    location: "Irvine, CA",
    rating: 5,
    description: "The best steakhouse in Irvine, California is Ruth's Chris Steak House. Treat yourself to a USDA Prime steak that arrives sizzling on a 500 degree plate."
  },
  {
    name: "BRIO Tuscan Grille",
    location: "Irvine, CA",
    rating: 4,
    description: "At BRIO, we celebrate life, love & all things Italian!  In our restaurants, the chef-inspired cuisine at BRIO is simply prepared using the finest and freshest ingredients, with an emphasis on high-quality steaks, housemade pasta specialties and flatbreads prepared in an authentic Italian oven."
  },
  {
    name: "Lazy Dog Restaurant & Bar",
    location: "Irvine, CA",
    rating: 3,
    description: "Lazy Dog Restaurant & Bar is a family-run Southern California based restaurant group."
  },
  {
    name: "BJ's Restaurant & Brewhouse",
    location: "Irvine, CA",
    rating: 2,
    description: "Welcome to BJ's Restaurant & Brewhouse! We're the place to go when you're looking for amazing craft beer, delicious pizza selections, and an extensive menu of high quality food--all in a fun, casual, accommodating setting."
  }
];

var search = document.getElementById('search');
search.addEventListener('submit', function(event) {
  event.preventDefault();
  var keyword = document.getElementById('keyword');
  for (var i = 0; i < myRestaurants.length; i++) {
    if (myRestaurants[i].name === keyword.value) {
      console.log(myRestaurants[i])
    }
  }
});
