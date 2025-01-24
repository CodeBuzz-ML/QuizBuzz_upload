var questions = [
  {
    question: "1. Who is an entrepreneur?",
    answer: "B) A person who starts and runs a business",
    options: [
      "A) A person who only works in an office",
      "B) A person who starts and runs a business",
      "C) A person who saves money",
      "D) A person who invests in stocks",
    ],
  },
  {
    question: "2. What is the primary goal of entrepreneurship?",
    answer: "C) Solving problems and creating value",
    options: [
      "A) Gaining popularity",
      "B) Avoiding risks",
      "C) Solving problems and creating value",
      "D) Copying others",
    ],
  },
  {
    question: "3. Which of the following is a characteristic of an entrepreneur?",
    answer: "A) Risk-taking ability",
    options: [
      "A) Risk-taking ability",
      "B) Fear of failure",
      "C) Lack of vision",
      "D) Avoiding responsibility",
    ],
  },
  {
    question: "4. What is the term for turning an idea into a product or service?",
    answer: "D) Innovation",
    options: [
      "A) Planning",
      "B) Marketing",
      "C) Funding",
      "D) Innovation",
    ],
  },
  {
    question: "5. Which skill is essential for an entrepreneur?",
    answer: "C) Problem-solving",
    options: [
      "A) Procrastination",
      "B) Avoiding communication",
      "C) Problem-solving",
      "D) Ignoring feedback",
    ],
  },
  {
    question: "6. What is a business plan?",
    answer: "A) A document outlining the business idea and strategy",
    options: [
      "A) A document outlining the business idea and strategy",
      "B) A personal goal-setting sheet",
      "C) A list of competitors",
      "D) A financial report",
    ],
  },
  {
    question: "7. Which of these is a quality of a successful entrepreneur?",
    answer: "B) Perseverance",
    options: [
      "A) Giving up easily",
      "B) Perseverance",
      "C) Ignoring challenges",
      "D) Overconfidence",
    ],
  },
  {
    question: "8. What is the first step in starting a business?",
    answer: "D) Identifying a business opportunity",
    options: [
      "A) Hiring employees",
      "B) Securing loans",
      "C) Launching the product",
      "D) Identifying a business opportunity",
    ],
  },
  {
    question: "9. Which term describes earning more than the cost of production?",
    answer: "C) Profit",
    options: [
      "A) Revenue",
      "B) Expense",
      "C) Profit",
      "D) Loss",
    ],
  },
  {
    question: "10. What is a startup?",
    answer: "B) A newly established business",
    options: [
      "A) A government enterprise",
      "B) A newly established business",
      "C) An educational institution",
      "D) A large corporation",
    ],
  },
  {
    question: "11. Which of these is an example of innovation?",
    answer: "C) Developing a new mobile app",
    options: [
      "A) Selling old products",
      "B) Using outdated methods",
      "C) Developing a new mobile app",
      "D) Copying a competitor's product",
    ],
  },
  {
    question: "12. What does market research help an entrepreneur understand?",
    answer: "A) Customer needs and preferences",
    options: [
      "A) Customer needs and preferences",
      "B) Competitors' secrets",
      "C) Employees' personal details",
      "D) Bank policies",
    ],
  },
  {
    question: "13. What is the purpose of branding?",
    answer: "D) To create a unique identity for the business",
    options: [
      "A) To increase expenses",
      "B) To confuse customers",
      "C) To avoid competition",
      "D) To create a unique identity for the business",
    ],
  },
  {
    question: "14. Which of these is a financial skill needed by entrepreneurs?",
    answer: "C) Budgeting",
    options: [
      "A) Ignoring costs",
      "B) Overspending",
      "C) Budgeting",
      "D) Avoiding investments",
    ],
  },
  {
    question: "15. What is the term for the money needed to start a business?",
    answer: "A) Capital",
    options: [
      "A) Capital",
      "B) Revenue",
      "C) Interest",
      "D) Profit",
    ],
  },
  {
    question: "16. What is the role of a mentor in entrepreneurship?",
    answer: "B) Guide and provide advice to the entrepreneur",
    options: [
      "A) Fund the business",
      "B) Guide and provide advice to the entrepreneur",
      "C) Work as an employee",
      "D) Handle customer complaints",
    ],
  },
  {
    question: "17. What is crowdfunding?",
    answer: "C) Raising money from a large number of people",
    options: [
      "A) Borrowing from banks",
      "B) Using personal savings",
      "C) Raising money from a large number of people",
      "D) Selling shares in the stock market",
    ],
  },
  {
    question: "18. What does 'scalability' in business mean?",
    answer: "D) Ability to grow without increasing costs significantly",
    options: [
      "A) Reducing quality",
      "B) Hiring fewer employees",
      "C) Limiting production",
      "D) Ability to grow without increasing costs significantly",
    ],
  },
  {
    question: "19. Which of these is an example of an entrepreneurial venture?",
    answer: "A) A local bakery started by an individual",
    options: [
      "A) A local bakery started by an individual",
      "B) A public school",
      "C) A government office",
      "D) A non-profit organization",
    ],
  },
  {
    question: "20. Which of these is NOT a challenge faced by entrepreneurs?",
    answer: "C) Unlimited funds",
    options: [
      "A) Financial risks",
      "B) Competition",
      "C) Unlimited funds",
      "D) Market uncertainty",
    ],
  },
];

