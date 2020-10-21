$(document).ready(function()) {
  $("#form-group").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstName").val();
    const secondName = $("input#secondName").val();
    const problem = $("input#problem").val();
    const time = $("#time").val();

  }
});