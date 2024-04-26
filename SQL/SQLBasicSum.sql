-- Challenge 2: SQL Basic Sum

-- Description: For this challenge, you are provided with a database table sales_data containing numerical data. Your objective is to write a SQL query to calculate the sum of values in a specific column sales_amount.
-- Information Required:
-- Name of the database table containing the numerical data column.
-- Name of the numerical data column.
-- Example:
-- Database Table: sales_data
-- Numerical Data Column: sales_amount

-- These challenges provide a clear scenario and the necessary information for participants to write SQL queries to solve them. Let me know if you need further clarification or assistance!

-- Let's say we have a table sales_data with sales amounts for different products:

-- product_id	product_name	sales_amount
-- 1	Product A	100
-- 2	Product B	150
-- 3	Product C	200
-- 4	Product D	75
-- 5	Product E	125

SELECT SUM(sales_amount) AS sales_total FROM sales_data;

-- This query will return the following result:

-- total_sales
-- 650
-- Explanation: This query calculates the sum of the sales_amount column in the sales_data table, resulting in a total sales amount of 650.