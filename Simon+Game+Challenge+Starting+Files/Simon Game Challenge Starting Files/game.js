let buttonColors = ["red", "green", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern=[];

let level = 0;
let started = false;


$(document).keypress(function(){

  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

$(".btn").click(function(){
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
  
});

function checkAnswer(currentLevel){

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
  

  if(gamePattern.length === userClickedPattern.length){
    setTimeout(function() {
      nextSequence();
      }, 1000);
  }

} else {
    console.log("wrong");

    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function()  {
      $("body").removeClass("game-over");
      
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }

}



function nextSequence(){

userClickedPattern=[];
level++;
$("#level-title").text("Level " + level);

let n = Math.floor(Math.random() * 4);
let randomChosenColour = buttonColors[n];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
playSound(randomChosenColour);

}


function playSound(name){
  let color = new Audio("sounds/" + name + ".mp3");
  color.play();

}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")
},100);
  
}

function startOver(){
  level = 0;
  started = false;
  gamePattern = [];
}






