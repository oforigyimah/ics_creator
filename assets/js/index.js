let icsFile;

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

console.log(icsFile);
// let fileName = prompt("Enter a namme");
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
  // let year = date.getUTCFullYear();
  // let month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  // let day = date.getUTCDate().toString().padStart(2, "0");
  // let hours = date.getUTCHours().toString().padStart(2, "0");
  // let minutes = date.getUTCMinutes().toString().padStart(2, "0");
  // let seconds = date.getUTCSeconds().toString().padStart(2, "0");

  // return year + month + day + "T" + hours + minutes + seconds + "Z";
  date.replace(":", "");
  date.replace("-", "");
  return dete;
}

// Read text from clipboard...............................
const pasteButton = document.getElementById("pasteButton");
pasteButton.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    document.querySelector("#loc").value += text;
    console.log("Text pasted.");
  } catch (error) {
    console.log("Failed to read clipboard");
  }
});
const pasteButton1 = document.getElementById("pasteButton1");
pasteButton1.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    document.querySelector("#title").value += text;
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
