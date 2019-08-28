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
      for (var i = 0; i < res.length; i++){
        if (answer.ID === res[i].id){
          var orderID = answer.ID;
          var orderQuantity = answer.Quantity;
          console.log("Processing order...");
          purchaseOrder(orderID, orderQuantity);
          // connection.end();
        } 
      }
    
      function purchaseOrder(Id, Quantity){
        var i = Id;
         if (Quantity > res[i].stock_quantity) {
           console.log("I'm sorry we do not have the amount you requested")
           connection.end();
         }
         else{
           console.log("Order has been succesful!")
           console.log("You have chosen to purchase " + Quantity + " units of our famous " + res[i].product_name + " the total cost will be " + res[i].price  + "!")
           connection.end();
         }
         
       }
    
    
    });
});

// function purchaseOrder(Id, Quantity){
//  var i = Id;
//   if (Quantity < res[i].stock_quantity) {
//     console.log("Calm down you're asking for too much")
//     connection.end();
//   }
//   else{
//     console.log("PurchaseOrder succesful")
//     connection.end();
//   }
  
// }

}

//for loop console log in order to show the items that the user can choose