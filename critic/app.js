var myRestaurants = [
  {
    name: "Ruth's Chris Steak House",
    location: "Irvine, CA",
    rating: 5,
    id: 1,
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/RuthsChris.jpg",
    description: "The best steakhouse in Irvine, California is Ruth's Chris Steak House. Treat yourself to a USDA Prime steak that arrives sizzling on a 500 degree plate.",
    reviews: [
      {
        user: "@Aaliyah",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/aaliyah.jpg",
        rating: 4,
        review: "Ruth's Chris Steak House by far is my favorite steakhouse. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this steakhouse was so hospitable, down to earth, and fun.",
      },
      {
        user: "@Yeezus",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/kanyewest.jpeg",
        rating: 1,
        review: "This place isn't good. I can make better steaks at home!!!",
      },
      {
        user: "@KendrickLamar",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/kendricklamar.jpg",
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
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/Brio.jpg",
    description: "At BRIO, we celebrate life, love & all things Italian!  In our restaurants, the chef-inspired cuisine at BRIO is simply prepared using the finest and freshest ingredients, with an emphasis on high-quality steaks, housemade pasta specialties and flatbreads prepared in an authentic Italian oven.",
    reviews: [
      {
        user: "@Beyonce",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/beyonce.jpg",
        rating: 4,
        review: "BRIO Tuscan Grille is my favorite restaurant. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this restaurant was so hospitable, down to earth, and fun.",
      },
      {
        user: "@Yeezus",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/kanyewest.jpeg",
        rating: 1,
        review: "This place isn't good. I can make better food at home!!!",
      },
      {
        user: "@KendrickLamar",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/kendricklamar.jpg",
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
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/rest1.jpg",
    description: "Lazy Dog Restaurant & Bar is a family-run Southern California based restaurant group.",
    reviews: [
      {
        user: "@Aaliyah",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/aaliyah.jpg",
        rating: 4,
        review: "Lazy Dog Restaurant & Bar is my favorite restaurant. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this restaurant was so hospitable, down to earth, and fun.",
      },
      {
        user: "@ZacEfron",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/zacefron.jpeg",
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
    image: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/BJsBrewhouse.jpg",
    description: "Welcome to BJ's Restaurant & Brewhouse! We're the place to go when you're looking for amazing craft beer, delicious pizza selections, and an extensive menu of high quality food--all in a fun, casual, accommodating setting.",
    reviews: [
      {
        user: "@ZacEfron",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/zacefron.jpeg",
        rating: 5,
        review: "This place makes me happy because it's soooo good!  This is my favorite place!!!!",
      },
      {
        user: "@Beyonce",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/beyonce.jpg",
        rating: 4,
        review: "BJ's is my favorite restaurant. The choice to go here was a  spur of the moment choice, on a double date. Im happy to say that the waiting staff at this restaurant was so hospitable, down to earth, and fun.",
      },
      {
        user: "@Yeezus",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/kanyewest.jpeg",
        rating: 1,
        review: "This place isn't good. I can make better pasta at home!!!",
      },
      {
        user: "@KendrickLamar",
        userIcon: "file:///Users/alysiasaquil/AlysiaSaquilabon/project-one/images/kendricklamar.jpg",
        rating: 5,
        review: "This place makes me happy because it's soooo good!  This is my favorite place!!!!",
      }
    ]
  }
];

var jumbotron = document.createElement('div');
jumbotron.setAttribute('id', 'jumbotron');
var heading = document.createElement('h1');
heading.textContent = " Welcome to ";
heading.setAttribute('id', 'welcome');
var caption = document.createElement('h2');
caption.textContent = "See what food critics are saying.";
caption.setAttribute('id', 'caption');

var critic = document.createElement('span');
critic.setAttribute('id', 'critic');
critic.textContent = "critic";

heading.appendChild(critic);
jumbotron.appendChild(heading);
jumbotron.appendChild(caption);
document.body.appendChild(jumbotron);

/* code to display restaurants and reviews when an event occurs */

var search = document.getElementById('search');
var keyword = document.getElementById('keyword');
var background = document.getElementsByTagName('body')[0];
var brand = document.getElementsByTagName('a')[0];
search.addEventListener('submit', function(event) {
  event.preventDefault();
  background.setAttribute('style', 'background: url("")');
  brand.setAttribute('style', 'color: #000000');
  console.log(brand);

  for (var i = 0; i < myRestaurants.length; i++) {

    if (myRestaurants[i].name.toLowerCase() === keyword.value.toLowerCase()) {
      var theRestaurant = restaurant(myRestaurants[i]);
      var theReviews = reviews(myRestaurants[i]);
      displayRestaurants(theRestaurant, theReviews);
    };
    while(jumbotron.firstChild) {
      jumbotron.removeChild(jumbotron.firstChild);
    }
  }
});

/* code to display restaurants */
function displayRestaurants(theRestaurant, reviews) {
  var displayResults = document.getElementById('results');

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
  restaurantPicture.setAttribute('class', 'img-responsive');

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

  var reviewsHeader = document.createElement('h3');
  reviewsHeader.textContent = "Reviews";
  reviewsHeader.setAttribute('class', '');
  reviewsHeader.setAttribute('style', 'font-size: 40px');

  var header = document.createElement('h3');
  header.textContent = 'Start your own review for this business.'
  header.setAttribute('class', 'text-center');

// code for writing your own review

  var reviewsRow = document.createElement('div');
  reviewsRow.className="row";

  var textAreaFormGroup = document.createElement('div');
  textAreaFormGroup.className = "form-group col-lg-8 col-lg-offset-2";

  var textArea = document.createElement('textarea');
  textArea.className = 'form-control';
  textArea.setAttribute('id', 'write');
  textArea.setAttribute('rows','10');
  textArea.setAttribute('placeholder', 'Start critiquing!');

  var locationFormGroup = document.createElement('div');
  locationFormGroup.className = "form-group col-lg-8 col-lg-offset-2";

  var addLocation = document.createElement('input');
  addLocation.setAttribute('id', 'location');
  addLocation.setAttribute('type', 'text');
  addLocation.setAttribute('class', 'form-control');
  addLocation.setAttribute('placeholder', 'Add Your Location');

  var buttonFormGroup = document.createElement('div');
  buttonFormGroup.className = "form-group col-lg-6 col-lg-offset-2";

  var submit = document.createElement('button');
  submit.className = 'btn btn-default',
  submit.setAttribute('type','submit');
  submit.setAttribute('href','#');
  submit.setAttribute('id', 'submitReview');
  submit.setAttribute('data-id', restaurant.id);
  submit.textContent = 'Submit Review';

  var selectFormGroup = document.createElement('div');
  selectFormGroup.className = "form-group col-lg-8 col-lg-offset-2";

  var select = document.createElement('select');
  select.setAttribute('id', 'rate');

  var ratingText = document.createElement('h5');
  ratingText.textContent = "Rate this business: ";

  for(var i = 1; i < 6; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = i;

    select.appendChild(option);
  }

  reviewsRow.appendChild(header);
  textAreaFormGroup.appendChild(textArea);
  reviewsRow.appendChild(textAreaFormGroup);
  locationFormGroup.appendChild(addLocation);
  reviewsRow.appendChild(locationFormGroup);
  selectFormGroup.appendChild(ratingText);
  selectFormGroup.appendChild(select);
  reviewsRow.appendChild(selectFormGroup);
  buttonFormGroup.appendChild(submit);
  reviewsRow.appendChild(buttonFormGroup);
  reviewResults.appendChild(reviewsHeader);


//creating element to display list of reviews
  for(var i = 0; i < restaurant.reviews.length; i++) {
    var star = document.createElement('i');
    star.className = 'fa fa-star';
    star.setAttribute('id', 'star');

    var reviewsArea = document.createElement('div');
    reviewsArea.className = 'media';
    reviewsArea.setAttribute('id', 'reviewsArea')
    reviewsArea.setAttribute('width', '300px');

    var userPictureArea = document.createElement('div');
    userPictureArea.setAttribute('class', 'media-left media-middle');

    var userPictureIcon = document.createElement('img');
    userPictureIcon.className = 'media-object img-circle';
    userPictureIcon.setAttribute('width', '100px');
    userPictureIcon.src = restaurant.reviews[i].userIcon;

    var rating = document.createElement('div');
    rating.textContent = "User's Rating: " + restaurant.reviews[i].rating;
    rating.appendChild(star);

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

    var useful = document.createElement('button');
    useful.setAttribute('type', 'button');
    useful.setAttribute('data-type', 'useful');
    useful.setAttribute('class', 'btn btn-default inputVote');
    useful.textContent = "Useful";

    var funny = document.createElement('button');
    funny.setAttribute('type', 'button');
    funny.setAttribute('data-type', 'funny');
    funny.setAttribute('class', 'btn btn-default inputVote');
    funny.textContent = "Funny";

    var cool = document.createElement('button');
    cool.setAttribute('type', 'button');
    cool.setAttribute('data-type', 'cool');
    cool.setAttribute('class', 'btn btn-default inputVote');
    cool.textContent = "Cool";

    var displayMessage = document.createElement('p');
    displayMessage.textContent = "Thank you for your critique!";
    displayMessage.setAttribute('class', 'show-message');

    votingButtons.appendChild(useful);
    votingButtons.appendChild(funny);
    votingButtons.appendChild(cool);

    reviewInfo.appendChild(reviewTitle);
    reviewInfo.appendChild(rating);
    reviewInfo.appendChild(reviewText);
    reviewInfo.appendChild(vote);
    reviewInfo.appendChild(votingButtons);
    reviewInfo.appendChild(displayMessage);
    reviewsArea.appendChild(reviewInfo);

    userPictureArea.appendChild(userPictureIcon);
    reviewsArea.appendChild(userPictureArea);
    reviewResults.appendChild(reviewsArea);

    votingButtons.addEventListener('click', function(event) {
      if (event.target.getAttribute("type") === "button") {

        var parent = event.target.parentElement;
        var grandParent = parent.parentElement;
        var message = grandParent.getElementsByClassName('show-message')[0];
        $(message).toggleClass('show');
      }
    });
    reviewResults.appendChild(reviewsRow);
  }

// event listener to submit review
  submit.addEventListener('click', function(event){
    var write = document.getElementById('write').value;
    var myReview = new Object();
    myReview.user = '@alysiasaquil';
    myReview.userIcon = 'images/alysia.jpg';
    myReview.rating = select.value;
    myReview.review = write;

    var location = document.getElementById('location').value;
    var myLocation = new Object();
    myLocation.addLocation = location;

    restaurant.reviews.unshift(myReview);

//creating element to display own review
    var ownReviewArea = document.createElement('div');
    ownReviewArea.className = 'media';
    ownReviewArea.setAttribute('width', '300px');

    var userPictureArea = document.createElement('div');
    userPictureArea.setAttribute('class', 'media-left');

    var userPictureIcon = document.createElement('img');
    userPictureIcon.className = 'media-object img-circle';
    userPictureIcon.setAttribute('width', '100px');
    userPictureIcon.src = myReview.userIcon;

    var rating = document.createElement('div');
    rating.textContent = "User's Rating: " + myReview.rating;
    rating.appendChild(star);

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
    ownReviewArea.appendChild(reviewInfo);

    userPictureArea.appendChild(userPictureIcon);
    ownReviewArea.appendChild(userPictureArea);
    reviewResults.appendChild(ownReviewArea);
  });
  return reviewResults;
};
