document.addEventListener(
    'DOMContentLoaded',
    function(){
        doc = document
        const messageContainer = doc.querySelector('#message_container');
        const messageInput = doc.querySelector('[name=message_input]');
        const sendMessageButton = doc.querySelector('[name=send_message_button]');

        let websocketClient = new WebSocket("ws://localhost:12345");

        websocketClient.onopen = function(){
            console.log("Conected!")
            
            sendMessageButton.onclick = function(){
                websocketClient.send(messageInput.value);
                messageInput.value = "";
            };
        };

        websocketClient.onmessage = function(message){
            let newMessage = document.createElement('div')
            newMessage.innerHTML = message.data;
            messageContainer.appendChild(newMessage);
        };

    },
    false
);