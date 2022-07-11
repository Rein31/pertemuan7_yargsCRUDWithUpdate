// import file system
const fs = require('fs');
const { resolve } = require('path');

// import readLine
const readline = require("readline");

// import validator
const validator = require("validator");

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

// save file contact to JSON
const saveFileContact = (contact) =>{
  const file = fs.readFileSync('data/contacts.json','utf8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

}

// check duplicate data JSON
const checkDuplicate = (name) => {
  const file = fs.readFileSync('data/contacts.json','utf8');
  const contacts = JSON.parse(file);
  let count = 0;
  contacts.forEach(element => {
    if (name == element.name) {
      // console.log(name);
      count = count + 1;
    }
  });

  if (count > 0) {
    return true;
  }else{
    return false;
  }
}

// save file contact with parameter and check duplicate
const saveFileContactPar = (name,mobile,email) =>{
  const contact = {name,mobile,email};
  const file = fs.readFileSync('data/contacts.json','utf8');
  const contacts = JSON.parse(file);

  // check duplicate data JSON
  if (checkDuplicate(name)) {
    console.log("name is already exist");
  }else{
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
    console.log("Terima kasih, data anda sudah tersimpan");   
  // rl.close();
  }
}



module.exports = {questionsName,questionsPhone,questionsEmail,dirPathValidator,dataPathValidator,saveFileContact,saveFileContactPar};