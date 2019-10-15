// Backend
var whichTra = function(work, style, fun, design, back) {
  if (work === "large" && style === "c" && back === "c") {
    return "C#/.Net"
  } else if (work === "droid" && style === "java" && fun === "game" && design === "css") {
    return "JavaScript"
  } else if (work === "small" && style === "php" && fun === "soc") {
    return "PHP"
  } else if (work === "start" && style === "ruby" && fun === "prob" && back === "ruby") {
    return "Ruby/Rails"
  } else if (fun === "game" && design === "css" && back === "css") {
    return "CSS/React"
  } else {
    return "not clear, look here"
  }
}

// Frontend
$(document).ready(function() {
  $("form#main").submit(function(e) {
    var work = $("select#work").val()
    var style = $("select#style").val();
    var fun = $("select#fun").val();
    var design = $("select#design").val();
    var back = $("select#back").val();

    if (work === "NA" && style === "NA" && fun === "NA" && design === "NA" && back === "NA") {
      $("#hide2").show();
      $("#hide1").hide();
    } else {
      var result = whichTra(work, style, fun, design, back);

      $("#result").empty().append(result);
      $("#hide1").show();
      $("#hide2").hide();
    }

    e.preventDefault();
  });
});
