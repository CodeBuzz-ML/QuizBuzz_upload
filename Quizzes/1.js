var questions = [
  {
    question: "1. What is the process of sending and receiving messages effectively called?",
    answer: "A) Communication",
    options: [
      "A) Communication",
      "B) Leadership",
      "C) Decision-making",
      "D) Negotiation",
    ],
  },
  {
    question: "2. Which type of communication involves body language, gestures, and facial expressions?",
    answer: "B) Non-verbal communication",
    options: [
      "A) Verbal communication",
      "B) Non-verbal communication",
      "C) Written communication",
      "D) Feedback",
    ],
  },
  {
    question: "3. What is the primary purpose of active listening?",
    answer: "C) Understanding the speaker's message",
    options: [
      "A) Interrupting the speaker",
      "B) Sharing your own opinion",
      "C) Understanding the speaker's message",
      "D) Responding quickly",
    ],
  },
  {
    question: "4. What is considered an essential part of effective communication?",
    answer: "D) Feedback",
    options: [
      "A) Ignoring the message",
      "B) Multitasking",
      "C) Talking continuously",
      "D) Feedback",
    ],
  },
  {
    question: "5. What does clarity in communication help achieve?",
    answer: "A) Better understanding",
    options: [
      "A) Better understanding",
      "B) Confusion",
      "C) Longer conversations",
      "D) Distractions",
    ],
  },
  {
    question: "6. Which is NOT a barrier to effective communication?",
    answer: "D) Active listening",
    options: [
      "A) Language differences",
      "B) Noise",
      "C) Emotional barriers",
      "D) Active listening",
    ],
  },
  {
    question: "7. What does 'tone' in communication refer to?",
    answer: "B) The way words are spoken",
    options: [
      "A) The choice of words",
      "B) The way words are spoken",
      "C) The volume of speech",
      "D) The length of sentences",
    ],
  },
  {
    question: "8. Which of the following is an example of written communication?",
    answer: "C) Sending an email",
    options: [
      "A) Having a face-to-face conversation",
      "B) Making a phone call",
      "C) Sending an email",
      "D) Smiling at someone",
    ],
  },
  {
    question: "9. What does an effective listener avoid doing?",
    answer: "A) Interrupting the speaker",
    options: [
      "A) Interrupting the speaker",
      "B) Maintaining eye contact",
      "C) Taking notes",
      "D) Asking relevant questions",
    ],
  },
  {
    question: "10. What is the process of converting thoughts into words called?",
    answer: "C) Encoding",
    options: [
      "A) Decoding",
      "B) Feedback",
      "C) Encoding",
      "D) Interpretation",
    ],
  },
  {
    question: "11. What is the meaning of 'decoding' in communication?",
    answer: "B) Understanding the message",
    options: [
      "A) Writing the message",
      "B) Understanding the message",
      "C) Ignoring the message",
      "D) Delivering the message",
    ],
  },
  {
    question: "12. What is a formal way to communicate in an organization?",
    answer: "D) Email",
    options: [
      "A) Gossip",
      "B) Body language",
      "C) Casual talk",
      "D) Email",
    ],
  },
  {
    question: "13. Which of these is a feature of effective communication?",
    answer: "A) Clarity",
    options: [
      "A) Clarity",
      "B) Ambiguity",
      "C) Assumptions",
      "D) Distractions",
    ],
  },
  {
    question: "14. What is the main objective of communication?",
    answer: "B) Exchange of information",
    options: [
      "A) Creating confusion",
      "B) Exchange of information",
      "C) Expressing anger",
      "D) Ignoring feedback",
    ],
  },
  {
    question: "15. What is a major drawback of non-verbal communication?",
    answer: "C) Misinterpretation",
    options: [
      "A) Lack of interaction",
      "B) It is time-consuming",
      "C) Misinterpretation",
      "D) Limited use",
    ],
  },
  {
    question: "16. What is the first step in the communication process?",
    answer: "A) Sender creates the message",
    options: [
      "A) Sender creates the message",
      "B) Receiver decodes the message",
      "C) Feedback is given",
      "D) Message is transmitted",
    ],
  },
  {
    question: "17. Which of these is a verbal communication method?",
    answer: "D) Telephone conversation",
    options: [
      "A) Body gestures",
      "B) Smiling",
      "C) Writing a note",
      "D) Telephone conversation",
    ],
  },
  {
    question: "18. What is required for communication to be two-way?",
    answer: "B) Feedback",
    options: [
      "A) Only one person speaking",
      "B) Feedback",
      "C) Physical presence",
      "D) Using technology",
    ],
  },
  {
    question: "19. What is a key factor to ensure the success of communication?",
    answer: "C) Understanding the audience",
    options: [
      "A) Using complex words",
      "B) Speaking continuously",
      "C) Understanding the audience",
      "D) Ignoring feedback",
    ],
  },
  {
    question: "20. Which of these is NOT a communication skill?",
    answer: "D) Multitasking",
    options: [
      "A) Listening",
      "B) Speaking",
      "C) Writing",
      "D) Multitasking",
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
