//Get elements from the html document
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const container = document.getElementById("image-container");

//Define the Unsplash API endpoint and the API key
const apiEndPoint = "https://api.unsplash.com/search/photos";
const apiKey = "ZA5x5CsAkQKgP21HcM34bVCvavaMdp6dOpp-VIz9P-A";

//Define a function to fetch and display images from the unsplash API
function fetchImages(query) {
    //Clear the previous images from the container
    container.innerHTML = "";
    //Build the API Url with the query and the API key as parameters
    const url = `${apiEndPoint}?query=${query}&client_id=${apiKey}`;
    //Use a fetch method to send a GET request to the API
    fetch(url)
    .then((res) => res.json())  //Convert the response to JSON format
    .then(data => {
        //Use the forEach method to loop through the results
        data.results.forEach((result) => {
            //Create an <img> element for each result
            const img = document.createElement("img");
            //Set the src attribute to the result's urls.regular property
            img.setAttribute("src", result.urls.regular);
            //Append the img element to the container
            container.appendChild(img);
        });
    })
    //Catch any errors that may occur during the fetch operation
    .catch(error => console.error(error));
}

//Use the addEventListener method to listen for the submit event on the form
form.addEventListener("submit", event => {
    //Use the preventDefault method to prevent the default behavior of reloading the page
    event.preventDefault();
    //Get the value of the input element
    const query = input.value;
    //Call the fetchImages function with the query as an argument
    fetchImages(query);
});