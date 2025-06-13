// Must always use an event listener. Waits until the html page has downloded completely

//document.onDOMContentLoaded = function(){onsole.log("DOM content loaded");}. This will not wor because there is no addEventListener.
// document.addEventListener("DOMContentLoaded", () => {

 const form = document.querySelector("form");  // Accesses the form element

  const input = document.getElementById("guest-name"); // Access the input element using its Id and assigns it to a variable 

  // Accesses the guest list <ul> by its ID
  const guestList = document.getElementById("guest-list");

  // Add an event listener for when the form is submitted. It has three parameters, the event, what happens after event executed and a third parameter that is optional.
  form.addEventListener("submit", function (event) {
     event.preventDefault();
     const guestName = input.value.trim();

    // If the input is empty, exit the function and do nothing
    if (!guestName) return;

    // Limit to 10 guests; show alert and clear input if over limit
    if (guestList.children.length >= 10) {
      alert("Maximum of 10 guests allowed!");
      input.value = ""; // clear the input
      return;
    }

    // .createElment to create a new element
    const li = document.createElement("li");
    li.textContent = guestName;

    // === RSVP Button ===

    // Create a new button element for RSVP
    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Not Attending";


    rsvpBtn.style.marginLeft = "10px";

    // Add a click event to toggle RSVP status
    rsvpBtn.addEventListener("click", () => {
      if (rsvpBtn.textContent === "Not Attending") {
        rsvpBtn.textContent = "Attending";               // change text
        rsvpBtn.style.backgroundColor = "green";         // change color to green
      } else {
        rsvpBtn.textContent = "Not Attending";           // revert text
        rsvpBtn.style.backgroundColor = "";              // remove background color
      }
    });

    