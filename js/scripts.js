$(document).ready(function(){

  $("#userAns").submit(function(event){
    event.preventDefault();
    var userName = $("#userName").val().length;
    var userBday = $("#userBday").val().length;
    var ans1 = $("#ans1").val().length;
    var ans2 = $("#ans2").val().length;
    var ans3 = $("#ans3").val().length;
    var ans4 = $("#ans4").val().length;
    var ans5 = $("#ans5").val().length;
    var results = calcPoints(ans1, ans2, ans3, ans4, ans5);
    console.log(results);
    determineTrack(results);
  });
});

var calcPoints = function() {

  var points = 0;

  if (ans1.length >= 10) {
    points++;
  } else if (ans1.length === 5) {
    points = points+10;
  } else {
    points--;
  };

  if (ans2.length >= 10) {
    points++;
  } else if (ans2.length === 5) {
    points = points+10;
  } else {
    points--;
  };


  if (ans3.length > 10) {
    points++;
  } else if (ans3.length === 5) {
    points = points+10;
  } else {
    points--;
  };

  if (ans4.length = 10) {
    points++;
  } else if (ans4.length === 5) {
    points = points+10;
  } else {
    points--;
  };

  if (ans5.length = 10) {
    points++;
  } else if (ans5.length === 5) {
    points = points+10;
  } else {
    points--;
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
