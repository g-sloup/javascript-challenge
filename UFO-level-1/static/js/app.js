// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");


// Loop Through `data` and console.log each UFO sighting object 

tableData.forEach(function(ufoData) {
	console.log(ufoData);

	// Use d3 to append one table row `tr` for each UFO sighting
	var row = tbody.append("tr");

	// Use `Object.entries` to console.log each
	Object.entries(ufoData).forEach(function([key, value]) {
    	console.log(key, value);

	// Update each cell's text with UFO sighting values 
	var cell = row.append("td");
	cell.text(value);
	});
});

// Select the button
var button = d3.select("#filter_btn");
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

// Complete the event handler function for the form
function runFilter() {

//  Prevent the page from refreshing
d3.event.preventDefault();
  
//  Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

var filteredUFO = tableData.filter(ufo => ufo.datetime === inputValue);

console.log(filteredUFO);
};

filteredUFO.forEach(function(filtered) {
console.log(filtered);

// Append one table row `tr` for each UFO Sighting object
var row = tbody.append("tr");
// Use `Object.entries` to console.log each UFO Sighting value
Object.entries(filtered).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
	});
});

// data.forEach(function(ufoData) {
//   console.log(ufoData);
//   var row = tbody.append("tr");

// Use d3 to append one table row `tr` for each UFO sighting

// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
// });

// LEVEL 1
// * Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data 
// for each UFO sighting.


// * Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the `date/time` column to find rows that match user input.




// LEVEL 2
// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can 
// to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`

// YOUR CODE HERE!
