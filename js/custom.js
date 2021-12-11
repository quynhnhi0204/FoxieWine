// JavaScript Document

//Countdown
var target_date = new Date().getTime() + 1000 * 3600 * 48; // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // format countdown string + set tag value
  countdown.innerHTML =
    "<span>" +
    days +
    "</span><span>" +
    hours +
    "</span><span>" +
    minutes +
    "</span><span>" +
    seconds +
    "</span>";
}

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

// Back to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// pop up notification
$(function() {
  $('.pop-up').hide();
  $('.pop-up').fadeIn(1000);
  
      $('.close-button').click(function (e) { 

      $('.pop-up').fadeOut(700);
      $('#overlay').removeClass('blur-in');
      $('#overlay').addClass('blur-out');
      e.stopPropagation();
        
    });
 });