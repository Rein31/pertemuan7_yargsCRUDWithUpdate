// import file system
const fs = require('fs');
const { resolve } = require('path');

// import readLine
const readline = require("readline");

// import validator
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// question name
const questionsName = (ask) => {
  return new Promise((resolve,reject) =>{
    rl.question(ask, (answer) => {
      resolve(answer);
    })
  })
}

// question and validate phone number
const questionsPhone = (ask) => {
  return new Promise((resolve,reject) => {
    rl.question(ask, (pnumber) => {
      if (!validator.isMobilePhone(pnumber, "id-ID")) {
        console.log('phone number not valid!');
        resolve(questionsPhone(ask));
      }else{
        resolve(pnumber);
      }
    })
  })
}

// question and validate email
const questionsEmail = (ask) => {
  return new Promise((resolve,reject) => {
    rl.question(ask, (email) => {
      if (!validator.isEmail(email)) {
        console.log('email not valid!');
        resolve(questionsEmail(ask));
      }else{
        resolve(email);
      }
    })
  })
}

// validate dir folder path
function dirPathValidator(dirPath){
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

// validate dir data path
function dataPathValidator(dataPath){
    if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath,'[]','utf-8');
    }
}

const main = async() =>{
  const name = await questionsName('What is your name? ');
  const mobile = await questionsPhone('your mobile number? ');
  const email = await questionsEmail('your email? ');

  const contact = {name,mobile,email};

  const dirPath = './data';
  dirPathValidator(dirPath);

  const dataPath = './data/contacts.json';
  dataPathValidator(dataPath);

  // save array to file JSON
  const file = fs.readFileSync('data/contacts.json','utf8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

  console.log(`Thank you ${name}, your email is ${email}, and your phone number is ${mobile}`);

  rl.close()
}

module.exports = {main};