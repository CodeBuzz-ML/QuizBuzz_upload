var questions = [
  {
    question: "1. What is the process of identifying your strengths and weaknesses called?",
    answer: "B) Self-awareness",
    options: [
      "A) Time management",
      "B) Self-awareness",
      "C) Stress management",
      "D) Goal setting",
    ],
  },
  {
    question: "2. Which of these is an example of a short-term goal?",
    answer: "D) Completing homework today",
    options: [
      "A) Becoming a doctor",
      "B) Saving for retirement",
      "C) Building a house",
      "D) Completing homework today",
    ],
  },
  {
    question: "3. What is a key element of time management?",
    answer: "A) Prioritization",
    options: [
      "A) Prioritization",
      "B) Procrastination",
      "C) Avoiding tasks",
      "D) Overworking",
    ],
  },
  {
    question: "4. What does stress management help achieve?",
    answer: "C) Better mental health",
    options: [
      "A) Higher stress levels",
      "B) Poor decision-making",
      "C) Better mental health",
      "D) Lack of focus",
    ],
  },
  {
    question: "5. What is the first step in effective goal setting?",
    answer: "D) Identifying what you want to achieve",
    options: [
      "A) Ignoring your weaknesses",
      "B) Making excuses",
      "C) Completing tasks quickly",
      "D) Identifying what you want to achieve",
    ],
  },
  {
    question: "6. Which of these is a characteristic of SMART goals?",
    answer: "C) Time-bound",
    options: [
      "A) Vague",
      "B) Unrealistic",
      "C) Time-bound",
      "D) Unmeasurable",
    ],
  },
  {
    question: "7. What is the ability to manage your emotions and behaviors called?",
    answer: "B) Self-regulation",
    options: [
      "A) Motivation",
      "B) Self-regulation",
      "C) Self-awareness",
      "D) Decision-making",
    ],
  },
  {
    question: "8. What is an effective way to avoid procrastination?",
    answer: "A) Breaking tasks into smaller steps",
    options: [
      "A) Breaking tasks into smaller steps",
      "B) Ignoring deadlines",
      "C) Overthinking",
      "D) Waiting for motivation",
    ],
  },
  {
    question: "9. What does self-motivation help you achieve?",
    answer: "D) Consistency in achieving goals",
    options: [
      "A) Laziness",
      "B) Poor performance",
      "C) Lack of discipline",
      "D) Consistency in achieving goals",
    ],
  },
  {
    question: "10. Which of these is a self-management skill?",
    answer: "C) Decision-making",
    options: [
      "A) Avoiding challenges",
      "B) Procrastination",
      "C) Decision-making",
      "D) Complaining",
    ],
  },
  {
    question: "11. What is the importance of self-management in the workplace?",
    answer: "A) Improves productivity",
    options: [
      "A) Improves productivity",
      "B) Creates conflicts",
      "C) Encourages laziness",
      "D) Leads to missed deadlines",
    ],
  },
  {
    question: "12. What is the best way to handle stress effectively?",
    answer: "D) Practicing relaxation techniques",
    options: [
      "A) Ignoring the stress",
      "B) Complaining about problems",
      "C) Overloading yourself with tasks",
      "D) Practicing relaxation techniques",
    ],
  },
  {
    question: "13. What is an example of self-discipline?",
    answer: "B) Following a routine",
    options: [
      "A) Skipping tasks",
      "B) Following a routine",
      "C) Ignoring deadlines",
      "D) Complaining about work",
    ],
  },
  {
    question: "14. Why is self-awareness important?",
    answer: "C) It helps in personal growth",
    options: [
      "A) It reduces confidence",
      "B) It increases confusion",
      "C) It helps in personal growth",
      "D) It creates stress",
    ],
  },
  {
    question: "15. Which of the following is NOT a component of self-management?",
    answer: "D) Procrastination",
    options: [
      "A) Goal setting",
      "B) Time management",
      "C) Stress management",
      "D) Procrastination",
    ],
  },
  {
    question: "16. What is the first step in managing time effectively?",
    answer: "A) Creating a schedule",
    options: [
      "A) Creating a schedule",
      "B) Ignoring deadlines",
      "C) Working randomly",
      "D) Taking frequent breaks",
    ],
  },
  {
    question: "17. What does self-confidence lead to?",
    answer: "B) Better decision-making",
    options: [
      "A) Fear of failure",
      "B) Better decision-making",
      "C) Increased procrastination",
      "D) Poor time management",
    ],
  },
  {
    question: "18. What does self-regulation require?",
    answer: "A) Emotional control",
    options: [
      "A) Emotional control",
      "B) Complaining",
      "C) Avoiding challenges",
      "D) Procrastination",
    ],
  },
  {
    question: "19. Which of these is a benefit of setting realistic goals?",
    answer: "D) Higher chances of success",
    options: [
      "A) Increased stress",
      "B) Fear of failure",
      "C) Lack of motivation",
      "D) Higher chances of success",
    ],
  },
  {
    question: "20. Which skill helps in completing tasks on time?",
    answer: "B) Time management",
    options: [
      "A) Avoidance",
      "B) Time management",
      "C) Complaining",
      "D) Procrastination",
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
        "<td><img style='width:20px; margin:5px; align-self: center;' src='../Images/check.png'></td>";
      correctQuestions++;
    } else
      divBody +=
        "<td><img style='width:20px; margin:5px;'  src='../Images/cancel.png'></td>";
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
