import inspirationalQuotes from 'inspirational-quotes';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

async function showInspirationalQuote() {
  try {
    const quote = inspirationalQuotes.getQuote();
    const quoteBox = boxen(chalk.red(quote.text), { padding: 1, margin: 1, borderStyle: 'double' });
    console.log(quoteBox);
  } catch (error) {
    console.error('Fehler beim Abrufen oder Anzeigen des Zitats:', error);
  }
}

async function main() {
  console.log(chalk.blue('Willkommen zu deinem inspirierenden Zitat-Tool!'));

  let shouldContinue = true;
  while (shouldContinue) {
    await showInspirationalQuote();

    const { getQuote } = await inquirer.prompt({
      type: 'confirm',
      name: 'getQuote',
      message: 'Möchtest du ein weiteres inspirierendes Zitat sehen?',
      default: true,
    });

    shouldContinue = getQuote;
  }

  console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
}

main();

//