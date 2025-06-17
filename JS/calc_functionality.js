// Array to contain numbers user enters
const numbers = [];

// Set initial states for page
const stopButton = document.getElementById("finish");
const showMyNumbers = document.getElementById("showNos");
showMyNumbers.style.display = "none";
stopButton.disabled = true;
const userInstruction = document.getElementById("instruction");
const inputField = document.getElementById("userChoice");
inputField.focus();

// Array of prompts for text input labels
const prompts = [
  "Please enter another number",
  "And another",
  "Yet another number",
  "Keep going!",
  "Almost there!",
  "Enter another number, then you can see your average if you want",
];

// Define 'add' and 'form' for use with event listener
const add = document.getElementById("next");
const form = document.querySelector("form");

// Create event for when user clicks 'Next!'
add.addEventListener("click", save);

// Function to add user inputs to numbers array
function save() {
  // Variable for number input by user
  let userInput = inputField.value;

  // Eliminate commas if user includes them in large numbers
  if (userInput.includes(",")) {
    userInput = userInput.replaceAll(",", "");
  }

  // Regex to check validity of inputs
  const regex = /^(^[1-9][0-9\.]{1,})$/;

  // Alert user and reset form if input not valid
  if (!regex.test(userInput)) {
    alert(
      "You must enter a number!"
    );
    form.reset();
    inputField.focus();
  } else {
    // Convert input to number and add to array
    let num = Number(userInput);
    numbers.push(num);

    // Change prompt in form label and clear box to receive another input
    let message = prompts[numbers.length - 1];
    userInstruction.innerText = message;
    form.reset();
    inputField.focus();

    // Enable 'Stop!' once numbers array reaches 6 in length
    if (numbers.length > 5) {
      stopButton.disabled = false;

      // Give use option of adding more numbers
      userInstruction.innerText =
        "Feel free to add more numbers or click 'Stop!' to see your average";
    }
  }
}

// Create event for when user clicks 'Stop!'
stopButton.addEventListener("click", calculate);

// Function to calculate average and display on page
function calculate() {
  // Clear input field and prompt label
  form.reset();
  inputField.blur();
  userInstruction.innerText = "";

  // Calculate average to 3 decimal places
  let sum = numbers.reduce((acc, number) => acc + number);
  let average = sum / numbers.length;
  average = average.toFixed(5);

  // Insert commas in large numbers to enhance readability for users
  const avString = average.toString();
  const avArray = avString.split("");
  const decimals = avArray.slice(-6);
  let integers = avArray.slice(0, avArray.length - 6);
  let reverseIntegers = integers.reverse();
  for (i = 0; i < reverseIntegers.length; i += 4) {
    reverseIntegers.splice(i, 0, ",");
  }
  integers = reverseIntegers.reverse();
  integers.pop();

  // Remove trailing zeros after decimal point
  if (decimals.includes("0")) {
  const cutoff = decimals.indexOf("0");
  decimals = decimals.slice(0, cutoff);
}

  // Combine integers and decimals
  let numberArray = integers.concat(decimals);
  let newAverage = numberArray.join("");
  if (newAverage[newAverage.length - 1] === ".") {
    newAverage = newAverage.slice(0, newAverage.length - 1);
  }

  // Display result of calculation to user
  const finalOutput = document.getElementById("output-text");
  finalOutput.innerHTML = `The average of your numbers is:\t<span>${newAverage}</span>`;
  document.getElementById("output").style.display = "block";
}

// Add second event to stop button
stopButton.addEventListener("click", showReminderBtn);

// Function to display 'See your Numbers' button
function showReminderBtn() {
  showMyNumbers.style.display = "block";
}

// Display numbers user has entered
showMyNumbers.addEventListener("click", userNos);
function userNos() {
  const numbersList = numbers.join(", ");
  const reminder = document.getElementById("show-numbers");
  reminder.innerHTML = `<b>Your numbers were:</b>\t${numbersList}`;
}
