const socket = io('http://localhost:8000');

// Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

// Audio that will play on receiving messages
var audio = new Audio('ting.mp3');

// Function which will append event info to the contaner
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='left'){ 
        audio.play();
    }
}


// Ask new user for his/her name and let the server know
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

// If a new user joins, receive his/her name from the server
socket.on('user-joined', name =>{
    append(`<strong>${name}</strong> joined the chat`, 'right')
})

// If server sends a message, receive it
socket.on('receive', data =>{
    append(`<strong>${data.name}:</strong> ${data.message}`, 'left')
})

// If a user leaves the chat, append the info to the container
socket.on('left', name =>{
    append(`<strong>${name}</strong> left the chat`, 'right')
})

// If the form gets submitted, send server the message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`<strong>You:</strong> ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})
var boldCount = 0;
var italicCount = 0;
var strikethroughCount = 0;
var linkCount = 0;
var ulCount = 0;
var olCount = 0;
var codeCount = 0;
function boldCliked()
{
    if(boldCount%2==0)
    {
        document.getElementById("messageInp").style.fontWeight = "bold";
    }
    else
    {
        document.getElementById("messageInp").style.fontWeight = "normal";        
    }
    boldCount++;
}
function italicCliked()
{
    if(italicCount%2==0)
    {
        document.getElementById("messageInp").style.fontStyle = "italic";
    }
    else
    {
        document.getElementById("messageInp").style.fontStyle = "normal";        
    }
    italicCount++;
}
function strikethroughCliked()
{
    if(strikethroughCount%2==0)
    {
        document.getElementById("messageInp").style.textDecorationLine = "line-through";
    }
    else
    {
        document.getElementById("messageInp").style.textDecorationLine = "none";        
    }
    strikethroughCount++;
}
function linkCliked()
{
    if(linkCount%2==0)
    {
        document.getElementById("messageInp").style.textDecorationLine = "underline";
        document.getElementById("messageInp").style.color = "blue";
    }
    else
    {
        document.getElementById("messageInp").style.textDecorationLine = "none";
        document.getElementById("messageInp").style.color = "black";
    }
    linkCount++;
}
function ulCliked()
{
    if(ulCount%2==0)
    {
        document.getElementById("messageInp").style.fontWeight = "bold";
    }
    else
    {
        document.getElementById("messageInp").style.fontWeight = "normal";        
    }
    ulCount++;
}
function olCliked()
{
    if(olCount%2==0)
    {
        document.getElementById("messageInp").style.fontWeight = "bold";
    }
    else
    {
        document.getElementById("messageInp").style.fontWeight = "normal";        
    }
    olCount++;
}
function codeCliked()
{
    if(codeCount%2==0)
    {
        document.getElementById("messageInp").style.fontFamily = "courier";
    }
    else
    {
        document.getElementById("messageInp").style.fontFamily = "Roboto,s\ans-serif";        
    }
    codeCount++;
}