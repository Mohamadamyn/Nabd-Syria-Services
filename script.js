
document.addEventListener("DOMContentLoaded", function() {
    let chatBox = document.getElementById("chat-box");
    let input = document.getElementById("chat-input");
    let sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function() {
        let message = input.value.trim();
        if (message !== "") {
            let newMessage = document.createElement("p");
            newMessage.textContent = "أنت: " + message;
            chatBox.appendChild(newMessage);
            input.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });
});