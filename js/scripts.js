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
    console.log(userName, userBday, ans1, ans2, ans3, ans4, ans5)
  });
});
