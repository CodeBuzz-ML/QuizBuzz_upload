var questions = [
  {
    question: "1. What is the first step in providing first aid for a bleeding wound?",
    answer: "A) Apply pressure to stop the bleeding",
    options: [
      "A) Apply pressure to stop the bleeding",
      "B) Apply an antiseptic",
      "C) Call for medical help",
      "D) Bandage the wound",
    ],
  },
  {
    question: "2. Which of the following is a common symptom of a heart attack?",
    answer: "C) Chest pain and discomfort",
    options: [
      "A) Excessive sweating",
      "B) Nausea and vomiting",
      "C) Chest pain and discomfort",
      "D) Fainting",
    ],
  },
  {
    question: "3. What should you do if someone is having a seizure?",
    answer: "B) Move objects away from them and protect their head",
    options: [
      "A) Hold them down to stop the movement",
      "B) Move objects away from them and protect their head",
      "C) Give them water to drink",
      "D) Leave them alone and wait for the seizure to stop",
    ],
  },
  {
    question: "4. In case of a burn, what is the first thing you should do?",
    answer: "A) Cool the burn under running cold water",
    options: [
      "A) Cool the burn under running cold water",
      "B) Apply ointment or creams",
      "C) Cover the burn with a cloth",
      "D) Expose the burn to sunlight",
    ],
  },
  {
    question: "5. What is the best way to perform CPR on an adult?",
    answer: "C) 30 chest compressions followed by 2 rescue breaths",
    options: [
      "A) 10 chest compressions followed by 2 rescue breaths",
      "B) 20 chest compressions followed by 1 rescue breath",
      "C) 30 chest compressions followed by 2 rescue breaths",
      "D) 40 chest compressions followed by 3 rescue breaths",
    ],
  },
  {
    question: "6. What should you do if someone is choking and unable to breathe?",
    answer: "A) Perform the Heimlich maneuver",
    options: [
      "A) Perform the Heimlich maneuver",
      "B) Encourage them to cough forcefully",
      "C) Give them water to drink",
      "D) Call emergency services only",
    ],
  },
  {
    question: "7. Which of the following is a sign of a stroke?",
    answer: "D) Sudden numbness or weakness in the face, arm, or leg",
    options: [
      "A) Difficulty breathing",
      "B) Persistent coughing",
      "C) Severe headache",
      "D) Sudden numbness or weakness in the face, arm, or leg",
    ],
  },
  {
    question: "8. What should you do if someone is suffering from heat exhaustion?",
    answer: "B) Move them to a cooler place and give them water",
    options: [
      "A) Apply cold compresses to their body",
      "B) Move them to a cooler place and give them water",
      "C) Make them rest in a sunny spot",
      "D) Offer them a hot drink",
    ],
  },
  {
    question: "9. Which of the following is an appropriate response to a nosebleed?",
    answer: "C) Pinch the nostrils and lean forward",
    options: [
      "A) Tilt the head back",
      "B) Apply ice to the back of the neck",
      "C) Pinch the nostrils and lean forward",
      "D) Apply pressure to the forehead",
    ],
  },
  {
    question: "10. What is the purpose of applying a splint in case of a broken bone?",
    answer: "A) To immobilize the injured area",
    options: [
      "A) To immobilize the injured area",
      "B) To reduce the pain",
      "C) To promote blood circulation",
      "D) To prevent swelling",
    ],
  },
  {
    question: "11. What is the first thing to do if someone is electrocuted?",
    answer: "B) Disconnect the power source",
    options: [
      "A) Touch them to check for a pulse",
      "B) Disconnect the power source",
      "C) Call for help before acting",
      "D) Splash cold water on them",
    ],
  },
  {
    question: "12. What should you do if you suspect someone has ingested poison?",
    answer: "A) Call the poison control center immediately",
    options: [
      "A) Call the poison control center immediately",
      "B) Encourage them to vomit",
      "C) Offer them milk or water",
      "D) Wait for the symptoms to appear",
    ],
  },
  {
    question: "13. What is the most important thing to remember when giving first aid?",
    answer: "C) Stay calm and focused",
    options: [
      "A) Act quickly without thinking",
      "B) Try to treat all injuries yourself",
      "C) Stay calm and focused",
      "D) Leave the scene to get help",
    ],
  },
  {
    question: "14. How should you treat a sprained ankle?",
    answer: "D) Rest, Ice, Compression, Elevation (R.I.C.E.)",
    options: [
      "A) Apply heat to the area",
      "B) Keep walking on it to prevent stiffness",
      "C) Apply a bandage tightly",
      "D) Rest, Ice, Compression, Elevation (R.I.C.E.)",
    ],
  },
  {
    question: "15. What is the best way to avoid infections when giving first aid?",
    answer: "B) Use gloves and clean the wound",
    options: [
      "A) Apply ointment without cleaning the wound",
      "B) Use gloves and clean the wound",
      "C) Touch the wound directly to check it",
      "D) Cover the wound without any cleaning",
    ],
  },
  {
    question: "16. When should you not perform CPR?",
    answer: "A) When the person has a heartbeat",
    options: [
      "A) When the person has a heartbeat",
      "B) When the person is conscious",
      "C) When the person is breathing normally",
      "D) When you are not trained in CPR",
    ],
  },
  {
    question: "17. What should you do if a person is unconscious but breathing?",
    answer: "C) Place them in the recovery position",
    options: [
      "A) Start chest compressions",
      "B) Leave them alone to recover",
      "C) Place them in the recovery position",
      "D) Shake them to wake them up",
    ],
  },
  {
    question: "18. What is an appropriate first aid treatment for an insect sting?",
    answer: "B) Clean the sting site and apply an ice pack",
    options: [
      "A) Rub the sting site with alcohol",
      "B) Clean the sting site and apply an ice pack",
      "C) Apply a hot compress to the sting site",
      "D) Leave the sting site alone",
    ],
  },
  {
    question: "19. What should you do if someone is drowning?",
    answer: "A) Throw them a rope or a flotation device",
    options: [
      "A) Throw them a rope or a flotation device",
      "B) Jump into the water to save them",
      "C) Call emergency services and wait",
      "D) Let them swim to safety on their own",
    ],
  },
  {
    question: "20. When should you use an Automated External Defibrillator (AED)?",
    answer: "C) When the person has no pulse and is not breathing",
    options: [
      "A) When the person is breathing irregularly",
      "B) When the person is conscious",
      "C) When the person has no pulse and is not breathing",
      "D) When the person is bleeding heavily",
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
