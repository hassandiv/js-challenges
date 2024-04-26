-- Certainly! Here's an example table with data for the challenge "SQL Contains Substring":

-- Example Table: product_names

-- product_id	product_name
-- 1	Laptop
-- 2	Smartphone
-- 3	Headphones
-- 4	Tablet
-- 5	Wireless Mouse
-- 6	Keyboard
-- 7	Smartwatch
-- 8	Portable Charger
-- In this table, we have a list of product names. Now, let's solve the challenge by writing a SQL query to select all rows where the product name contains the substring "Smart":

SELECT * FROM product_names WHERE product_name LIKE '%Smart%';

-- This query will return the following result:

-- product_id	product_name
-- 2	Smartphone
-- 7	Smartwatch
-- Explanation: This query selects all rows from the product_names table where the product_name column contains the substring "Smart". The '%' symbol is a wildcard that matches any sequence of characters.