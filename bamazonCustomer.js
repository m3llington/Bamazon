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

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log((res));
    for (var i = 0; i < res.length; i++){
      console.log("\nID: " + res[i].id + "\nProduct Name: " + res[i].product_name + "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price + "\nQuantity in Stock: " + res[i].stock_quantity + "\n----------------");
    
 }
  
  inquirer
    .prompt([
    {
      name: "ID",
      type: "input",
      message: "What is the ID of the item you would like to buy?",
      filter: Number
    },
    {
      name: "Quantity",
      type: "input",
      message: "What amount of that item would you like?",
      filter: Number 
    }
])
    .then(function(answer) {
      //answers from the ID prompt
      if (answer.ID === 1) {
        console.log("ID test is working");
        connection.end();
      }
      //answers from the quantity prompt
      else if (answer.Quantity === 2){
        console.log("Quantity test is working");
        connection.end();
      }
      else{
        console.log("test may be working");
        connection.end();
      }
    });
});

}

//for loop console log in order to show the items that the user can choose