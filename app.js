let users_score=0;
let computer_score=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");


const userScore=document.querySelector("#user_score");
const ComputerScore=document.querySelector("#comp_score");

const reset_button=document.querySelector("#reset_btn");

// this is for reset function
reset_button.addEventListener("click",()=>{
    computer_score=0;
    users_score=0;
    userScore.innerText=users_score;
    ComputerScore.innerText=computer_score;

});

//generate computer choice function
const computerChoice=()=>{
    const options=["rock","paper","scissor"]
    //random generate & random num always generate between 0 to 1
    // for 0 to 2-> Math.random()*3=2.99
    // for 0 to 10-> Math.random()*10=9.99
    //for floor data-> Math.floor(Math.random()*10);
   const random_index= Math.floor(Math.random()*3);
   return options[random_index];
};

const drawGame=()=>{
    console.log("game was draw");
    message.innerText="Game was Draw & Play Again";
    message.style.backgroundColor="rgb(26, 100, 107)";
}  
const showWiner=(userWin,userchoice,computerChoice)=>{
    if(userWin){
        users_score++;
        userScore.innerText=users_score;
        message.innerText=`You win! ${userchoice} beats ${computerChoice}`;
        message.style.backgroundColor="tomato";
    }
    else{
        computer_score++;
        ComputerScore.innerText=computer_score;
        message.innerText=`You lose. ${computerChoice} beats ${userchoice}`;
        message.style.backgroundColor="cornflowerblue";
    }
}


// here we select the computer choice
//playGame is the function
const playGame=(userchoice)=>{
console.log("user choicen is:",userchoice);
const computer_choice=computerChoice();

//case-1
if(userchoice==computer_choice){
    drawGame();
}else{
    let userWin=true;
    if(userchoice=="stone"){
        //scissor, paper
        userWin=computer_choice=="paper"? false:true;
    }
    else if(userchoice=="paper"){
        //scissor, stone
        userWin=computer_choice=="stone"? true:false;
    }
    else if(userchoice=="scissor"){
        //stone, paper
        userWin=computer_choice=="paper"? true:false;
    }

    showWiner(userWin,userchoice,computer_choice);
}


}


// this is for the user choice selection
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       playGame(userchoice)
    });
});

