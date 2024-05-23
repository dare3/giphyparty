document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the search term from the input field
    const searchTerm = document.getElementById('search-term').value;

    // Construct the API URL with the search term
    const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`;

    // Use Axios to make the API request
    axios.get(apiUrl)
        .then(response => {
            // Get the first GIF from the response data
            const gifUrl = response.data.data[0].images.fixed_height.url;

            // Create a div element for the grid item
            const gifContainer = document.createElement('div');
            gifContainer.className = 'col-md-3 mb-4';

            // Create an img element and set its src attribute to the GIF URL
            const gifElement = document.createElement('img');
            gifElement.src = gifUrl;
            gifElement.className = 'gif-img img-thumbnail'; // Add Bootstrap border and spacing classes

            // Append the img element to the div
            gifContainer.appendChild(gifElement);

            // Append the div element to the gif-container
            document.getElementById('gif-container').appendChild(gifContainer);
        })
        .catch(error => {
            console.error('Error fetching data from GIPHY API:', error);
        });
});

// Add event listener to the clear button to remove all GIFs
document.getElementById('clear-gifs').addEventListener('click', function() {
    // Clear the contents of the gif-container div
    document.getElementById('gif-container').innerHTML = '';
});