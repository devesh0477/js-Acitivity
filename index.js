function picture(){
    var image = document.createElement('img'); 
    var selectDiv = document.getElementById('imageOutput');
    image.src = "https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif"; 
     selectDiv.appendChild(image);
}


function alertButton(){
    alert("Hello ! Have a nice day ahead :)");
    console.log("dcsbc");
}

document.getElementById("activity").onmouseover = function() 
{
    document.getElementById("tex").innerHTML = "YES! HOVER IS WORKING"
}