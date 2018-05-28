function ValidateForm(){
  var validFirstname = false;
  var letters = /^[A-Za-z]+$/;
  var validLastname = false;
  var validPhone = false;
  var numbers = /^[0-9]+$/;
  var validUsername = false;
  var validUserPassword = false;
  var errorMessages ="";  // All the error messages are going to stay in this variable

  /*********** VALIDATES FIRST NAME ******** */
  if (myContact.firstname.value===null || myContact.firstname.value===""|| myContact.firstname.value.length > 20 || !myContact.firstname.value.match(letters))
     errorMessages += "<p>The first name must be less than 20 characters and it is required. Only letters are accepted.</p>";
     else
     validFirstname = true; 

  /*********** VALIDATES LAST NAME ******** */
  if (myContact.lastname.value===null || myContact.lastname.value===""|| myContact.lastname.value.length > 50 || !myContact.lastname.value.match(letters))
     errorMessages += "<p>The first name must be less than 50 characters and it is required. Only letters are accepted.</p>";
     else
     validLastname = true; 
  
  /*********** VALIDATES PHONE NUMBER ******** */
  if (myContact.phone.value===null || myContact.phone.value===""|| myContact.phone.value.length > 15 || !myContact.phone.value.match(numbers))
    errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers are accepted.</p>";
  else
    validPhone = true; 
  
  /*********** VALIDATES USERNAME ******** */
  if (myContact.username.value.length > 12 || myContact.username.value === null || myContact.username.value === "")
    errorMessages += "<p>The username must be less than 12 characters and it is required. Only letters and numbers are accepted.</p>";
    else
    validUsername = true;

  /*********** VALIDATES PASSWORD ******** */
  if (myContact.password.value===null || myContact.password.value===""|| myContact.password.value.length > 7)
     errorMessages += "<p>The password must be less than 15 characters and it is required</p>";
     else
     validUserPassword = true; 
 
  document.getElementById("errorMessages").innerHTML = errorMessages;

  // Make sure you return all the boolean variables that are checking each field
  return (validFirstname && validLastname && validPhone && validUsername && validUserPassword) ;
}
