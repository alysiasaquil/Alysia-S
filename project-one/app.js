var myRestaurants = [
  {
    name: "Ruth's Chris Steak House",
    location: "Irvine, CA",
    rating: 5,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/Ruths-Chris-Exterior-Night.jpg",
    description: "The best steakhouse in Irvine, California is Ruth's Chris Steak House. Treat yourself to a USDA Prime steak that arrives sizzling on a 500 degree plate.",
    reviews: [
      {
        user: "@NotSoNegativeNancy",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 4,
        review: "Ruth's Chris Steak House by far is my favorite steakhouse. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this steakhouse was so hospitable, down to earth, and fun.",
      },
      {
        user: "@AgingArnold",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 1,
        review: "This place isn't good. I can make better steaks at home!!!",
      },
      {
        user: "@DancingDufus",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 5,
        review: "This place makes me happy because it's soooo good!  This is my favorite place!!!!",
      }
    ]
  },
  {
    name: "BRIO Tuscan Grille",
    location: "Irvine, CA",
    rating: 4,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/brio.jpg",
    description: "At BRIO, we celebrate life, love & all things Italian!  In our restaurants, the chef-inspired cuisine at BRIO is simply prepared using the finest and freshest ingredients, with an emphasis on high-quality steaks, housemade pasta specialties and flatbreads prepared in an authentic Italian oven.",
    reviews: [
      {
        user: "@PositivePapa",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 4,
        review: "BRIO Tuscan Grille is my favorite restaurant. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this restaurant was so hospitable, down to earth, and fun.",
      },
      {
        user: "@AgingArnold",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 1,
        review: "This place isn't good. I can make better food at home!!!",
      },
      {
        user: "@DancingDufus",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 5,
        review: "This place makes me happy because it's soooo good!  This is my favorite place!!!!",
      }
    ]
  },
  {
    name: "Lazy Dog Restaurant & Bar",
    location: "Irvine, CA",
    rating: 3,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/Ruths-Chris-Exterior-Night.jpg",
    description: "Lazy Dog Restaurant & Bar is a family-run Southern California based restaurant group.",
    reviews: [
      {
        user: "@NotSoNegativeNancy",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 4,
        review: "Lazy Dog Restaurant & Bar is my favorite restaurant. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this restaurant was so hospitable, down to earth, and fun.",
      },
      {
        user: "@PositivePapa",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 4,
        review: "Lazy Dog Restaurant & Bar is my favorite restaurant. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this restaurant was so hospitable, down to earth, and fun.",
      },
    ]
  },
  {
    name: "BJ's Restaurant & Brewhouse",
    location: "Irvine, CA",
    rating: 2,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/Ruths-Chris-Exterior-Night.jpg",
    description: "Welcome to BJ's Restaurant & Brewhouse! We're the place to go when you're looking for amazing craft beer, delicious pizza selections, and an extensive menu of high quality food--all in a fun, casual, accommodating setting.",
    reviews: [
      {
        user: "@HappyHannah",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 5,
        review: "This place makes me happy because it's soooo good!  This is my favorite place!!!!",
      },
      {
        user: "@PositivePapa",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 4,
        review: "BJ's is my favorite restaurant. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this restaurant was so hospitable, down to earth, and fun.",
      },
      {
        user: "@AgingArnold",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 1,
        review: "This place isn't good. I can make better pasta at home!!!",
      },
      {
        user: "@DancingDufus",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/project-one-images/nopic.jpg",
        rating: 5,
        review: "This place makes me happy because it's soooo good!  This is my favorite place!!!!",
      }
    ]
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
  restaurantName.className = 'media-heading';
  restaurantName.textContent = restaurant.name;

  var restaurantDescription = document.createElement('p');
  restaurantDescription.setAttribute('width', '500px');
  restaurantDescription.textContent = restaurant.description;

  var reviewsArea = document.createElement('div');
  reviewsArea.className = 'media';
  reviewsArea.setAttribute('width', '700px');

  var userPictureArea = document.createElement('div');
  userPictureArea.setAttribute('class', 'media-left');

  var userPictureIcon = document.createElement('img');
  userPictureIcon.className = 'media-object';
  userPictureIcon.setAttribute('width', '200px');
  userPictureIcon.src = restaurant.userIcon;

  var reviewInfo = document.createElement('div');
  reviewInfo.setAttribute('class', 'media-body');

  var reviewTitle = document.createElement('h4');
  reviewTitle.setAttribute('class', 'media-heading');
  reviewTitle.textContent = 'Review';

  var reviewText = document.createElement('p');
  reviewText.setAttribute('width', '500px');
  reviewText.textContent = restaurant.reviews;

  reviewInfo.appendChild(reviewText);
  reviewInfo.appendChild(reviewTitle);
  reviewsArea.appendChild(reviewInfo);

  userPictureArea.appendChild(userPictureIcon);
  reviewsArea.appendChild(userPictureArea);

  reviewsArea.appendChild(displayArea);

  restaurantInfo.appendChild(restaurantDescription);
  displayArea.appendChild(restaurantName);
  displayArea.appendChild(restaurantInfo);

  imageArea.appendChild(restaurantPicture);
  displayArea.appendChild(imageArea);

  displayResults.appendChild(displayArea);
}
