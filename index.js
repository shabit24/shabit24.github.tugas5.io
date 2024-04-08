// JavaScript for the webpage

// Function to display alert when audio is clicked


// Function to display alert when video is clicked
function videoClicked() {
    alert("Video is clicked!");
}

// Function to display alert when image is clicked
function imageClicked() {
    alert("Image is clicked!");
}

function audioClicked() {
    alert("Audio is clicked!");
}
// Adding event listeners to the elements

document.querySelector('video').addEventListener('click', videoClicked);
document.querySelector('img').addEventListener('click', imageClicked);

document.querySelector('audio').addEventListener('click', audioClicked);

