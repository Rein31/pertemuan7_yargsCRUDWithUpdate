// main
const main = async() =>{
  const apps = require('./contact.js');

  const name = await apps.questionsName('What is your name? ');
  const mobile = await apps.questionsPhone('your mobile number? ');
  const email = await apps.questionsEmail('your email? ');

  const contact = {name,mobile,email};

  const dirPath = './data';
  apps.dirPathValidator(dirPath);

  const dataPath = './data/contacts.json';
  apps.dataPathValidator(dataPath);

  apps.saveFileContact(contact);
  
  console.log(`Thank you ${name}, your email is ${email}, and your phone number is ${mobile}`);

  apps.rl.close()
}

main();