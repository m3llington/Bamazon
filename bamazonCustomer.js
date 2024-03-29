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
      console.log("\nID: " + res[i].id + "\nProduct: " + res[i].product_name + "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price + "\nQuantity: " + res[i].stock_quantity + "\n----------------");
    
 }
  
  inquirer
    .prompt([
    {
      name: "ID",
      type: "input",
      message: "What is the ID of the item you would like to buy?",
      filter: Number
      //used in order to return only numbers from user selection
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
        //to account for placement of index's in array
        var i = Id - 1;
         if (Quantity > res[i].stock_quantity) {
           console.log("I'm sorry we do not have the amount you requested")
           connection.end();
         }
         else{
          //  res[i].stock_quantity - Quantity
          var totalCost = Quantity * res[i].price;
           console.log("Order has been succesful!")
           console.log("You have chosen to purchase " + Quantity + " units of our famous " + res[i].product_name + " the cost will be " + totalCost  + "!")
           connection.end();
         }
         
       }
    
    
    });
});


}

