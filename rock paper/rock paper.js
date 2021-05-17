var choices=["p","r","s"];
var cmp=0;
var computerScore=0;
var userScore=0;


 
function getComputerChoise(){
    var i=Math.floor(Math.random()*3);

}



rock_div.addEventListener("click",function(){
    play ("r");
});
paper_div.addEventListener("click",function(){
    play ("p");
});
scissor_div.addEventListener("click",function(){
    play ("s");
});

while(cmp>=5){
    function play(userChoise){
         const computerChoise=getComputerChoise();
         var rock_div=document.getElementById ('rock');
          var paper_div=document.getElementById('paper');
         var scissor_div=document.getElementById('scissor');
  

          switch(user+computerChoise){
                    case"rp":
                     computerScore++;
                     document.getElementById("computer_score").innerHTML = computerScore;
                     break;
 
                     case"sp":
                         userScore++;
                         document.getElementById("user_score").innerHTML = userScore;
                          break;  
 
                    case"pr":
                            userScore++;
                            document.getElementById("user_score").innerHTML = userScore;
                               break;
                    case "ps":
                               computerScore++;
                               document.getElementById("computer_score").innerHTML = computerScore;
                                   break;
                   case "pp":
                                 computerScore++;
                                 userScore++;
                                 document.getElementById("computer_score").innerHTML = computerScore;                                  
                                   document.getElementById("user_score").innerHTML = userScore;
                                   break;
 
                    case "ss":
                                       userScore++;    
                                       computerScore++;
                                       document.getElementById("computer_score").innerHTML = computerScore; 
                                       document.getElementById("user_score").innerHTML = userScore; 
                                         break;
                   case "rr":
                                      userScore++;
                                      computerScore++;  
                                      document.getElementById("computer_score").innerHTML = computerScore;
                                      document.getElementById("user_score").innerHTML = userScore; 
                                          break;
                         
          }
     }
     cmp++;
 }
  


   



