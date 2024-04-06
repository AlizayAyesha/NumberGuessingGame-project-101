//This line imports the inquirer library, 
//which allows you to create interactive command-line prompts.
import inquirer from "inquirer";

//Here, we define an interface Answer which specifies the shape of the 
//object that will be returned by inquirer.prompt().
//It indicates that the object should have a property called userInput of type number
interface Answer {
    userInput: number;
}
//This is the main function of your program,
//marked as async because it contains asynchronous code (the await keyword).
async function main() {
    const systemgeneratednumber = Math.floor(Math.random() * 10); //line generates a random integer from 0 and 9 and stores it in the variable systemgeneratednumber.

//This code prompts the user to enter a number using inquirer.prompt().
// It waits for the user's input (await) and then assigns the result to the variable answer.
// We've specified the type of answer as Answer, ensuring that it matches the structure defined by the interface.
    const answer: Answer = await inquirer.prompt([
        {
            type: "number",
            name: "userInput",
            message: "Enter your guess number in the criteria of 1 to 10"
        }
    ]);

//Here, we destructure the userInput from the answer object and log 
//both the user's guess and the randomly generated number to the console.
    const { userInput } = answer;
    console.log(`Your Guess: ${userInput}, systemgeneratedno: ${systemgeneratednumber}`);

//This if statement checks if the user's input is not a number. 
//If it's not a number (isNaN), it logs an error message asking the user to enter a valid number.
    if (isNaN(userInput)) {
        console.log("Please enter a valid number.");
    } 
    
//This code compares the user's guess (userInput) with the randomly generated number (systemgeneratedno). 
//If they match, it congratulates the user; otherwise, it prompts the user to try again.
    else {
        if (userInput === systemgeneratednumber) {
            console.log("Congratulations, your answer is correct!\nYay, it's a win-win!");
        } else {
            console.log("Oops, wrong number. Try again.");
        }
    }
}
//Finally, we call the main() function to start the execution of our program.
main();
