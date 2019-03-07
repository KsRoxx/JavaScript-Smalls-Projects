var number;
var g_no;
var cont = true;
var guesses = 0;


number = Math.floor(Math.random() * 100);

function guess() {

    while (cont) {
        g_no = prompt("I'am guessing a  number from 0 to 100.\nUmm..Okay guessed!\n\nCan you guess the number? ");

        g_no = parseInt(g_no);
   
    
        if (g_no > number) {
            alert("The number is too large");
            guesses++;
        } else if (g_no < number) {
            alert("The number is too small");
            guesses++;
        } else {
            alert("Yes the correct answer is : " + number + "\nYou guessed the right ans in " + guesses + " guesses.\n\n Thank you for playing!")
            cont = false;
        }
    }
}
