// business logic:






// user interface logic:

$(document).ready(function(){
  $("#name").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstName").val();
    const secondName = $("input#lastName").val();
    const problem = $("input#problem").val();
    const time = $("#time").val();
    const date = $("#date").val();


    $(".firstName").text(firstName);
    $(".lastName").text(secondName);
    $(".problem").text(problem);
    $(".time").text(time);
    $(".date").text(date);
    
    $("#submission").show();

  });
});