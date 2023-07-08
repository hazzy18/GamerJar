const input = document.querySelector("input"),
  guess = document.querySelector(".write"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".try");

  let randomNum = Math.floor(Math.random() * 100);
  chance=10;
  checkButton.addEventListener("click", () => {
    chance--;
    let inputValue = input.value;

    if (inputValue == randomNum) {
        guess.textContent="Congratulations :)";
      guess.style.color="#008000";
      checkButton.textContent="Replay";
    //   if(checkButton.textContent=="Replay"){
    //     location.reload();
    //   }
    checkButton.addEventListener("click", () => {
        location.reload();
    });
    
      } if (inputValue > randomNum && inputValue < 100) {
    
    
        guess.textContent="Your guess is High";
        remainChances.textContent=chance;
        guess.style.color="#1834d8";
      }
      
    
       if(inputValue < randomNum )
    {
        guess.textContent="Your guess is low";
        remainChances.textContent=  chance;
        guess.style.color="#1834d8";

      }
 
    
      if (chance == 0) {
        checkButton.textContent="Replay";
        input.disabled=true;
        // [, , inputValue] = [, true, ""];
        guess.textContent="You lost the game ;(";
         guess.style.color = "#DE0611";

      }

      if(chance<0)
      {
        location.reload();
      }
    
  });