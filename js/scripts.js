// Backend


// Frontend
$(document).ready(function() {
  $("form#main").submit(function(e) {
    var work = $("select#work").val()
    var style = $("select#style").val();
    var fun = $("select#fun").val();
    var design = $("select#design").val();
    var back = $("select#back").val();

    e.preventDefault();
  });
});
