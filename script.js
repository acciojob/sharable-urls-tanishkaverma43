// your code here
document.getElementById('button').addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from being submitted
  // get the values of the input fields
  var name = document.getElementById('name').value;
  var year = document.getElementById('year').value;
  // create the query string
  var queryString = '?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);
  // append the query string to the h3 element's text
  document.getElementById('url').textContent += queryString;
});