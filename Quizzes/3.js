var questionsChapter3 = [
  {
    question: "1. What does ICT stand for?",
    answer: "B) Information and Communication Technology",
    options: [
      "A) Internet and Computer Technology",
      "B) Information and Communication Technology",
      "C) Interactive Communication Tools",
      "D) Integrated Computing Techniques",
    ],
  },
  {
    question: "2. What is the primary purpose of ICT tools in education?",
    answer: "C) Enhance learning and teaching processes",
    options: [
      "A) Replace teachers",
      "B) Make learning difficult",
      "C) Enhance learning and teaching processes",
      "D) Reduce classroom interaction",
    ],
  },
  {
    question: "3. Which of the following is NOT an ICT tool?",
    answer: "D) Paper notebook",
    options: [
      "A) Computer",
      "B) Smartphone",
      "C) Projector",
      "D) Paper notebook",
    ],
  },
  {
    question: "4. What is the main function of a spreadsheet application?",
    answer: "A) Perform calculations and organize data",
    options: [
      "A) Perform calculations and organize data",
      "B) Design images",
      "C) Send emails",
      "D) Play games",
    ],
  },
  {
    question: "5. What is the full form of URL in ICT?",
    answer: "B) Uniform Resource Locator",
    options: [
      "A) Universal Remote Link",
      "B) Uniform Resource Locator",
      "C) Unified Resource Link",
      "D) Universal Resource Locator",
    ],
  },
  {
    question: "6. Which of these is an example of cloud storage?",
    answer: "C) Google Drive",
    options: [
      "A) Hard Disk",
      "B) USB Flash Drive",
      "C) Google Drive",
      "D) CD/DVD",
    ],
  },
  {
    question: "7. What is the main use of a search engine?",
    answer: "D) Find information on the internet",
    options: [
      "A) Design websites",
      "B) Send emails",
      "C) Store data",
      "D) Find information on the internet",
    ],
  },
  {
    question: "8. What is the primary function of an operating system?",
    answer: "A) Manage hardware and software resources",
    options: [
      "A) Manage hardware and software resources",
      "B) Create documents",
      "C) Browse the internet",
      "D) Play audio and video",
    ],
  },
  {
    question: "9. What is an example of a presentation software?",
    answer: "B) Microsoft PowerPoint",
    options: [
      "A) Microsoft Word",
      "B) Microsoft PowerPoint",
      "C) Google Sheets",
      "D) Adobe Photoshop",
    ],
  },
  {
    question: "10. Which device is used to input data into a computer?",
    answer: "C) Keyboard",
    options: [
      "A) Monitor",
      "B) Printer",
      "C) Keyboard",
      "D) Speaker",
    ],
  },
  {
    question: "11. What is the purpose of antivirus software?",
    answer: "B) Protect the system from malware",
    options: [
      "A) Increase computer speed",
      "B) Protect the system from malware",
      "C) Compress files",
      "D) Organize documents",
    ],
  },
  {
    question: "12. What does Ctrl + C do on a computer?",
    answer: "A) Copies selected text or files",
    options: [
      "A) Copies selected text or files",
      "B) Cuts selected text or files",
      "C) Pastes selected text or files",
      "D) Closes the application",
    ],
  },
  {
    question: "13. Which of the following is NOT an internet browser?",
    answer: "D) Adobe Acrobat",
    options: [
      "A) Google Chrome",
      "B) Mozilla Firefox",
      "C) Microsoft Edge",
      "D) Adobe Acrobat",
    ],
  },
  {
    question: "14. What is the purpose of a firewall in ICT?",
    answer: "B) Protect the network from unauthorized access",
    options: [
      "A) Increase internet speed",
      "B) Protect the network from unauthorized access",
      "C) Manage files and folders",
      "D) Update the operating system",
    ],
  },
  {
    question: "15. What does 'RAM' stand for?",
    answer: "A) Random Access Memory",
    options: [
      "A) Random Access Memory",
      "B) Read-Only Memory",
      "C) Rapid Access Module",
      "D) Random Allocation Memory",
    ],
  },
  {
    question: "16. What is an example of input and output devices working together?",
    answer: "C) Typing on a keyboard and viewing on a monitor",
    options: [
      "A) Using a printer",
      "B) Playing audio on speakers",
      "C) Typing on a keyboard and viewing on a monitor",
      "D) Storing files on a hard drive",
    ],
  },
  {
    question: "17. What is a key feature of ICT in modern workplaces?",
    answer: "D) Collaboration tools like video conferencing",
    options: [
      "A) Typewriters",
      "B) Paper filing systems",
      "C) Manual calculations",
      "D) Collaboration tools like video conferencing",
    ],
  },
  {
    question: "18. What is an email attachment?",
    answer: "B) A file sent along with the email",
    options: [
      "A) A copy of the email",
      "B) A file sent along with the email",
      "C) The subject of the email",
      "D) The recipient of the email",
    ],
  },
  {
    question: "19. Which shortcut is used to paste text in most software?",
    answer: "C) Ctrl + V",
    options: [
      "A) Ctrl + X",
      "B) Ctrl + C",
      "C) Ctrl + V",
      "D) Ctrl + Z",
    ],
  },
  {
    question: "20. What does the term 'data' refer to in ICT?",
    answer: "A) Raw facts and figures",
    options: [
      "A) Raw facts and figures",
      "B) Processed information",
      "C) Internet speed",
      "D) Computer hardware",
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
