const core = require('@actions/core');
const wait = require('./wait');


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
}

async function af5() {
  core.info("Hey af5()");
}

run();
