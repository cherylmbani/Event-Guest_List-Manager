
// Must always use an event listener. Waits until the HTML page has downloaded completely

// This will not work: 
// document.onDOMContentLoaded = function(){ console.log("DOM content loaded"); };
// Reason: there's no use of addEventListener in that line.

document.addEventListener("DOMContentLoaded", () => {
  // Access the form element
  const form = document.querySelector("form");

  // Access the input element using its ID
  const input = document.getElementById("guest-name");

  // Access the guest list <ul> by its ID
  const guestList = document.getElementById("guest-list");

  // Add an event listener for when the form is submitted
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const guestName = input.value.trim(); // Get the trimmed input value

    // If the input is empty, exit the function
    if (!guestName) return;

    // Limit the number of guests to 10
    if (guestList.children.length >= 10) {
      alert("Maximum of 10 guests allowed!");
      input.value = ""; // Clear the input
      return;
    }

    // Create a new <li> element for the guest name
    const li = document.createElement("li");
    li.textContent = guestName;

    // === RSVP Button ===

    // Create the RSVP button
    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Not Attending";
    rsvpBtn.style.marginLeft = "10px";

    // Add click event to toggle RSVP status
    rsvpBtn.addEventListener("click", () => {
      if (rsvpBtn.textContent === "Not Attending") {
        rsvpBtn.textContent = "Attending";
        rsvpBtn.style.backgroundColor = "green";
      } else {
        rsvpBtn.textContent = "Not Attending";
        rsvpBtn.style.backgroundColor = "";
      }
    });

    // === Remove Button ===

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.backgroundColor = "#d9534f";
    removeBtn.style.color = "#fff";

    // Add click event to remove the guest from the list
    removeBtn.addEventListener("click", () => {
      guestList.removeChild(li);
    });

    // Append the buttons to the <li>, then add the <li> to the list
    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
    guestList.appendChild(li);

    // Clear the input field
    input.value = "";
  });
});
