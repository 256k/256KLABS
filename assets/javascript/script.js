
let html = document.getElementsByTagName("html")[0];

let date = new Date();
let dateHour = date.getHours();

if (dateHour > 19 && dateHour < 7 ) {
  html.className = "dark";
  console.log("dark mode enabled");
} else {
  html.className = "";
  console.log("dark mode disabled");
}
