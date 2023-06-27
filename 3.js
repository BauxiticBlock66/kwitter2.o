const firebaseConfig = {
    apiKey: "AIzaSyDI-oFENTkJlmS5g4OxDvWwHmsL7cMu7KU",
    authDomain: "kwitter-b07e0.firebaseapp.com",
    databaseURL: "https://kwitter-b07e0-default-rtdb.firebaseio.com",
    projectId: "kwitter-b07e0",
    storageBucket: "kwitter-b07e0.appspot.com",
    messagingSenderId: "621992852301",
    appId: "1:621992852301:web:56f11ef1fa169d35e55504"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);






function send()
{
msg = document.getElementById("msg").value; firebase.database().ref (room_name).push({ name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updatelink(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>"

row = name_with_tag + message_with_tag + like_button + span_with_tag;

document.getElementById("output").innerHTML += row;

//End code
 } });  }); }
getData();



function updatelink(message_id){
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_links = Number(likes)+1;
    console.log(updated_links);
    firebase.database().ref(room_name).child(message_id).update({
        like: updated_links
    });
}

function logout(){
    localStorage.removeItem("user name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}