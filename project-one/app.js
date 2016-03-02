var foodPlaces = [
  {
    name: "Benihana",
    location: "Irvine, CA",
    link: "www.yelp.com/"
  },
  {
    name: "Urban Plates",
    location: "Irvine, CA",
    link: "www.yelp.com/"
  },
  {
    name: "Ruth's Chris Steak House",
    location: "Irvine, CA",
    link: "www.yelp.com/"
  },
  {
    name: "Capital Seafood",
    location: "Irvine, CA",
    link: "www.yelp.com"
  },
];

var searchDropDownList = document.getElementById('result-list');

function showList(foodPlaces) {
  var list = document.createElement('div');
  list.className = "list-group-item";
}
