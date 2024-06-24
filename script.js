// Select the input element with the ID 'fruit' and store it in the variable 'input'
const input = document.querySelector('#fruit');

// Select the <ul> element inside the element with the class 'suggestions' and store it in the variable 'suggestions'
const suggestions = document.querySelector('.suggestions ul');

// Create an array named 'fruit' containing a list of fruit names as strings
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Define a function named 'search' that takes a string 'str' as a parameter
function search(str) {
	// Initialize an empty array 'results' to store the search results
	let results = [];

	// Check if the length of the input string 'str' is greater than 0
	if (str.length > 0) {
		// Filter the 'fruit' array to include only the items that contain the input string 'str' (case insensitive) and store the filtered results in the 'results' array
		results = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));
	}

	// Return the 'results' array containing the filtered fruit names
	return results;
}

// Define a function named 'searchHandler' that takes an event object 'e' as a parameter
function searchHandler(e) {
	// Get the value of the input field from the event object and store it in the variable 'inputVal'
	const inputVal = e.target.value;

	// Call the 'search' function with 'inputVal' as an argument and store the returned results in the variable 'results'
	const results = search(inputVal);

	// Call the 'showSuggestions' function with 'results' and 'inputVal' as arguments
	showSuggestions(results, inputVal);
}

// Define a function named 'showSuggestions' that takes two parameters: 'results' (an array of search results) and 'inputVal' (the current value of the input field)
function showSuggestions(results, inputVal) {
	// Clear the content of the 'suggestions' list by setting its 'innerHTML' to an empty string
	suggestions.innerHTML = '';

	// Check if the length of the input string 'inputVal' is greater than 0
	if (inputVal.length > 0) {
		// Iterate over each item in the 'results' array
		results.forEach(item => {
			// Create a new list item ('li') element
			const li = document.createElement('li');

			// Set the text content of the 'li' element to the current item from the 'results' array
			li.textContent = item;

			// Append the 'li' element to the 'suggestions' list
			suggestions.appendChild(li);
		});
	}
}

// Define a function named 'useSuggestion' that takes an event object 'e' as a parameter
function useSuggestion(e) {
	// Check if the clicked element's tag name is 'LI'
	if (e.target.tagName === 'LI') {
		// Set the value of the input field to the text content of the clicked list item
		input.value = e.target.textContent;

		// Clear the content of the 'suggestions' list
		suggestions.innerHTML = '';
	}
}

// Add an event listener to the input field that listens for 'keyup' events and calls the 'searchHandler' function when such an event occurs
input.addEventListener('keyup', searchHandler);

// Add an event listener to the 'suggestions' list that listens for 'click' events and calls the 'useSuggestion' function when such an event occurs
suggestions.addEventListener('click', useSuggestion);
