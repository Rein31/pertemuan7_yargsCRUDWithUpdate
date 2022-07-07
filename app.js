// console.log('Hello World!');

// import readLine
const readline = require("readline");

// import validator
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("What is your name? ", (name) => {
    emailInput(name);
});

function emailInput(name) {
    rl.question("What is yor email? ", (email) => {
      if (!validator.isEmail(email)) {
        console.log("email not valid");
        emailInput();
      } else {
        phoneNumberInput(name,email);
      }
    });
}

function phoneNumberInput(name, email) {
    rl.question("What is your phone number? ", (pnumber) => {
        if (!validator.isMobilePhone(pnumber, "id-ID")) {
            console.log("phone number not valid");
            phoneNumberInput();
        } else {
            console.log(`Thank you ${name}, your email is ${email}, and your phone number is ${pnumber}`);
            rl.close();
        }
    })
}

// validator email
// console.log(validator.isEmail('reinaldi@gmail.com'));

// validator phone number
// console.log(validator.isMobilePhone('082217191636', 'id-ID'));
