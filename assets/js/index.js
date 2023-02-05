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

// const input = document.querySelector("#sDate");
// input.value = "2021-03-31";
//
// input.addEventListener("input", () => {
//   console.log(input.value); // 2021-03-31
// });

let mainEl = document.querySelector("#main");

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

  // ---*** Title Input Box ***---
  let titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title"
  let titleTextArea = document.createElement("input");
  let titleTextAreaAttrs = {
    class: 'textBox',
    id: 'title',
    name: 'focus',
    placeholder: 'Enter the title',
    required: '',
    type: 'text'
  }
setMultipleAttrs(titleTextArea,titleTextAreaAttrs);

// ---*** Location Input Box ***---
  let locLabel = document.createElement("label");
  locLabel.setAttribute("for", "loc");
  locLabel.textContent = "Location"
  let locTextArea = document.createElement("input");
  locTextArea.setAttribute("id", "loc");
  let locTextAreaAttrs = {
    class: 'textBox',
    id: 'loc',
    name: 'focus',
    placeholder: 'Enter or paste the location',
    required: '',
    type: 'text'
  }
setMultipleAttrs(locTextArea,locTextAreaAttrs);


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

  //---*** Paste Button ***---
  let pasteBtn = document.createElement('button');
  let pasteBtnAttrs = {
    class: 'pasteBtn ',
    type : 'button'
  }
    setMultipleAttrs(pasteBtn, pasteBtnAttrs);
  mainEl.appendChild(pasteBtn);

  //---*** Cards to Display ***---
let card0 = createCard(titleLabel,titleTextArea);
let card1 = createCard(locLabel,locTextArea,pasteBtn);
let card2 = createCard(sDateLabel,sDateInput,eDateLabel,eDateInput);


function setMultipleAttrs(elem, elemAttrs) {
  Object.keys(elemAttrs).forEach(attribute => {
    elem.setAttribute(attribute, elemAttrs[attribute]);
  });
}

function createCard(...elements){
  let card = document.createElement('div');
  card.classList.add('card');
  elements.forEach(e => {
    card.appendChild(e);
  });
  return card;
}

mainEl.appendChild(card1);

//---*** Read text from clipboard ***---
pasteBtn.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById('loc').value += text;
    console.log("Text pasted.");
  } catch (error) {
    console.log("Failed to read clipboard");
  }
});






