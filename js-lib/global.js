function logout(){
    firebase.auth().signOut().then(function() {
        console.log("logged out");

        sessionStorage.clear();

        window.location.replace("/");
      
    }).catch(function(error) {
        
        console.log(error);
        
    });
}