var myRestaurants = [
  {
    name: "Ruth's Chris Steak House",
    location: "Irvine, CA",
    rating: 5,
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
var keyword = document.getElementById('keyword');
search.addEventListener('submit', function(event) {
  event.preventDefault();
  for (var i = 0; i < myRestaurants.length; i++) {

    if (myRestaurants[i].name === keyword.value) {
      var theRestaurant = restaurant(myRestaurants[i]);
      var myReviews = reviews(myRestaurants[i]);
      displayRestaurants(theRestaurant, myReviews);
    };

  }
});

function displayRestaurants(theRestaurant, reviews) {
  var displayResults = document.getElementById('results')
  displayResults.setAttribute('width', '700px');

  while(displayResults.firstChild) {
    displayResults.removeChild(displayResults.firstChild);
  }

  displayResults.appendChild(theRestaurant);

  for(var i = 0; i < reviews.length; i++) {
    displayResults.appendChild(reviews[i]);
  }
}

function restaurant(data) {

  var theRestaurant = document.createElement('div');

  var imageArea = document.createElement('div');

  var restaurantPicture = document.createElement('img');

  restaurantPicture.src = data.image;

  var restaurantInfo = document.createElement('div');

  var restaurantName = document.createElement('h1');
  restaurantName.textContent = data.name;

  var restaurantDescription = document.createElement('p');
  restaurantDescription.textContent = data.description;

  restaurantInfo.appendChild(restaurantDescription);
  theRestaurant.appendChild(restaurantName);
  theRestaurant.appendChild(restaurantInfo);

  imageArea.appendChild(restaurantPicture);
  theRestaurant.appendChild(imageArea);

  return theRestaurant;
}


function reviews(restaurant) {
  var reviewResults = document.getElementById('reviews');

  while (reviewResults.firstChild) {
    reviewResults.removeChild(reviewResults.firstChild);
  }

  var header = document.createElement('h3');
  header.textContent = 'Start your own review for this business.'

  var textArea = document.createElement('textarea');
  textArea.className = 'form-control';
  textArea.setAttribute('rows','10');
  textArea.setAttribute('placeholder', 'Start writing!');

  var buttonArea = document.createElement('div');

  var submit = document.createElement('button');
  submit.className = 'btn btn-default',
  submit.setAttribute('type','submit');
  submit.setAttribute('href','#');
  submit.setAttribute('id', 'submitReview');
  submit.setAttribute('data-id', restaurant.id);
  submit.textContent = 'Submit Review';


  reviewResults.appendChild(header);
  reviewResults.appendChild(textArea);
  buttonArea.appendChild(submit);
  reviewResults.appendChild(buttonArea);

  for(var i = 0; i < restaurant.reviews.length; i++) {

    var reviewsArea = document.createElement('div');
    reviewsArea.className = 'media';
    reviewsArea.setAttribute('width', '300px');

    var userPictureArea = document.createElement('div');
    userPictureArea.setAttribute('class', 'media-left');

    var userPictureIcon = document.createElement('img');
    userPictureIcon.className = 'media-object';
    userPictureIcon.setAttribute('width', '100px');
    userPictureIcon.src = restaurant.reviews[i].userIcon;

    var rating = document.createElement('div');
    rating.textContent = "User's Rating: " + restaurant.reviews[i].rating;

    var reviewInfo = document.createElement('div');
    reviewInfo.setAttribute('class', 'media-body');

    var reviewTitle = document.createElement('h4');
    reviewTitle.setAttribute('class', 'media-heading');
    reviewTitle.textContent = restaurant.reviews[i].user + "'s Review";

    var reviewText = document.createElement('p');
    reviewText.setAttribute('width', '500px');
    reviewText.textContent = restaurant.reviews[i].review;

    reviewInfo.appendChild(reviewTitle);
    reviewInfo.appendChild(rating);
    reviewInfo.appendChild(reviewText);
    reviewsArea.appendChild(reviewInfo);

    userPictureArea.appendChild(userPictureIcon);
    reviewsArea.appendChild(userPictureArea);
    reviewResults.appendChild(reviewsArea);
  }
  return reviewResults;
};
