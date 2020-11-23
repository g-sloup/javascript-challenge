// from data.js
var tableData = data;
// Get a referece to the table body
var tbody = d3.select("tbody");

// Loop Through `data`do display entire dataset 

tableData.forEach((ufoData) => {
	console.log(ufoData);
	// Append one table row for each UFO sighting
	var row = tbody.append("tr");

	// Use `Object.entries` to console.log each
	Object.entries(ufoData).forEach(([key, value]) => {
    	console.log(key, value);
		// Update each cell's text with UFO sighting values 
		var cell = row.append("td");
		cell.text(value);
	});
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handler 
button.on("click", function() { 
	// Remove existing table
	d3.select("tbody").html("");
	//  Prevent the page from refreshing
	d3.event.preventDefault();
	
	//  Select the input element and get the value property
	var inputValue = d3.select("#datetime").property("value");
	console.log(inputValue);

	// Filter Data with datetime = input value
	var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
	console.log(filteredData);

// Loop through filtered data & save row 
filteredData.forEach((ufoData) => {
	// Append one table row `tr` for each UFO Sighting object
	var row = tbody.append("tr");

	// Use `Object.entries` to console.log each UFO Sighting value
	Object.entries(ufoData).forEach(([key, value]) => {
		console.log(key, value);
		// Append a cell to the row for each value
		var cell = row.append("td");
		cell.text(value);
		});
});
});