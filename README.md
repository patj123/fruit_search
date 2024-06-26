# Fruit Autocomplete Project

This project is an autocomplete search bar that suggests various types of fruits as you type. The suggestions appear in a dropdown list below the search bar.

## Features

- **Autocomplete Search Bar**: As you type, it suggests fruits that start with the entered characters.
- **Case Insensitivity**: The search is case insensitive, meaning it will match both uppercase and lowercase letters.
- **Emojis**: Fruits are displayed with their corresponding emojis where available.

## Usage

1. Clone the repository or download the project files.
2. Open `index.html` in your web browser to view the project.

## Files

- `index.html`: The main HTML file containing the structure of the search bar.
- `style.css`: The CSS file for styling the search bar and suggestions dropdown.
- `script.js`: The JavaScript file containing the logic for the autocomplete functionality.

## JavaScript Functions

- `search(str)`: Filters the fruit list to include only items that start with the input string (case insensitive).
- `searchHandler(e)`: Handles the `keyup` event on the input field, gets the current input value, and shows suggestions.
- `showSuggestions(results, inputVal)`: Displays the filtered results as a dropdown list.
- `useSuggestion(e)`: Handles the click event on a suggestion, sets the input field value to the clicked suggestion, and clears the dropdown list.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```zsh
   git clone https://github.com/yourusername/fruit-autocomplete.git
   ```
2. Navigate to the project directory:
   ```zsh
   cd fruit-autocomplete
   ```
3. Open `index.html` in your web browser to view the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

