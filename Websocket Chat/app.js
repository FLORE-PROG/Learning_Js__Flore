const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Connect to the WebSocket server
const socket = new WebSocket('ws://localhost:3000');

// Handle incoming messages
socket.addEventListener('message', event => {
    const message = event.data;
    const p = document.createElement('p');
    p.textContent = message;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
});

// Send a message when the Send button is clicked
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        socket.send(message);
        messageInput.value = '';
    }
});

// Send a message when the Enter key is pressed
messageInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

