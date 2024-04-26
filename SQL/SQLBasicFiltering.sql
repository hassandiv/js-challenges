-- Certainly! Here are three more SQL challenges along with example tables, data, and their solutions:

-- Easy Challenge: SQL Basic Filtering

-- Description: Write a SQL query to select all columns from the products table where the price is greater than $50.

-- Example Table: products

-- product_id	product_name	price
-- 1	Laptop	800
-- 2	Smartphone	600
-- 3	Headphones	50
-- 4	Tablet	300
-- 5	Mouse	20


SELECT * FROM products WHERE price > 50;

-- This query will return the following result:
-- 1	Laptop	800
-- 2	Smartphone	600
-- 3	Tablet	300