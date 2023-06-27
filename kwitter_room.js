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


     user_name = localStorage.getItem("user name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



      function addRoom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                purpose:"addingroomname"
            });
            localStorage.setItem("room_name",room_name);
            window.location = "Kwitter_page.html";
        }
        
        
        
        function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("room_name- "+Room_names);
        row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRooomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
        
        
        
         });
        });
        
        }
        getData();
        
        function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html"
        }
function logout(){
    localStorage.removeItem("user name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}