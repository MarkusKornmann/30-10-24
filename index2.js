import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import inspirationalQuotes from "inspirational-quotes";

const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow, chalk.magenta, chalk.cyan];

function showQuote() {
    const quote = inspirationalQuotes.getQuote();
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const quoteBox = boxen(randomColor(quote.text), { padding: 1, margin: 1, borderStyle: 'double' });
    console.log(quoteBox);
}

// Funktion für die Benutzerinteraktion
function askForNewQuote() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'getQuote',
            message: 'Möchtest du ein inspirierendes Zitat sehen?',
            default: true,
        },
    ]).then(answers => {
        if (answers.getQuote) {
            showQuote();
            askForNewQuote(); // Fragt erneut, ob ein weiteres Zitat angezeigt werden soll
        } else {
            console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
            process.exit(0); // Programm beenden
        }
    });
}

// Hauptfunktion
function main() {
    console.log(chalk.blue('Willkommen zu deinem inspirierenden Zitat-Tool!'));
    askForNewQuote(); // Starte die Benutzerinteraktion
}

// Hauptfunktion aufrufen
main();


//
/*import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import inspirationalQuotes from "inspirational-quotes";

// Funktion zum Anzeigen eines Zitats
function showQuote() {
    const quote = inspirationalQuotes.getQuote();
    const quoteBox = boxen(chalk.red(quote.text), { padding: 1, margin: 1, borderStyle: 'double' });
    console.log(quoteBox);
}

// Funktion für die Benutzerinteraktion
function askForNewQuote() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'getQuote',
            message: 'Möchtest du ein inspirierendes Zitat sehen?',
            default: true,
        },
    ]).then(answers => {
        if (answers.getQuote) {
            showQuote();
            askForNewQuote(); 
        } else {
            console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
            process.exit(0); 
        }
    });
}

// Hauptfunktion
function main() {
    console.log(chalk.blue('Willkommen zu deinem inspirierenden Zitat-Tool!'));
    askForNewQuote(); // Starte die Benutzerinteraktion
}

// Hauptfunktion aufrufen
main(); */
