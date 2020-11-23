var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];  
var userChosenColour
var level=0;
var start=true;
var userInputCount=0;
$(document).keydown(function(){
    if(start) {   
        start=false;
        nextSequence();
    }
});

function startOver() {
    gamePattern=[];
        userClickedPattern=[];  
        level=0;
        start=true;
        userInputCount=0;
}

function playSound(colour) {
    var audio=new Audio("sounds/"+colour+".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel) {
    if (userChosenColour==gamePattern[userInputCount]) {
        console.log("success");
        if (userInputCount==currentLevel){
            level++;
            userInputCount=0;
            setTimeout(nextSequence,1000);    
        }else {
            userInputCount++;
        }
    } else {
        
        
        $("body").addClass("game-over");
        playSound("wrong");
        setTimeout(function(){
            $("body").removeClass("game-over");
            },200);
        $("#level-title").text("Game Over, Press Any Key to Restart")
        start=true;
        console.log("wrong");
        startOver();
    }
}

function nextSequence()
{   
    level;
    $("#level-title").text("Level "+(level+1))
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

}

$(".btn").click(function(event){
    userChosenColour=event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    $("#"+userChosenColour).addClass("pressed");
    playSound(userChosenColour);
    setTimeout(function(){
        $("#"+userChosenColour).removeClass("pressed")
        },100);
    checkAnswer(level);
    
});  










console.log(userClickedPattern);
