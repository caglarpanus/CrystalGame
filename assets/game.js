$(document).ready(function(){

    var counter = 0;
    var wins = 0;
    var losses = 0;
    // Numbers must be between 19-120.
    var randomNumber = Math.floor(Math.random()*101+19);

    $("#target-number").text(randomNumber);
    $("#win").text(wins);
    $("#lose").text(losses);
    $("#score").text(counter);
    console.log(wins, counter, losses,randomNumber);

   var num1 = Math.floor(Math.random()*11+1);
   var num2 = Math.floor(Math.random()*11+1);
   var num3 = Math.floor(Math.random()*11+1);
   var num4 = Math.floor(Math.random()*11+1);

   // Reset function to reset the game every time we have the result.
`   `
   function reset (){
    var randomNumber = Math.floor(Math.random()*101+19);
    $("#target-number").text(randomNumber);

    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);

    counter = 0;
    $("#score").text(counter);
   }

// Button starts function when we click on them. 

   $(".img1").on("click", function(){
    counter += num1
    $("#score").text(counter);

        if (counter === randomNumber){
            wins++;
            $("#win").text(wins);
            $("#status").text("You won!");
            reset();
        }

        else if (counter > randomNumber){
            losses++;
            $("#lose").text(losses);
            $("#status").text("You lost!");
            reset();
        }
        
   })

   $(".img2").on("click", function(){
    counter += num2
    $("#score").text(counter);

        if (counter === randomNumber){
            wins++;
            $("#win").text(wins);
            $("#status").text("You won!")
            reset();
        }

        else if (counter > randomNumber){
            losses++;
            $("#lose").text(losses);
            $("#status").text("You lost!")
            reset();
        }
        
   })

   $(".img3").on("click", function(){
    counter += num3
    $("#score").text(counter);

        if (counter === randomNumber){
            wins++;
            $("#win").text(wins);
            $("#status").text("You won!")
            reset();
        }

        else if (counter > randomNumber){
            losses++;
            $("#lose").text(losses);
            $("#status").text("You lost!")
            reset();
        }
        
   })

   $(".img4").on("click", function(){
    counter += num4
    $("#score").text(counter);

        if (counter === randomNumber){
            wins++;
            $("#win").text(wins);
            $("#status").text("You won!")
            reset();
        }

        else if (counter > randomNumber){
            losses++;
            $("#lose").text(losses);
            $("#status").text("You lost!")
            reset();
        }
        
   })
  
});
