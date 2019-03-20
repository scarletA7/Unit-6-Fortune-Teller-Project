$("button").click(function() {
    var name = $(".name").val();
    var userInput = parseInt($("input").val());
    
    var money = $(".money").val();
    var userInput = parseInt($("input").val());
    
    var yearly = $(".yearly").val();
    var userInput = parseInt($("input").val());
  
    var math1 = 33 * yearly;
    var math2 = 33 * money;
   
    var output = "In the year 2052 " + name + " will have " + math1 +    " amount of shoes and will spend " + math2 ;
    $(".results").append(output);
});