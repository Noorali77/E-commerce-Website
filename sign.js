let signup = () =>{
   
    let name = document.getElementById("name").value.length;
     if (name === 0 ) {
     alert("Please Enter Your Name:");
     return false;
     }
     else if(name <=5 ){
         alert("Name must have atleast 6 Characters: ");
         return false;

     }

     else if(name >=17){
         alert("Name can contain only upto 16 Characters:")
     } 
        var speChar = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";   

     var data = document.getElementById("name").value;

     for (var i = 0; i < data.length; i++)

     {      

          if ( speChar.indexOf(data.charAt(i)) != -1)

         {    

         alert ("Your string has special characters. \nThese are not allowed.");

         return false; 
     }
     }
 

     var email = document.getElementById('email2').value.length;
     if(email === 0){
         alert("Providing an email is mandotory");
         return false;
     }

     
    let password = document.getElementById("password2").value.length;
     if (password === 0 ) {
     alert("Please Enter Your Password:");
     return false;
     }

     else if (password <=5 ) {
        alert("Password Should have minimun 6 characters");
        return false;
        }

    else if (password >=17 ) {
        alert("Password can contains only upto 16 characters:");
        return false;
        }

        var name1 = document.getElementById('name');
    


        var email1 = document.getElementById('email2');
        var password1 = document.getElementById('password2');

        var radios = document.getElementsByName("gender");
        var radios_value;
        for(var i = 0; i < radios.length; i++){
         if(radios[i].checked){
        radios_value = radios[i].value;
         }
        }


         var obj = {
             Name : name1.value,
             Email : email1.value,
             Password : password1.value,
             Gender : radios_value

         }
         var key = Math.random()*10000;
         firebase.database().ref('Signup'+key.toFixed()).push(obj);

         let localName = document.getElementById('name').value;
         localStorage.setItem('name',localName);

         let localEmail = document.getElementById('email2').value;
          localStorage.setItem('email',localEmail);

         let localPassword = document.getElementById('password2').value;
          localStorage.setItem('password',localPassword);

          localStorage.setItem('gender',radios_value)

        


         firebase.auth().createUserWithEmailAndPassword(email1.value, password1.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    
  window.location.href = 'index.html'
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('Please fill the form Correctly:')
   
  });





}

//signin code

let signin = ()=>{

 

  let localName = document.getElementById("localName").value;
  if (localName.length === 0 ) {
  alert("Please Enter Your Name:");
  return false;
  }
  else if(localName.length <=5 ){
      alert("Name must have atleast 6 Characters: ");
      return false;

  }

  else if(localName.length >=17){
      alert("Name can contain only upto 16 Characters:")
      return false;
  } 
    
  var speChar = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";   

  var data = document.getElementById("localName").value;

  for (var i = 0; i < data.length; i++)

  {      

       if ( speChar.indexOf(data.charAt(i)) != -1)

      {    

      alert ("Your string has special characters. \nThese are not allowed.");
        return false;
  }
  
  }

  localStorage.setItem('localName',localName)


  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      // Signed in
      var user = userCredential.user;
      window.location.href = 'flybuy.html'
  
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Invalid Email or Password:')
    });


  
    }

    let fb = ()=>{
     
   var provider = new firebase.auth.FacebookAuthProvider();
 
   firebase
   .auth()
   .signInWithPopup(provider)
   .then((result) => {
     var credential = result.credential;
 
     var user = result.user;
 
     var accessToken = credential.accessToken;

     localStorage.setItem('displayName',user.displayName)
 
     window.location.href = 'flybuy.html'

    

    
 
     // ...
   })
   .catch((error) => {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // The email of the user's account used.
     var email = error.email;
     // The firebase.auth.AuthCredential type that was used.
     var credential = error.credential;

     alert('Error!')
 
     // ...
   });
 }




    let webStore = document.getElementById('webStore')
webStore.innerHTML = `Welcome! ${localStorage.getItem('localName') || localStorage.getItem('displayName')}`



