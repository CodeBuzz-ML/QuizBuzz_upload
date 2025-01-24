var questions = [
  {
    question: "1. What does the term 'green skills' refer to?",
    answer: "B) Skills for sustainable development and environmental conservation",
    options: [
      "A) Skills for gardening",
      "B) Skills for sustainable development and environmental conservation",
      "C) Skills for managing a business",
      "D) Skills for personal development",
    ],
  },
  {
    question: "2. Which sector is most associated with green jobs?",
    answer: "C) Renewable energy",
    options: [
      "A) Fast food",
      "B) Real estate",
      "C) Renewable energy",
      "D) Entertainment",
    ],
  },
  {
    question: "3. What is the primary goal of green skills?",
    answer: "D) Reduce environmental impact",
    options: [
      "A) Increase consumption",
      "B) Increase profit at all costs",
      "C) Create waste",
      "D) Reduce environmental impact",
    ],
  },
  {
    question: "4. What is an example of a green job?",
    answer: "A) Solar panel technician",
    options: [
      "A) Solar panel technician",
      "B) Fast food server",
      "C) Construction worker",
      "D) Sales executive",
    ],
  },
  {
    question: "5. What does sustainable development mean?",
    answer: "C) Meeting current needs without compromising future generations",
    options: [
      "A) Using all available resources immediately",
      "B) Avoiding economic growth",
      "C) Meeting current needs without compromising future generations",
      "D) Focusing only on economic profit",
    ],
  },
  {
    question: "6. Which of the following is a renewable energy source?",
    answer: "B) Solar energy",
    options: [
      "A) Coal",
      "B) Solar energy",
      "C) Petroleum",
      "D) Natural gas",
    ],
  },
  {
    question: "7. What does 'carbon footprint' refer to?",
    answer: "C) The total greenhouse gases emitted by an individual or activity",
    options: [
      "A) The number of cars owned by a person",
      "B) The amount of trees planted in a region",
      "C) The total greenhouse gases emitted by an individual or activity",
      "D) The energy saved by using renewable sources",
    ],
  },
  {
    question: "8. What is the key benefit of adopting green technologies?",
    answer: "A) Reducing pollution",
    options: [
      "A) Reducing pollution",
      "B) Increasing waste",
      "C) Increasing energy consumption",
      "D) Using non-renewable resources",
    ],
  },
  {
    question: "9. Which of these practices helps in water conservation?",
    answer: "B) Rainwater harvesting",
    options: [
      "A) Leaving taps running",
      "B) Rainwater harvesting",
      "C) Deforestation",
      "D) Building dams everywhere",
    ],
  },
  {
    question: "10. What is the role of green skills in industries?",
    answer: "C) Promote sustainability and reduce environmental damage",
    options: [
      "A) Increase waste production",
      "B) Focus only on profits",
      "C) Promote sustainability and reduce environmental damage",
      "D) Avoid innovation",
    ],
  },
  {
    question: "11. What is an example of reducing energy consumption?",
    answer: "D) Using energy-efficient appliances",
    options: [
      "A) Leaving lights on all day",
      "B) Using older, energy-consuming devices",
      "C) Avoiding renewable energy",
      "D) Using energy-efficient appliances",
    ],
  },
  {
    question: "12. What is one of the objectives of the United Nations Sustainable Development Goals (SDGs)?",
    answer: "B) Protect the planet and combat climate change",
    options: [
      "A) Increase industrial waste",
      "B) Protect the planet and combat climate change",
      "C) Encourage deforestation",
      "D) Avoid international collaboration",
    ],
  },
  {
    question: "13. What does 'reduce, reuse, recycle' promote?",
    answer: "A) Waste management",
    options: [
      "A) Waste management",
      "B) Increased consumption",
      "C) Ignoring waste",
      "D) Overproduction",
    ],
  },
  {
    question: "14. What is the impact of deforestation?",
    answer: "C) Loss of biodiversity and climate change",
    options: [
      "A) Increase in rainfall",
      "B) Improved air quality",
      "C) Loss of biodiversity and climate change",
      "D) Better soil quality",
    ],
  },
  {
    question: "15. How does planting trees help the environment?",
    answer: "B) Absorbs carbon dioxide and improves air quality",
    options: [
      "A) Reduces rainfall",
      "B) Absorbs carbon dioxide and improves air quality",
      "C) Increases global warming",
      "D) Reduces oxygen levels",
    ],
  },
  {
    question: "16. What is a major challenge in implementing green practices?",
    answer: "D) High initial cost of green technologies",
    options: [
      "A) Lack of awareness",
      "B) Resistance to change",
      "C) Limited resources",
      "D) High initial cost of green technologies",
    ],
  },
  {
    question: "17. What is the benefit of using public transportation?",
    answer: "C) Reduces carbon emissions",
    options: [
      "A) Increases traffic",
      "B) Increases fuel consumption",
      "C) Reduces carbon emissions",
      "D) Decreases public convenience",
    ],
  },
  {
    question: "18. What does 'sustainable agriculture' involve?",
    answer: "A) Using natural methods to grow crops",
    options: [
      "A) Using natural methods to grow crops",
      "B) Increasing the use of chemical fertilizers",
      "C) Deforestation for farming",
      "D) Ignoring soil conservation",
    ],
  },
  {
    question: "19. What does energy efficiency aim to achieve?",
    answer: "B) Use less energy for the same output",
    options: [
      "A) Use more energy for less output",
      "B) Use less energy for the same output",
      "C) Avoid energy conservation",
      "D) Increase dependency on fossil fuels",
    ],
  },
  {
    question: "20. What is the significance of green skills in the future workforce?",
    answer: "D) Contribute to a sustainable and eco-friendly economy",
    options: [
      "A) Reduce job opportunities",
      "B) Focus only on traditional practices",
      "C) Ignore environmental impacts",
      "D) Contribute to a sustainable and eco-friendly economy",
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
