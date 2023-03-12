// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () { 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  // This is displaying the current date on the webpage and a variable for the current time was set.
  var today = dayjs();
  $('#currentDay').text(today.format("MMMM DD, YYYY"));
  var currentTime = dayjs().format("HH");

  // setting up variables for each time block

  var time9am = $('#hour-9');
  var time10am = $('#hour-10');
  var time11am = $('#hour-11');
  var time12pm = $('#hour-12');
  var time1pm = $('#hour-13');
  var time2pm = $('#hour-14');
  var time3pm = $('#hour-15');
  var time4pm = $('#hour-16');
  var time5pm = $('#hour-17');
  var time6pm = $('#hour-18');
  var time7pm = $('#hour-19');
  var time8pm = $('#hour-20');

  // Make an array so loop can be ran for "past, present, future"
  var allTimes = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm,
    time6pm,
    time7pm,
    time8pm,
  ];

  for (var i = 0; i < allTimes.length; i++) {
    if (currentTime > allTimes[i].attr("id").split("-")[1]) {
      allTimes[i].addClass("past");

    } else if (currentTime < allTimes[i].attr("id").split("-")[1]) {
      allTimes[i].addClass("future");

    } else {
      allTimes[i].addClass("present");
    }

    $("text-" +(i+9)).val(localStorage.getItem("time-" +(i+9)))
  }
  
  // var description = document.getElementById('col-8 col-md-10 description');
  // var saveButton = document.getElementById('btn saveBtn col-2 col-md-1');


  function saveToLocalStorage (e) {
    console.log(e.target.dataset.time)
    var textToSave = $("#text-"+ e.target.dataset.time).val()
    console.log(textToSave)

    localStorage.setItem("time-"+e.target.dataset.time, textToSave)
  }

  $(document).on('click', "button", saveToLocalStorage);


});
