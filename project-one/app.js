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

/* code to display restaurants and reviews when an event occurs */

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

/* code to display restaurants */

function displayRestaurants(theRestaurant, reviews) {
  var displayResults = document.getElementById('results')
  displayResults.setAttribute('width', '700px');

//removes search result when new search occurs
  while(displayResults.firstChild) {
    displayResults.removeChild(displayResults.firstChild);
  }

  displayResults.appendChild(theRestaurant);

  for(var i = 0; i < reviews.length; i++) {
    displayResults.appendChild(reviews[i]);
  }
};
/* code that creates a restaurant element */

function restaurant(data) {
  var theRestaurant = document.createElement('div');

  var imageArea = document.createElement('div');

  var restaurantPicture = document.createElement('img');
  restaurantPicture.src = data.image;

  var restaurantInfo = document.createElement('div');

  var restaurantName = document.createElement('h1');
  restaurantName.textContent = data.name;



  var restaurantDescription = document.createElement('h5');
  restaurantDescription.textContent = data.description;

  restaurantInfo.appendChild(restaurantDescription);
  theRestaurant.appendChild(restaurantName);
  theRestaurant.appendChild(restaurantInfo);

  imageArea.appendChild(restaurantPicture);
  theRestaurant.appendChild(imageArea);

  return theRestaurant;
};

/* code that creates elements to display reviews */

function reviews(restaurant) {
  var reviewResults = document.getElementById('reviews');

//removes reviews when a new search occurs
  while (reviewResults.firstChild) {
    reviewResults.removeChild(reviewResults.firstChild);
  }

  var header = document.createElement('h3');
  header.textContent = 'Start your own review for this business.'

// code for writing your own review
  var textArea = document.createElement('textarea');
  textArea.className = 'form-control';
  textArea.setAttribute('id', 'write');
  textArea.setAttribute('rows','10');
  textArea.setAttribute('placeholder', 'Start writing!');

  var addLocation = document.createElement('input');
  addLocation.setAttribute('id', 'location');
  addLocation.setAttribute('type', 'text');
  addLocation.setAttribute('class', 'form-control');
  addLocation.setAttribute('placeholder', 'Add Your Location');

  var buttonArea = document.createElement('div');

  var submit = document.createElement('button');
  submit.className = 'btn btn-default',
  submit.setAttribute('type','submit');
  submit.setAttribute('href','#');
  submit.setAttribute('id', 'submitReview');
  submit.setAttribute('data-id', restaurant.id);
  submit.textContent = 'Submit Review';


  var starRating = document.createElement('div');
  starRating.className = 'stars';

  var select = document.createElement('select');
  select.setAttribute('id', 'rate');

  for(var i = 1; i < 6; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = i + " stars";

    select.appendChild(option);
    starRating.appendChild(select);
  }

  reviewResults.appendChild(header);
  reviewResults.appendChild(textArea);
  reviewResults.appendChild(addLocation);
  reviewResults.appendChild(starRating);
  buttonArea.appendChild(submit);
  reviewResults.appendChild(buttonArea);


//creating element to display list of reviews
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

    var vote = document.createElement('h5');
    vote.textContent = 'Vote this review...';

    var votingButtons = document.createElement('div');
    votingButtons.className = 'btn-group';
    votingButtons.setAttribute('role', 'group');
    votingButtons.setAttribute('aria-label', 'buttonGroup');

    var useful = document.createElement('button');
    useful.setAttribute('type', 'button');
    useful.setAttribute('class', 'btn btn-default inputVote');
    useful.textContent = "Useful";

    var funny = document.createElement('button');
    funny.setAttribute('type', 'button');
    funny.setAttribute('class', 'btn btn-default inputVote');
    funny.textContent = "Funny";

    var cool = document.createElement('button');
    cool.setAttribute('type', 'button');
    cool.setAttribute('class', 'btn btn-default inputVote');
    cool.textContent = "Cool";

    var displayThanks = document.createElement('div');

    votingButtons.appendChild(useful);
    votingButtons.appendChild(funny);
    votingButtons.appendChild(cool);
    votingButtons.appendChild(displayThanks);

    reviewInfo.appendChild(reviewTitle);
    reviewInfo.appendChild(rating);
    reviewInfo.appendChild(reviewText);
    reviewInfo.appendChild(vote);
    reviewInfo.appendChild(votingButtons);
    reviewsArea.appendChild(reviewInfo);

    userPictureArea.appendChild(userPictureIcon);
    reviewsArea.appendChild(userPictureArea);
    reviewResults.appendChild(reviewsArea);

    votingButtons.addEventListener('click', thankYou);

    function thankYou(event) {
      var groupButton = event.target.parentElement;
      var thankyou = groupButton.getElementsByTagName('div')[0];

      var displayMessage = document.createElement('p');
      displayMessage.textContent = "Thank you for your vote!";
      thankyou.appendChild(displayMessage);
    }
  }

// event listener to submit review
  submit.addEventListener('click', function(){
    var write = document.getElementById('write').value;
    var myReview = new Object();
    myReview.user = '@alysiasaquil';
    myReview.userIcon = 'project-one-images/alysia.jpg';
    myReview.rating = select.value + ' Stars';
    myReview.review = write;

    var location = document.getElementById('location').value;
    var myLocation = new Object();
    myLocation.addLocation = location;
    console.log(myLocation.addLocation);

    restaurant.reviews.unshift(myReview);

//creating element to display own review
    var reviewsArea = document.createElement('div');
    reviewsArea.className = 'media';
    reviewsArea.setAttribute('width', '300px');

    var userPictureArea = document.createElement('div');
    userPictureArea.setAttribute('class', 'media-left');

    var userPictureIcon = document.createElement('img');
    userPictureIcon.className = 'media-object';
    userPictureIcon.setAttribute('width', '100px');
    userPictureIcon.src = myReview.userIcon;

    var rating = document.createElement('div');
    rating.textContent = "User's Rating: " + myReview.rating;

    var reviewInfo = document.createElement('div');
    reviewInfo.setAttribute('class', 'media-body');

    var reviewTitle = document.createElement('h4');
    reviewTitle.setAttribute('class', 'media-heading');
    reviewTitle.textContent = myReview.user + "'s Review";

    var reviewText = document.createElement('p');
    reviewText.setAttribute('width', '500px');
    reviewText.textContent = myReview.review;

    var locationText = document.createElement('p');
    locationText.textContent = "Location: " + myLocation.addLocation;

    reviewInfo.appendChild(reviewTitle);
    reviewInfo.appendChild(rating);
    reviewInfo.appendChild(locationText);
    reviewInfo.appendChild(reviewText);
    reviewsArea.appendChild(reviewInfo);

    userPictureArea.appendChild(userPictureIcon);
    reviewsArea.appendChild(userPictureArea);
    reviewResults.appendChild(reviewsArea);

  });
  return reviewResults;
};
