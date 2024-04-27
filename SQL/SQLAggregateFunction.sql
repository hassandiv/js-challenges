-- Certainly! Here are three SQL challenges of varying difficulty levels along with examples of tables and values, followed by their solutions:

-- Easy Challenge: SQL Basic Selection

-- Description: Write a SQL query to select all columns from the employees table.

-- Example Table: employees

-- employee_id	first_name	last_name	department	salary
-- 1	John	Smith	HR	50000
-- 2	Alice	Johnson	Marketing	60000
-- 3	Bob	Adams	IT	55000
-- 4	Emily	Parker	Finance	62000
-- 5	Mark	Anderson	Operations	58000


SELECT AVG(salary) AS average_salary 
FROM employees;

-- Result:
-- average_salary
-- 57000
-- This query calculates the average price of products in the products table.