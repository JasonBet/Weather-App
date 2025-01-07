export async function displayGif(phrase) {
    const displayContainer = document.getElementById("gif-div");
    displayContainer.innerHTML = "";
    const img = document.createElement("img");
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=MUMTKqXxp5QgYBCLlhmHJXmC7omeLXsJ&s=${phrase}`);

    const imgData = await response.json();
    img.src = await imgData.data.images.original.url;

    displayContainer.appendChild(img);
}