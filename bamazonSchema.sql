DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

-- Creates table named products as well as all of its properties
CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("watch", "electronics", 75, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("greenshirt", "clothing", 85, 5);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("uglyshirt", "clothing", 1000, 1);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple", "food", 1, 5);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer", "electronics", 50, 2);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("orange", "food", 10, 5);