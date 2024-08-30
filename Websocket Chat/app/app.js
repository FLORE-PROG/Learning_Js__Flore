const socket = new WebSocket('ws://localhost:3000');

// Function to handle sending messages when the form is submitted
function sendMessage(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const input = document.querySelector('input');
    
    // Check if the input field is not empty
    if (input.value) {
        socket.send(input.value); // Send the message to the server
        input.value = ""; // Clear the input field
    }
    input.focus(); // Focus the input field again
}

// Add an event listener to the form to handle the submit event
document.querySelector('form')
    .addEventListener('submit', sendMessage);

// Listen for messages from the WebSocket server
socket.addEventListener('message', (event) => {
    let message;

    if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
            message = reader.result;
            displayMessage(message);
        };
        reader.readAsText(event.data);
    } 

    else if (event.data instanceof ArrayBuffer) {
        const decoder = new TextDecoder('utf-8');
        message = decoder.decode(new Uint8Array(event.data));
        displayMessage(message);
    }
    else {
        message = event.data;
        displayMessage(message);
    }

    
});

function displayMessage(message) {
    const list = document.createElement('li');
    list.textContent = message;
    document.querySelector('ul').appendChild(list);
}

// event handlers for websockets
socket.addEventListener('open', () => {
    console.log('WebSocket connection opened');
});

socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});
