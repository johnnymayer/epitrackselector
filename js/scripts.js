$(document).ready(function(){

  $("#userAns").submit(function(event){
    event.preventDefault();
    var userName = $("#userName").val();
    var userBday = $("#userBday").val();
    var ans1 = $("#ans1").val();
    var ans2 = $("#ans2").val();
    var ans3 = $("#ans3").val();
    var ans4 = $("#ans4").val();
    var ans5 = $("#ans5").val();
    var results = calcPoints(ans1, ans2, ans3, ans4, ans5);
    console.log(results);
    determineTrack(results);
  });
});

var ans1;
var ans2;
var ans3;
var ans4;
var ans5;

var calcPoints = function(ans1, ans2, ans3, ans4, ans5) {

  var points = 0;

  if (ans1.length < 10) {
    points++;
  } else if (ans1.length === 6) {
    points = points + Math.round(parseFloat(Math.random()*10+1));;
  } else {
    points = points - Math.round(parseFloat(Math.random()*10+1));
  };

  if (ans2.length < 10) {
    points++;
  } else if (ans2.length === 5) {
    points = points + Math.round(parseFloat(Math.random()*10+1));;
  } else {
    points = points - Math.round(parseFloat(Math.random()*10+1));
  };

  if (ans3.length < 10) {
    points++;
  } else if (ans3.length === 8) {
    points = points + Math.round(parseFloat(Math.random()*10+1));;
  } else {
    points = points - Math.round(parseFloat(Math.random()*10+1));
  };

  if (ans4.length < 10) {
    points++;
  } else if (ans4.length === 7) {
    points = points + Math.round(parseFloat(Math.random()*10+1));;
  } else {
    points = points - Math.round(parseFloat(Math.random()*10+1));
  };

  if (ans5.length < 10) {
    points++;
  } else if (ans5.length === 5) {
    points = points + Math.round(parseFloat(Math.random()*10+1));;
  } else {
    points = points - Math.round(parseFloat(Math.random()*10+1));
  };

  return points;

};

var determineTrack = function(points) {
  if (points >= -5 && points < 0) {
    $("#ruby").show();
  } else if (points >= 1 && points < 70) {
    $("#java").show();
  } else {
    $("#css").show();
  }
};
