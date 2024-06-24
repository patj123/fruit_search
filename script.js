// Select the input element with the ID 'fruit' and store it in the variable 'input'
const input = document.querySelector('#fruit');

// Select the <ul> element inside the element with the class 'suggestions' and store it in the variable 'suggestions'
const suggestions = document.querySelector('.suggestions ul');

// Create an array named 'fruit' containing a list of fruit names as strings
const fruit = [
	'Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐',
	'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson',
	'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin',
	'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry',
	'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen',
	'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine',
	'Nance', 'Olive 🫒', 'Orange 🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach 🍑',
	'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry',
	'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓',
	'Tamarillo', 'Tamarind', 'Yuzu', 'Açaí', 'Acerola', 'Ackee', 'African cucumber', 'American mayapple',
	'Araza', 'Atemoya', 'Babaco', 'Bacaba', 'Bael', 'Barbados cherry', 'Barberry', 'Bearberry', 'Beechnut',
	'Bignay', 'Biriba', 'Bitter melon', 'Black mulberry', 'Blood lime', 'Blood orange', 'Blue tongue',
	'Bolwarra', 'Bopple nut', 'Brazil nut', 'Breadfruit', 'Buddha’s hand', 'Buffaloberry', 'Camu camu',
	'Canistel', 'Capuli cherry', 'Carambola', 'Cardon', 'Ceylon gooseberry', 'Chempedak', 'Cherimoya',
	'Chilean guava', 'Chokeberry', 'Cloudberry', 'Cluster fig', 'Coco de mer', 'Cocoplum', 'Cornelian cherry',
	'Crowberry', 'Cupuaçu', 'Damson plum', 'Davidson’s plum', 'Desert lime', 'Dodder laurel', 'Double coconut',
	'Duku', 'Elephant apple', 'Emu apple', 'Emu berry', 'Fairy apple', 'False mastic', 'Farkleberry',
	'Fennel', 'Ficus', 'Finger lime', 'Forest strawberry', 'Fox grape', 'Fuyu persimmon', 'Genip', 'Ginger',
	'Gingerberry', 'Goji berry', 'Golden apple', 'Golden berry', 'Goumi', 'Graviola', 'Green almond',
	'Greengage', 'Ground plum', 'Hackberry', 'Hala fruit', 'Hardy kiwi', 'Hawthorn', 'Hog plum', 'Horned melon',
	'Horse apple', 'Huito', 'Ice cream bean', 'Illawarra plum', 'Indian almond', 'Indian fig', 'Indian gooseberry',
	'Indian jujube', 'Indian olive', 'Indian prune', 'Indian strawberry', 'Jaboticaba', 'Jamaican cherry',
	'Jamaican tangelo', 'Jambolan', 'Japanese persimmon', 'Jelly palm', 'Jocote', 'Jostaberry', 'Jujube',
	'Juneberry', 'Kabosu', 'Kaffir lime', 'Kaffir plum', 'Kahikatea', 'Kakadu plum', 'Kandis', 'Kantola',
	'Kappit', 'Karanda', 'Kepel', 'Keule', 'Key lime', 'Kiwano', 'Korlan', 'Kousa dogwood', 'Kumquat',
	'Kutjera', 'Lablab bean', 'Langsat', 'Lanzones', 'Lardizabala', 'Lemato', 'Lemon aspen', 'Lemon verbena',
	'Limeberry', 'Lingonberry', 'Lippens mango', 'Little gooseberry', 'Lucuma', 'Madrono', 'Malay apple',
	'Mammee apple', 'Mammea', 'Mamoncillo', 'Mandarin', 'Mandarinquat', 'Mangaba', 'Mango melon', 'Manoao',
	'Marang', 'Maraschino cherry', 'Marionberry', 'Marula', 'Mayapple', 'Medlar', 'Midgen berry', 'Mirabelle',
	'Mock strawberry', 'Monkey apple', 'Monkey orange', 'Monstera', 'Morinda', 'Mountain papaya', 'Mundu',
	'Murta', 'Muscadine', 'Musk cucumber', 'Musk melon', 'Nance', 'Natal plum', 'Navel orange', 'Nere',
	'Nettle', 'Nonda plum', 'Northern hackberry', 'Nutmeg', 'Nuytsia', 'Oblong lime', 'Oil palm', 'Olo',
	'Ombu', 'Onion', 'Opuntia', 'Orangelo', 'Oranji', 'Oregon grape', 'Ortanique', 'Paddy', 'Pandanus',
	'Papoose', 'Paradise nut', 'Passiflora', 'Pawpaw', 'Peach palm', 'Peanut butter fruit', 'Pearl millet',
	'Pequi', 'Pepino', 'Pereskia', 'Persian lime', 'Peruvian apple', 'Phalsa', 'Phalsa fruit', 'Pigeon pea',
	'Pigface', 'Pili nut', 'Pineberry', 'Pineapple guava', 'Pineapple sage', 'Pink grapefruit', 'Pitanga',
	'Pitaya', 'Pitomba', 'Pivka', 'Plumcot', 'Pomegranate', 'Pond apple', 'Poroporo', 'Possumhaw', 'Prairie turnip', 'Prickly pear', 'Primrose', 'Princess pine', 'Purple granadilla', 'Purple guava', 'Purple mangosteen', 
  'Queen garnet plum', 'Quenepa', 'Quinine', 'Rangpur', 'Red banana', 'Red currant', 'Red mombin', 'Red mulberry',
	'Red sage', 'Riberry', 'Rockmelon', 'Rollinia', 'Rose apple', 'Rose hip', 'Rosemary', 'Rosigold mango',
	'Rosy apple', 'Rumberry', 'Russian olive', 'Rutabaga', 'Salak', 'Santol', 'Sapodilla', 'Sapote', 'Sargent crabapple',
	'Sawo', 'Sea buckthorn', 'Seagrape', 'Serviceberry', 'Seven star fruit', 'Shagbark', 'Shepherd’s purse',
	'Sierra Leone', 'Silverberry', 'Sloe', 'Small persimmon', 'Snowberry', 'Soapberry', 'Soursop', 'Spanish cherry',
	'Spanish lime', 'Speckled apple', 'Speckled pear', 'Sphene', 'Spring snow', 'Staghorn', 'Star apple',
	'Star gooseberry', 'Starfruit', 'Strawberry guava', 'Strawberry pear', 'Sugar apple', 'Surinam cherry',
	'Sweet granadilla', 'Sweet lime', 'Sweet orange', 'Sweet pepper', 'Sycamore fig', 'Tamarind', 'Tangelo',
	'Tangerine', 'Tart cherry', 'Tazumal', 'Thimbleberry', 'Tomato', 'Tropic sun', 'Tropical almond', 'Tropical cherry',
	'Tropical fig', 'Umbu', 'Uvalha', 'Velvet apple', 'Velvet tamarind', 'Victoria plum', 'Vine apple',
	'Wax apple', 'Wax jambu', 'Wheat', 'Whortleberry', 'White currant', 'White mulberry', 'Wild cherry', 'Wild fig',
	'Wild grape', 'Wild lime', 'Wild mango', 'Wild orange', 'Wild passion fruit', 'Wild strawberry', 'Wineberry',
	'Wolfberry', 'Wood apple', 'Wood pear', 'Woolly apple', 'Yam', 'Yam bean', 'Yellow granadilla', 'Yellow passionfruit',
	'Youngberry', 'Zucchini', 'Zwetschge'
];


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

// Defining a function named 'showSuggestions' that takes two parameters: 'results' (an array of search results) and 'inputVal' (the current value of the input field)
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
