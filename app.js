// import yargs
const yargs = require("yargs");

 // import app
 const apps = require('./contact.js');

// console.log(yargs.argv);
yargs.command({
  command :'add',
  describe :'add new contact',
  builder : {
    name : {
      describe : 'Contact Name',
      demandOption : true,
      type : 'string',
    },
    email : {
      describe : 'Contact Email',
      demandOption : false,
      type : 'string',
    },
    mobile : {
      describe : 'Contact mobile phone number',
      demandOption : true,
      type : 'string',
    },
  },
  handler(argv){
    // const contact = {
    //   name : argv.name,
    //   email : argv.email,
    //   mobile : argv.mobile,
    // };
    // console.log(contact);

    apps.saveFileContactPar(argv.name,argv.mobile,argv.email);
     
  },
});

yargs.parse();