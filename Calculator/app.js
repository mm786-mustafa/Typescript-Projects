import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
function welcomeMessage() {
    let animation = chalkAnimation.karaoke(`
  
    Hey! Get ready for some math magic with our calculator.
             _____________________
            |  _________________  |
            | | JO           0. | |
            | |_________________| |
            |  ___ ___ ___   ___  |
            | | 7 | 8 | 9 | | + | |
            | |___|___|___| |___| |
            | | 4 | 5 | 6 | | - | |
            | |___|___|___| |___| |
            | | 1 | 2 | 3 | | x | |
            | |___|___|___| |___| |
            | | . | 0 | = | | / | |
            | |___|___|___| |___| |
            |_____________________|
    
    
o--o           o   o           o       o-o    
|   |          |\  /|           |       |      
O--o  o  o     | O | o  o o-o -o-  oo -O-  oo 
|   | |  |     |   |  |  |  \   |  | |  |  | | 
o--o  o--O     o   o o--o o-o  o  o-o- o  o-o-
         |                                    
      o--o                                    


  `);
    setTimeout(() => {
        animation.stop();
        askQuestions();
    }, 3000);
}
function addition(num1, num2) {
    console.log(chalk.bgGreen(`===> ${num1} + ${num2} = ${num1 + num2}`));
}
function subtraction(num1, num2) {
    console.log(chalk.bgGreen(`===> ${num1} - ${num2} = ${num1 - num2}`));
}
function multiplication(num1, num2) {
    console.log(chalk.bgGreen(`===> ${num1} x ${num2} = ${num1 * num2}`));
}
function division(num1, num2) {
    console.log(chalk.bgGreen(`===> ${num1} / ${num2} = ${num1 / num2}`));
}
function power(num1, num2) {
    console.log(chalk.bgGreen(`===> ${num1} ^ ${num2} = ${num1 ** num2}`));
}
async function askQuestions() {
    const choices = ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power", "> Exit"];
    while (true) {
        const operator = await inquirer.prompt([
            {
                name: "selectedOperator",
                type: "list",
                message: "Select the operation you want to perform:",
                choices: choices
            }
        ]);
        if (operator.selectedOperator === choices[5]) {
            let endingAnimation = chalkAnimation.karaoke(`Thank you was using Magical Calculator!`);
            setTimeout(() => {
                endingAnimation.stop();
            }, 3000);
            break;
        }
        else {
            const numbers = await inquirer.prompt([
                {
                    name: "num1",
                    type: "number",
                    message: chalk.hex("#e0b609")(`Enter the value for first number:`),
                },
                {
                    name: "num2",
                    type: "number",
                    message: chalk.hex("#e0b609")(`Enter the value for second number:`),
                }
            ]);
            if (!isNaN(numbers.num1) && !isNaN(numbers.num2)) {
                switch (operator.selectedOperator) {
                    case choices[0]:
                        addition(numbers.num1, numbers.num2);
                        break;
                    case choices[1]:
                        subtraction(numbers.num1, numbers.num2);
                        break;
                    case choices[2]:
                        multiplication(numbers.num1, numbers.num2);
                        break;
                    case choices[3]:
                        division(numbers.num1, numbers.num2);
                        break;
                    case choices[4]:
                        power(numbers.num1, numbers.num2);
                        break;
                    default:
                        console.log(chalk.redBright(`Invalid operator`));
                        break;
                }
            }
            else {
                console.log(chalk.bgRed(`Please enter a valid numbers!`));
            }
        }
    }
}
welcomeMessage();
