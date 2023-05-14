const core = require('@actions/core');
const fs = require('fs');
const wait = require('./wait');
const exec = require('child_process').exec;


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    core.info(`Waiting ${ms} milliseconds ...`);

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(parseInt(ms));
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());

    core.info("################################################");
    f1();
    f2();
    f3();
    f4();
    f5();
    core.info("################################################");
    af1();
    af2();
    af3();
    af4();
    af5();
    core.info("################################################");
  } catch (error) {
    core.setFailed(error.message);
  }
}

function f1() {
  core.info("Hey f1()");
}

function f2() {
  core.info("Hey f2()");
}

function f3() {
  core.info("Hey f3()");
}

function f4() {
  core.info("Hey f4()");
}

function f5() {
  core.info("Hey f5()");
}

async function af1() {
  core.info("Hey af1()");
}

async function af2() {
  core.info("Hey af2()");
}

async function af3() {
  core.info("Hey af3()");
}

async function af4() {
  core.info("Hey af4()");
  // Data which will write in a file.
  let data = "Learning how to write in a file."
      
  // Write data in 'Output.txt' .
  await fs.writeFile('Output.txt', data, (err) => {
      core.info("Calling writeFile.....");
      // In case of a error throw err.
      if (err) throw err;
      else {
        console.log("The file is updated with the given data");
      }
  })
  aaf1();
}

async function af5() {
  core.info("Hey af5()");
  fs.readFile('Output.txt', (err, inputD) => {
    if (err) throw err;
       console.log(inputD.toString());
  });
  zipContent();
}

async function aaf1() {
  core.info("Hey aaf1()");
}

async function zipContent() {
  core.info("Check workspace");
  exec('ls -la', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`Content: ${stdout}`);
  });
  core.info("Create files and folders to be zip");
}

run();