questions_temp = {
  question: "",
  answer: "",
  options: "",
};

var quizHeader = document.getElementById("quizHeader");
var quizBody = document.getElementById("quizBody");
var qNum = 0;
var answers = []; //array to show the correct answers and false ones
var minutes = 0;
var seconds = 0;
var formattedMinutes = 0;
var formattedSeconds = 0;
var interval = 0;

function startQuiz() {
  document.getElementById("mainBody").style.display = "flex";
  document.getElementById("startBtn").style.display = "none";

  appendQuestion();
  interval = setInterval(function () {
    if (seconds < 59) seconds++;
    else {
      seconds = 0;
      if (minutes < 59) minutes++;
      else {
        minutes = 0;
        clearInterval(interval);
      }
    }
    formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById(
      "timer"
    ).innerHTML = `${formattedMinutes}:${formattedSeconds}`;
  }, 1000);
}
function appendQuestion() {
  quizHeader.innerHTML = `<h3 class='quizHeader'>Q${qNum + 1}/${
    questions.length
  }</h3><span id='timer'${minutes}:${seconds}</span>`;
  var divBody = `<h3 class='quizHeader'>Q: ${questions[qNum].question}</h3>`;
  divBody += "<ul class='option_group' id='option_group'>";
  for (var i = 0; i < questions[qNum].options.length; i++)
    divBody += `<li class='option' onclick='activeOpt(this)'>${questions[qNum].options[i]}</li>`;
  divBody += "</ul>";
  divBody +=
    "<button class='btn btn-primary nxtBtn' onclick='nxtQuestion()'>Next question</button>";
  quizBody.innerHTML = divBody;
}
function activeOpt(id) {
  var ul = document.getElementById("option_group");
  for (var i = 0; i < questions[qNum].options.length; i++) {
    if (ul.childNodes[i].className === "active")
      ul.childNodes[i].classList.remove("active");
    ul.childNodes[i].className = "option";
  }
  id.className = "active";
  if (id.innerHTML === questions[qNum].answer) answers[qNum] = true;
  else answers[qNum] = false;
}
function nxtQuestion() {
  if (!(typeof answers[qNum] === "undefined")) {
    if (qNum < questions.length - 1) {
      qNum++;
      appendQuestion();
    } else {
      qNum = 0;
      appendResult();
    }
  } else alert("please select an option");
}
function appendResult() {
  var correctQuestions = 0; // number of questions that were answered correctly
  document.getElementById("exitBtn").style.display = "none";
  clearInterval(interval);
  quizHeader.innerHTML = "<h3>Result</h3>";
  quizHeader.style.justifyContent = "center";
  var divBody = "";
  // for(var i=0; i<questions.length; i++) divBody += `<th>Q${i+1}</th>`
  divBody += "</thead><tbody>";
  for (var i = 0; i < questions.length; i++) {
    if (answers[i]) {
      divBody +=
        "<td><img style='width:20px; margin:5px; align-self: center;' src='Images/check.png'></td>";
      correctQuestions++;
    } else
      divBody +=
        "<td><img style='width:20px; margin:5px;'  src='Images/cancel.png'></td>";
  }

  divBody += "</tbody></table>";

  divBody += "<Table class='table table-bordered'><thead class='thead-dark'>";
  divBody += "<th>Points</th>";
  divBody += "<th>Percentage</th>";
  divBody += "<th>Time Taken (mm:ss)</th>";
  divBody += "</thead></tbody>";
  divBody += `<td>${correctQuestions}/${questions.length}</td>`;
  divBody += `<td>${(correctQuestions / questions.length) * 100}%</td>`;
  divBody += `<td>${formattedMinutes}:${formattedSeconds}</td>`;
  divBody += "</tbody></table>";

  divBody +=
    '<button class="btn btn-primary" onclick=history.go(-1)>Return Home</button>';
  quizBody.innerHTML = divBody;
}
