
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const date = new Date();
  
  document.getElementById("fulldate").textContent = `${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;