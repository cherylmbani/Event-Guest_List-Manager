
// Must always use an event listener. Waits until the HTML page has downloaded completely

// This will not work: 
// document.DOMContentLoaded = function(){ console.log("DOM content loaded"); };
// Reason: there's no use of addEventListener in that line.

document.addEventListener("DOMContentLoaded", function(){ // the script is inside the head so to start using JS, the HTML has to be fully loaded
  //console.log(" i am loaded");
  const form = document.querySelector("form");  // accesses the form element and storing in the form variable
  const input = document.getElementById("guest-name");   //accessing the input elemnt using its Id and storing it in the input variable
  const guestList = document.getElementById("guest-list"); // Accesses the list denoated by <ul> usinng its Id and stor it in the guestList variable
  
  form.addEventListener("submit", function(e){
    e.preventDefault(); // This prevents a default behavior of the browser such as reloading after the event is done
    
  const guestName = input.value.trim(); 

  if(!guestName) return;

  if(guestList.children.length >= 10) {
    alert("Maximum of 10 guests allowed!");
    input.value = ""; // Clear the input
    return;
  }
 // Now, create an element, li, that will contain the names of the guest lists and assign it to a variable.
  const li = document.createElement("li");
  li.textContent = guestName;

 // We now create an element button with the text, Not Attending.
  const rsvpBtn = document.createElement("button");
  rsvpBtn.textContent = "Not Attending";
  rsvpBtn.style.marginLeft = "10px";


  rsvpBtn.addEventListener("click", function(){
    if (rsvpBtn.textContent === "Not Attending"){
      rsvpBtn.textContent = "Attending";
      rsvpBtn.style.backgroundColor = "green";
    } else {
      rsvpBtn.textContent = "Not Attending";
      rsvpBtn.style.backgroundColor = "";

    }
  });

  // Remove the button
  const removeGuestBtn = document.createElement("button");

   removeGuestBtn.textContent = "Remove";
   removeGuestBtn.style.marginLeft = "10px";
   removeGuestBtn.style.backgroundColor = "#d9534f";
   removeGuestBtn.style.color = "#fff";

   // We add an event, click, that removes a guest from the guest list
   removeGuestBtn = document.addEventListener("click". function(){
    guestList.removeChild(li);
   });

   // Now we append the buttons to the list
   li.appendChild(rsvpBtn);
   li.appendChild(removeBtn);

   // now append the list to the guestList
   guestList.appendChild(li);

   input.value = "";

  });

});
