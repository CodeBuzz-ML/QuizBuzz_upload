var questions = [
  {
    question: "1. What is the primary use of an electronic spreadsheet?",
    answer: "B) To perform calculations and organize data",
    options: [
      "A) To create documents",
      "B) To perform calculations and organize data",
      "C) To design graphics",
      "D) To manage emails",
    ],
  },
  {
    question: "2. Which of the following is an example of a cell reference in an electronic spreadsheet?",
    answer: "A) A1",
    options: [
      "A) A1",
      "B) =SUM",
      "C) 100",
      "D) Spreadsheet",
    ],
  },
  {
    question: "3. What function is used to calculate the sum of a range of numbers?",
    answer: "C) SUM",
    options: [
      "A) AVERAGE",
      "B) COUNT",
      "C) SUM",
      "D) IF",
    ],
  },
  {
    question: "4. Which of these is a basic operation that can be performed in a spreadsheet?",
    answer: "D) All of the above",
    options: [
      "A) Data entry",
      "B) Sorting",
      "C) Calculations",
      "D) All of the above",
    ],
  },
  {
    question: "5. What does the formula '=A1+B2' do in an electronic spreadsheet?",
    answer: "B) Adds the values in cells A1 and B2",
    options: [
      "A) Subtracts the values in cells A1 and B2",
      "B) Adds the values in cells A1 and B2",
      "C) Multiplies the values in cells A1 and B2",
      "D) Divides the values in cells A1 and B2",
    ],
  },
  {
    question: "6. What is a cell range?",
    answer: "C) A group of cells selected for an operation",
    options: [
      "A) A single cell",
      "B) A row of cells",
      "C) A group of cells selected for an operation",
      "D) A function applied to cells",
    ],
  },
  {
    question: "7. What does the 'VLOOKUP' function do?",
    answer: "A) Looks up a value in a table and returns a corresponding value",
    options: [
      "A) Looks up a value in a table and returns a corresponding value",
      "B) Performs a calculation on a range of cells",
      "C) Sorts data in ascending order",
      "D) Counts the number of cells with data",
    ],
  },
  {
    question: "8. What does the 'IF' function allow you to do in a spreadsheet?",
    answer: "B) Perform conditional calculations based on a logical test",
    options: [
      "A) Sum values in a range",
      "B) Perform conditional calculations based on a logical test",
      "C) Create graphs from data",
      "D) Add rows to a table",
    ],
  },
  {
    question: "9. What is the purpose of using 'Freeze Panes' in a spreadsheet?",
    answer: "C) To keep a row or column visible while scrolling through the rest of the data",
    options: [
      "A) To lock cells for editing",
      "B) To merge two cells",
      "C) To keep a row or column visible while scrolling through the rest of the data",
      "D) To change the font size of a cell",
    ],
  },
  {
    question: "10. What is a chart used for in a spreadsheet?",
    answer: "A) To represent data visually",
    options: [
      "A) To represent data visually",
      "B) To format cells",
      "C) To filter data",
      "D) To create documents",
    ],
  },
  {
    question: "11. How can you change the color of a cell in a spreadsheet?",
    answer: "D) By using the 'Fill Color' option in the toolbar",
    options: [
      "A) By changing the font color",
      "B) By merging the cell with others",
      "C) By using a formula",
      "D) By using the 'Fill Color' option in the toolbar",
    ],
  },
  {
    question: "12. What does the 'COUNT' function do?",
    answer: "C) Counts the number of cells with numbers in a range",
    options: [
      "A) Adds numbers in a range",
      "B) Counts the number of words in a range",
      "C) Counts the number of cells with numbers in a range",
      "D) Performs a logical test on a range",
    ],
  },
  {
    question: "13. What does the 'SUMIF' function do?",
    answer: "B) Adds values in a range that meet a specific condition",
    options: [
      "A) Adds all values in a range",
      "B) Adds values in a range that meet a specific condition",
      "C) Counts the number of cells in a range",
      "D) Finds the maximum value in a range",
    ],
  },
  {
    question: "14. How can you sort data in a spreadsheet?",
    answer: "C) By using the 'Sort' feature in the toolbar",
    options: [
      "A) By manually rearranging the cells",
      "B) By changing the font size",
      "C) By using the 'Sort' feature in the toolbar",
      "D) By adding a chart",
    ],
  },
  {
    question: "15. How can you hide a column in a spreadsheet?",
    answer: "B) By right-clicking the column and selecting 'Hide'",
    options: [
      "A) By deleting the column",
      "B) By right-clicking the column and selecting 'Hide'",
      "C) By changing the column width to zero",
      "D) By changing the column color",
    ],
  },
  {
    question: "16. What is the function of 'Cell Referencing'?",
    answer: "C) To create formulas that refer to values in other cells",
    options: [
      "A) To create headers for a document",
      "B) To highlight cells in a range",
      "C) To create formulas that refer to values in other cells",
      "D) To format a cell's border",
    ],
  },
  {
    question: "17. What is a pivot table used for?",
    answer: "D) To summarize and analyze data in a spreadsheet",
    options: [
      "A) To create charts",
      "B) To format cells",
      "C) To hide rows",
      "D) To summarize and analyze data in a spreadsheet",
    ],
  },
  {
    question: "18. How do you protect a worksheet from unauthorized changes?",
    answer: "C) By setting a password for the worksheet",
    options: [
      "A) By making the text bold",
      "B) By applying a conditional format",
      "C) By setting a password for the worksheet",
      "D) By freezing panes",
    ],
  },
  {
    question: "19. How can you add a hyperlink in a cell?",
    answer: "B) By using the 'Insert Hyperlink' option",
    options: [
      "A) By changing the cell color",
      "B) By using the 'Insert Hyperlink' option",
      "C) By increasing the cell size",
      "D) By using a formula",
    ],
  },
  {
    question: "20. What does the 'Left Align' option do in a spreadsheet?",
    answer: "A) It aligns the text to the left side of a cell",
    options: [
      "A) It aligns the text to the left side of a cell",
      "B) It increases the font size",
      "C) It merges cells",
      "D) It changes the font color",
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
