
var targetNumber = "";
var counter = 0;
var win="";
var lose="";
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];


for (var i= 19; i < 120; i++){

    targetNumber = $("#target-number");
    
    $("#target-number").text(targetNumber);
}



for (var i = 0; i <numberOptions.length; i++){

        
        $("img-crystal").attr("data-crystalValue", numberOptions[i]);

    }

$(".img-crystal").on("click", function(){

    var crystalValue = ($(this).attr("data-crystalValue"));

    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#score").text(counter)

    if (counter === targetNumber) {
        $("#win-lose").text("You Win!");
    }

    else if (counter >= targetNumber){
        $("#win-lose").text("You Lose!");
    }
 })