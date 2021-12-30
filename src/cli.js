const arg = require('arg');
const inquirer = require('inquirer');
const createProject = require('./create-project');

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--template': String,
      '--targetDirectory': String,
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-t': '--template',
      '-d': '--targetDirectory',
      '-g': '--git',
      '-y': '--yes'
    },
    {
      argv: rawArgs,
      permissive: false,
      stopAtPositional: true
    }
  );
  return {
    template: args['--template'],
    targetDirectory: args['--targetDirectory'],
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = 'typescript';
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];

  if (!options.targetDirectory) {
    questions.push({
      type: 'input',
      name: 'targetDirectory',
      message: 'Please enter target directory for your project',
    });
  }
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: ['javascript', 'typescript'],
      default: defaultTemplate,
    });
  }

  if (options.git === undefined) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Should a git be initialized?',
      default: false,
    });
  }

  let answers = {};
  if (questions.length) {
    answers = await inquirer.prompt(questions);
  }
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
    targetDirectory: options.targetDirectory || answers.targetDirectory
  };
}

function printHelp() {
  console.log(`To create a new Expressive project, run 'expressive-cli new'`);
}

async function cli(args) {
  const rawArgs = args.slice(2);
  const action = rawArgs.shift();
  if (!action) {
    printHelp();
    process.exit(0);
  }
  if (action === 'new') {
    let options = parseArgumentsIntoOptions(rawArgs);
    options = await promptForMissingOptions(options);
    await createProject(options);
  } else {
    console.warn('!!! action not supported !!!');
  }
}

module.exports = cli;
