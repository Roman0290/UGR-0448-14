let number = document.getElementById("number");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");

let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function updateNumber() {
  if (counter <= 96) {
    number.innerHTML = "HTML " + counter + "%";
    counter++;
  }
}

function updateNumber1() {
  if (counter1 <= 62) {
    number1.innerHTML = "JAVASCRIPT " + counter1 + "%";
    counter1++;
  }
}

function updateNumber2() {
  if (counter2 <= 79) {
    number2.innerHTML = "CSS " + counter2 + "%";
    counter2++;
  }
}

function updateNumber3() {
  if (counter3 <= 56) {
    number3.innerHTML = "JQUERY " + counter3 + "%";
    counter3++;
  }
}

setInterval(updateNumber, 20);
setInterval(updateNumber1, 20);
setInterval(updateNumber2, 20);
setInterval(updateNumber3, 20);

// contact-page
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
  
    // Get the values from the form inputs
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Perform any necessary validation or processing of the form data
    // ...
  
    // Display a success message
    alert("Form submitted successfully!");
  
    // Reset the form
    document.getElementById("contact-form").reset();
  }
  
  // Attach event listener to the form submit button
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", handleSubmit);