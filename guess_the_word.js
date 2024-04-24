/*
Game guess the word

The user have 3 attempts for guess the hidden word.

requirements:

- the game must have a hidden word
- the game can give a track of the word
- the user must enter a assumption
- the game must verify the assumption of the user is correct
- the game must have a number limited of attempts
- the game must over where the user you enter the word correct or run out of attempts 
*/
let hiddenWord = "Javascrript";
let attempts = 3

function verifyWordCorrect(assumption, attempts){
    if(assumption.toLowerCase() === hiddenWord){
        return true
    }
    return false
}

function gameGuessTheWord(){
    alert("¡Welcome! : the game about guess the word");
    alert("Yoy have 3 attempts");
    alert("the track is : Programming languages");

    while(attempts > 0){
        let assumption = prompt("Write your word: ")

        if(verifyWordCorrect(assumption, attempts)){
            alert("Correct");
            break;
        }else{
            attempts--;
            if(attempts >0){
                alert(`incorrect, you have ${attempts} attempts`)
            }else{
                alert(`You have no attempts, the hidden word is ${hiddenWord}`)
            }

        }
    }
}
gameGuessTheWord()
