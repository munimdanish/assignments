let day = prompt("Enter Day").toLowerCase();
let message = "";
switch (day) {
    case "monday":
        message = "Wake up at 8am";
        break;
    case "tuesday":
    case "wednesday":
        message = "Wake up at 9am";
        break;
    case "thursday":
        message = "Wake up at 9:30am";
        break;
    case "friday":
        message = "Wake up at 8:30am";
        break;
    case "saturday":
    case "sunday":
        message = "Wake up at 10am";
        break;
    default:
        message = "No shedule found";
}
console.log(message);