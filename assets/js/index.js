//let icsFile;

/*
function createIcs(sTime, eTime, title, location, description) {
  // Event details
  let startTime = new Date(sTime);
  let endTime = new Date(eTime);
  // Convert the date-time to the proper format
  let start = formatDate(startTime);
  let end = formatDate(endTime);

  // Create the ICS file
  icsFile =
    "BEGIN:VCALENDAR\n" +
    "VERSION:2.0\n" +
    "PRODID:-//ALX//TimeTable//English\n" +
    "BEGIN:VEVENT\n" +
    "DTSTART:" +
    start +
    "\n" +
    "DTEND:" +
    end +
    "\n" +
    "SUMMARY:" +
    title +
    "\n" +
    "LOCATION:" +
    location +
    "\n" +
    "DESCRIPTION:" +
    description +
    "\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";
}
function download(fileName) {
  let a = document.createElement("a");
  // Create a Blob object with the ICS file data
  let file = new Blob([icsFile], { type: "test/calendar" });
  // Provide a way for the user to download the ICS file
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// Helper function to format the date-time
function formatDate(date) {
    date.replace(":", "");
  date.replace("-", "");
  return date;
}
*/

// Read text from clipboard...............................
const pasteButton = document.getElementById("pasteButton");
pasteButton.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById('title').value += text;
    console.log("Text pasted.");
  } catch (error) {
    console.log("Failed to read clipboard");
  }
});

const input = document.querySelector("#sDate");
input.value = "2021-03-31";

input.addEventListener("input", () => {
  console.log(input.value); // 2021-03-31
});

function init(){
  renderHome();
}

let mainEl = document.querySelector("#mainEl");
let homeLi = document.querySelector("#homeLi");

function renderHome() {
 // mainEl.innerHTML = "";
  // ---*** Head Title ***---
  let head = document.createElement("h1");
  head.textContent = "ALX Timetable Calender ics file creator";
  mainEl.appendChild(head);

  // ---*** Description Selector ***---
  let selectLabel = document.createElement("label");
  selectLabel.setAttribute("for", "description");
  let select = document.createElement("select");
  let selectAttrs ={
    id:"description",
    name: "description"
  }
  setMultipleAttrs(select, selectAttrs);
  selectLabel.textContent = "description";
  let option = document.createElement("option");
  option.setAttribute("value", "Event");
  option.textContent = "Event";
  let option1Attrs = {
    value: "Project",
    selected:""
  }
  let option1 = document.createElement("option");
  setMultipleAttrs(option1, option1Attrs)
  option1.textContent = "Project";
  select.appendChild(option);
  select.appendChild(option1);
  mainEl.appendChild(selectLabel);
  mainEl.appendChild(select);

  // ---*** Title Input Box ***---
  let inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", "title");
  inputLabel.textContent = "Title"
  let titleTextArea = document.createElement("input");
  titleTextArea.setAttribute("id", "title");
  mainEl.appendChild(inputLabel);
  mainEl.appendChild(titleTextArea);

  // ---*** Location Input Box ***---
  let inputLoc = document.createElement("label");
  inputLoc.setAttribute("for", "loc");
  inputLoc.textContent = "Location"
  let locTextArea = document.createElement("input");
  locTextArea.setAttribute("id", "loc");
  mainEl.appendChild(inputLoc);
  mainEl.appendChild(locTextArea);

  // ---*** Start Date ***---
  let sDateLabel = document.createElement("label");
  sDateLabel.setAttribute("for", "sDate");
  sDateLabel.textContent = "Starting Date";
  let sDateInput = document.createElement("input");
  let sDateAttrs = {
    id: "sDate",
    max: "2024-01-01T00:00",
    min: "2023-01-01T00:00",
    type: "datetime-local"
  }
  setMultipleAttrs(sDateInput,sDateAttrs);
  mainEl.appendChild(sDateLabel);
  mainEl.appendChild(sDateInput);

  // ---*** Ending Date ***---
  let eDateLabel = document.createElement("label");
  eDateLabel.setAttribute("for", "sDate");
  eDateLabel.textContent = "Ending Date";
  let eDateInput = document.createElement("input");
  let eDateAttrs = {
    id: "eDate",
    max: "2024-01-01T00:00",
    min: "2023-01-01T00:00",
    type: "datetime-local"
  }
  setMultipleAttrs(eDateInput,eDateAttrs);
  mainEl.appendChild(eDateLabel);
  mainEl.appendChild(eDateInput);

}

init();
  function renderTitle(titleContent) {
    let title = document.createElement("h2");
    title.classList.add("q-title");
    title.textContent = titleContent;
    mainEl.appendChild(title);
  }

function setMultipleAttrs(elem, elemAttrs) {
  Object.keys(elemAttrs).forEach(attribute => {
    elem.setAttribute(attribute, elemAttrs[attribute]);
  });
}









