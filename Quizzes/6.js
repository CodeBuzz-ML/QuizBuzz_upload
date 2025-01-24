var questions = [
  {
    question: "1. What is the primary purpose of using styles in a document?",
    answer: "C) To ensure consistent formatting throughout the document",
    options: [
      "A) To increase the file size",
      "B) To apply random formatting",
      "C) To ensure consistent formatting throughout the document",
      "D) To make the document less readable",
    ],
  },
  {
    question: "2. Which feature allows you to create a new document based on a pre-designed layout?",
    answer: "B) Template",
    options: [
      "A) Macro",
      "B) Template",
      "C) Style",
      "D) Format Painter",
    ],
  },
  {
    question: "3. What is the function of the 'Mail Merge' feature in a word processor?",
    answer: "A) To create personalized letters by combining a document with a data source",
    options: [
      "A) To create personalized letters by combining a document with a data source",
      "B) To merge two documents into one",
      "C) To send emails directly from the document",
      "D) To combine multiple images into the document",
    ],
  },
  {
    question: "4. How can you insert an image into a document?",
    answer: "D) All of the above",
    options: [
      "A) By dragging and dropping the image file",
      "B) Using the 'Insert' menu and selecting 'Image'",
      "C) Copying and pasting the image",
      "D) All of the above",
    ],
  },
  {
    question: "5. What is the advantage of creating a table of contents in a document?",
    answer: "B) It provides an organized overview and easy navigation of the document's sections",
    options: [
      "A) It increases the document's word count",
      "B) It provides an organized overview and easy navigation of the document's sections",
      "C) It adds decorative elements to the document",
      "D) It restricts editing of the document",
    ],
  },
  {
    question: "6. Which tool allows you to automate repetitive tasks in a document?",
    answer: "C) Macro",
    options: [
      "A) Template",
      "B) Style",
      "C) Macro",
      "D) Format Painter",
    ],
  },
  {
    question: "7. What is the purpose of using 'Track Changes' in a document?",
    answer: "A) To monitor and record all edits made to the document",
    options: [
      "A) To monitor and record all edits made to the document",
      "B) To track the number of words in the document",
      "C) To highlight grammatical errors",
      "D) To keep a count of the number of pages",
    ],
  },
  {
    question: "8. How can you protect a document from unauthorized editing?",
    answer: "B) By setting a password for editing",
    options: [
      "A) By saving it in a different format",
      "B) By setting a password for editing",
      "C) By printing it",
      "D) By sharing it via email",
    ],
  },
  {
    question: "9. What does the 'Find and Replace' feature do?",
    answer: "D) It searches for specific text and replaces it with new text",
    options: [
      "A) It finds grammatical errors",
      "B) It replaces images in the document",
      "C) It searches for formatting inconsistencies",
      "D) It searches for specific text and replaces it with new text",
    ],
  },
  {
    question: "10. Which feature allows you to combine multiple cells in a table into one?",
    answer: "A) Merge Cells",
    options: [
      "A) Merge Cells",
      "B) Split Cells",
      "C) Insert Cells",
      "D) Delete Cells",
    ],
  },
  {
    question: "11. How can you adjust the space between lines of text in a document?",
    answer: "C) By changing the line spacing settings",
    options: [
      "A) By increasing the font size",
      "B) By changing the page margins",
      "C) By changing the line spacing settings",
      "D) By adjusting the paragraph alignment",
    ],
  },
  {
    question: "12. What is the benefit of using headers and footers in a document?",
    answer: "B) They allow you to add consistent information at the top and bottom of each page",
    options: [
      "A) They increase the document's file size",
      "B) They allow you to add consistent information at the top and bottom of each page",
      "C) They change the document's background color",
      "D) They restrict editing of the document",
    ],
  },
  {
    question: "13. Which feature helps in checking the spelling and grammar of a document?",
    answer: "D) Spell Check",
    options: [
      "A) Thesaurus",
      "B) Word Count",
      "C) Track Changes",
      "D) Spell Check",
    ],
  },
  {
    question: "14. How can you create a bulleted list in a document?",
    answer: "A) By using the 'Bullets' option in the formatting toolbar",
    options: [
      "A) By using the 'Bullets' option in the formatting toolbar",
      "B) By typing asterisks before each item",
      "C) By changing the font style",
      "D) By adjusting the page layout",
    ],
  },
  {
    question: "15. What is the function of the 'Format Painter' tool?",
    answer: "C) To copy formatting from one part of the document to another",
    options: [
      "A) To paint images in the document",
      "B) To change the document's theme",
      "C) To copy formatting from one part of the document to another",
      "D) To adjust the page orientation",
    ],
  },
  {
    question: "16. Which file format is commonly used for saving documents to ensure compatibility?",
    answer: "B) .docx",
    options: [
      "A) .exe",
      "B) .docx",
      "C) .mp3",
      "D) .jpg",
    ],
  },
  {
    question: "17. How can you insert a hyperlink into a document?",
    answer: "A) By selecting the text and using the 'Insert Hyperlink' option",
    options: [
      "A) By selecting the text and using the 'Insert Hyperlink' option",
      "B) By changing the text color to blue",
      "C) By underlining the text",
      "D) By increasing the font size",
    ],
  },
  {
    question: "18. What is the purpose of using columns in a document?",
    answer: "D) To organize content into separate sections for better readability",
    options: [
      "A) To add borders to the text",
      "B) To change the page color",
      "C) To increase the font size",
      "D) To organize content into separate sections for better readability",
    ],
  },
  {
    question: "19. What is the function of a watermark in a document?",
    answer: "C) To display a faded image or text behind the content, typically for branding or copyright purposes",
    options: [
      "A) To adjust text color",
      "B) To reduce file size",
      "C) To display a faded image or text behind the content, typically for branding or copyright purposes",
      "D) To make the text bold",
    ],
  },
  {
    question: "20. How can you add a page break in a document?",
    answer: "B) By using the 'Insert' menu and selecting 'Page Break'",
    options: [
      "A) By pressing the 'Enter' key repeatedly",
      "B) By using the 'Insert' menu and selecting 'Page Break'",
      "C) By changing the page margins",
      "D) By adjusting the paragraph settings",
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
