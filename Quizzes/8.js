var questions = [
  {
    question: "1. What does DBMS stand for?",
    answer: "A) Database Management System",
    options: [
      "A) Database Management System",
      "B) Data Base Model Standard",
      "C) Digital Backup Management System",
      "D) Data Bank Management System",
    ],
  },
  {
    question: "2. Which of the following is an example of a DBMS?",
    answer: "B) Microsoft Access",
    options: [
      "A) Microsoft Word",
      "B) Microsoft Access",
      "C) Microsoft Excel",
      "D) Microsoft PowerPoint",
    ],
  },
  {
    question: "3. Which of the following is not a DBMS?",
    answer: "D) Microsoft Word",
    options: [
      "A) Oracle",
      "B) MySQL",
      "C) SQL Server",
      "D) Microsoft Word",
    ],
  },
  {
    question: "4. What is a table in a DBMS?",
    answer: "B) A collection of rows and columns",
    options: [
      "A) A form to enter data",
      "B) A collection of rows and columns",
      "C) A set of rules for data validation",
      "D) A file to store documents",
    ],
  },
  {
    question: "5. What is a primary key in a database?",
    answer: "C) A unique identifier for a record",
    options: [
      "A) A column that stores date information",
      "B) A record that can be deleted",
      "C) A unique identifier for a record",
      "D) A type of query",
    ],
  },
  {
    question: "6. What does SQL stand for?",
    answer: "A) Structured Query Language",
    options: [
      "A) Structured Query Language",
      "B) Simple Query Language",
      "C) Standard Query Language",
      "D) Secure Query Language",
    ],
  },
  {
    question: "7. What is the function of the 'SELECT' command in SQL?",
    answer: "D) To retrieve data from a database",
    options: [
      "A) To delete data from a database",
      "B) To update data in a database",
      "C) To insert data into a database",
      "D) To retrieve data from a database",
    ],
  },
  {
    question: "8. What is a 'foreign key' in a database?",
    answer: "C) A field in one table that links to the primary key in another table",
    options: [
      "A) A column used for indexing",
      "B) A field that stores personal information",
      "C) A field in one table that links to the primary key in another table",
      "D) A field that stores passwords",
    ],
  },
  {
    question: "9. Which of the following is a type of relationship in a relational database?",
    answer: "B) One-to-many",
    options: [
      "A) One-to-one",
      "B) One-to-many",
      "C) Many-to-many",
      "D) All of the above",
    ],
  },
  {
    question: "10. What is the purpose of a query in DBMS?",
    answer: "C) To retrieve and manipulate data",
    options: [
      "A) To insert data into a table",
      "B) To delete records",
      "C) To retrieve and manipulate data",
      "D) To modify the structure of a database",
    ],
  },
  {
    question: "11. What is normalization in DBMS?",
    answer: "A) The process of organizing data to reduce redundancy",
    options: [
      "A) The process of organizing data to reduce redundancy",
      "B) The process of creating indexes",
      "C) The process of backup and recovery",
      "D) The process of deleting old records",
    ],
  },
  {
    question: "12. What is a 'view' in a DBMS?",
    answer: "B) A virtual table created from the results of a query",
    options: [
      "A) A physical table storing data",
      "B) A virtual table created from the results of a query",
      "C) A field used to store images",
      "D) A type of index",
    ],
  },
  {
    question: "13. What is the 'UPDATE' command in SQL used for?",
    answer: "D) To modify existing data in a table",
    options: [
      "A) To delete data from a table",
      "B) To add new data to a table",
      "C) To retrieve data from a table",
      "D) To modify existing data in a table",
    ],
  },
  {
    question: "14. Which of the following is used to ensure the integrity of data in a database?",
    answer: "C) Constraints",
    options: [
      "A) Backup",
      "B) Data types",
      "C) Constraints",
      "D) Normalization",
    ],
  },
  {
    question: "15. Which of the following is a type of constraint in DBMS?",
    answer: "A) NOT NULL",
    options: [
      "A) NOT NULL",
      "B) PRIMARY KEY",
      "C) FOREIGN KEY",
      "D) All of the above",
    ],
  },
  {
    question: "16. What is the purpose of indexing in a DBMS?",
    answer: "B) To speed up data retrieval",
    options: [
      "A) To store more data in the table",
      "B) To speed up data retrieval",
      "C) To delete old records",
      "D) To increase storage capacity",
    ],
  },
  {
    question: "17. What is a 'schema' in DBMS?",
    answer: "C) The structure or design of a database",
    options: [
      "A) A query to retrieve data",
      "B) A table in the database",
      "C) The structure or design of a database",
      "D) A type of record",
    ],
  },
  {
    question: "18. What does the 'DISTINCT' keyword do in an SQL query?",
    answer: "D) Eliminates duplicate values from the result set",
    options: [
      "A) Sorts the data in ascending order",
      "B) Deletes duplicate records from the database",
      "C) Modifies records in a table",
      "D) Eliminates duplicate values from the result set",
    ],
  },
  {
    question: "19. What is the role of the 'DELETE' command in SQL?",
    answer: "B) To remove records from a table",
    options: [
      "A) To modify records in a table",
      "B) To remove records from a table",
      "C) To retrieve data from a table",
      "D) To create new records in a table",
    ],
  },
  {
    question: "20. What is a database transaction?",
    answer: "C) A sequence of operations that are executed as a single unit",
    options: [
      "A) A process of deleting records",
      "B) A backup of the database",
      "C) A sequence of operations that are executed as a single unit",
      "D) A query to retrieve data",
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
