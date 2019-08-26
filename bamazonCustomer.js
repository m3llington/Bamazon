var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "UCFbootcamp123",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("connected as id " + connection.threadId);
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt([
    {
      name: "ID",
      type: "input",
      message: "What is the ID of the item you would like to buy?",
    },
    {
      name: "Quantity",
      type: "input",
      message: "What amount of that item would you like?"  
    }
])
    .then(function(answer) {
      //Place holder
    });
}

