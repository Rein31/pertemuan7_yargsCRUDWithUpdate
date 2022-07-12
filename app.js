// import yargs
const yargs = require("yargs");

// import app
const apps = require("./contact.js");

// console.log(yargs.argv);
yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Contact Email",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "Contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // const contact = {
    //   name : argv.name,
    //   email : argv.email,
    //   mobile : argv.mobile,
    // };
    // console.log(contact);

    apps.saveFileContactPar(argv.name, argv.mobile, argv.email);
  },
});

// shown contact list
yargs.command({
  command: "list",
  describe: "see contact lsit",
  handler() {
    apps.listContact();
  },
});

// show detail contact
yargs.command({
  command: "detail",
  describe: "show detail contact base on name",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    apps.detailContact(argv.name);
  },
});

// delete contact
yargs.command({
  command: "delete",
  describe: "delete contact base on name",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    apps.deleteContact(argv.name);
  },
});

yargs.parse();
