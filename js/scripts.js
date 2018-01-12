$(document).ready(function(){

  $("#userInfo").submit(function(event){
    event.preventDefault();
    var userName = $("#userName").val();
    var userBday = $("#userBday").val();
    var ans1 = $("#ans1").val();
    var ans2 = $("#ans2").val();
    var ans3 = $("#ans3").val();
    var ans4 = $("#ans4").val();
    var ans5 = $("#ans5").val();
  });
});
