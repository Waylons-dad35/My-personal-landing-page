const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' 
    : "Light Mode"

  modeStatus.innerText = "currently in" + modeMessage;
}
modeToggle.addEventListener('click', toggleMode);

//random quote generator//

const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "— Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "— Theodore Roosevelt"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "— Thomas Edison"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "— Confucius"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "— Winston Churchill"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "— Socrates"
  }
]

button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});

/*validation for contact form */

function validateForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let successMessage = document.getElementById("success-message");


  let isValid = true;

  /* Validate name */
  if (name.value === "") {
    displayError("name-error", "Name is required");
    isValid = false;
  }

  /* Validate email */
  if (!isValidEmail(email.value)) {
    displayError("email-error", "Invalid email address");
    isValid = false;
  }
  

  if (isValid) {
    successMessage.innerHTML = "Form submitted successfully!";
    successMessage.style.color = "green";
  } else {
    successMessage.innerHTML = "";
  }

  return isValid;
}



/* Function to validate email format */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* Event listeners for input validation */
const formFields = document.querySelectorAll("input, textarea");
formFields.forEach((field) => {
  field.addEventListener("input", validateForm);
});

/* Enable or disable the submit button */
formFields.forEach((field) => {
  field.addEventListener("input", () => {
    let isValid = validateForm();
    let submitButton = document.getElementById("submit-btn");
    submitButton.disabled = !isValid;
  });
});
