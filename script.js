// Get the quiz container element
var quizContainer = document.getElementById("quiz-container");

// Array to store the questions
var questions = [];

// Current question index
var currentQuestion = 0;

// Array to store the selected answers
var selectedAnswers = [];

// Function to select an answer
function selectAnswer() {
  selectedAnswers[currentQuestion] = this.value;
}

// Function to go to the previous question
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuiz();
  }
}

// Function to go to the next question
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuiz();
  }
}
// Function to render the quiz
function renderQuiz() {
  quizContainer.innerHTML = "";

  // Render the question
  var h2 = document.createElement("h2");
  h2.innerHTML = questions[currentQuestion].question;
  quizContainer.appendChild(h2);

  // Render the answers
  var ul = document.createElement("ul");
  ul.classList.add("answers");
  var answers = questions[currentQuestion].options;
  for (var i = 0; i < answers.length; i++) {
    // Declare the input and li variables inside the loop
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = i;
    input.checked = i == selectedAnswers[currentQuestion];
    input.addEventListener("click", selectAnswer);
    var li = document.createElement("li");
    li.classList.add("answer");
    li.appendChild(input);
    var label = document.createElement("label");
    label.innerHTML = answers[i];
    li.appendChild(label);
    ul.appendChild(li);

    // Add a click event listener to the li element and pass the input and li variables as parameters
    li.addEventListener("click", function (input, li) {
      // Call the click method on the input element to activate it
      input.click();
    }.bind(null, input));
  }
  quizContainer.appendChild(ul);


  // Render the navigation buttons
  var div = document.createElement("div");
  div.classList.add("navigation");
  var buttonPrev = document.createElement("button");
  buttonPrev.innerHTML = "Prev";
  buttonPrev.addEventListener("click", prevQuestion);
  div.appendChild(buttonPrev);
  var buttonNext = document.createElement("button");
  buttonNext.innerHTML = "Next";
  buttonNext.addEventListener("click", nextQuestion);
  div.appendChild(buttonNext);
  quizContainer.appendChild(div);

  // Create the submit button
  var buttonSubmit = document.createElement("button");
  buttonSubmit.innerHTML = "Submit";
  buttonSubmit.addEventListener("click", submitQuiz);

  // Add a style to the submit button
  buttonSubmit.style.display = "block";
  buttonSubmit.style.margin = "10px auto";

  // Append the submit button to the quiz container
  quizContainer.appendChild(buttonSubmit);


  // Function to submit the quiz
  function submitQuiz() {
    // Calculate the number of correct answers
    var correctAnswers = 0;
    for (var i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] == questions[i].correctAnswer) {
        correctAnswers++;
      }
    }

    // Clear the quiz container
    quizContainer.innerHTML = "";

    // Display the results
    var h2 = document.createElement("h2");
    h2.innerHTML = "You got " + correctAnswers + " out of " + questions.length + " questions correct!";
    quizContainer.appendChild(h2);
  }

  /// Function to submit the quiz
  function submitQuiz() {
    // Calculate the number of correct answers
    var correctAnswers = 0;
    for (var i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] == questions[i].correctAnswer) {
        correctAnswers++;
      }
    }

    // Calculate the percentage of correct answers
    var percentage = Math.round((correctAnswers / questions.length) * 100);

    // Clear the quiz container
    quizContainer.innerHTML = "";

    // Create the wheel of percentage
    var div = document.createElement("div");
    div.classList.add("wheel");

    // Set the color of the wheel based on the percentage
    if (percentage < 20) {
      div.style.borderColor = "red";
    } else if (percentage < 40) {
      div.style.borderColor = "orange";
    } else if (percentage < 60) {
      div.style.borderColor = "yellow";
    } else if (percentage < 80) {
      div.style.borderColor = "green";
    } else {
      div.style.borderColor = "blue";
    }

    // Set the wheel to be a circle with a 13px border and a 9px margin between the border and the percentage value
    div.style.borderRadius = "50%";
    div.style.textAlign = "center";
    div.style.margin = "20px";
    div.style.lineHeight = "200px";
    div.style.borderWidth = "13px";
    div.style.padding = "9px";
    div.innerHTML = percentage + "%";
    quizContainer.appendChild(div);

    // Display the results
    var h2 = document.createElement("h2");
    h2.innerHTML = "You got " + correctAnswers + " out of " + questions.length + " questions correct!";
    quizContainer.appendChild(h2);

    // Create the retake button
    var buttonRetake = document.createElement("button");
    buttonRetake.innerHTML = "Retake";
    buttonRetake.addEventListener("click", function () {
      // Reset the quiz
      currentQuestion = 0;
      selectedAnswers = [];
      renderQuiz();
    });
    quizContainer.appendChild(buttonRetake);
  }

// Add the retake button to the quiz container
quizContainer.appendChild(buttonRetake);

}


// Load the questions from the JSON file
fetch("questions.json")
  .then(response => response.json())
  .then(json => {
    questions = json;

    // Set the current question to the first question
    currentQuestion = 0;

    // Render the quiz
    renderQuiz();
  });



  //Follow me on twitter
function createTwitterButton() {
  var twitterButton = document.createElement("button");
  twitterButton.classList.add("twitter-follow-button");
  twitterButton.setAttribute("href", "https://twitter.com/baubakaer");
  twitterButton.innerHTML = "Follow @my_twitter_handle";
  document.getElementById("twitter-button").appendChild(twitterButton);
}

window.addEventListener("load", createTwitterButton);

twitterButton.addEventListener("click", function() {
  twitterButton.style.display = "none";
});


