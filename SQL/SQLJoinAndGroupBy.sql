-- Hard Challenge: SQL Join and Group By

-- Description: Write a SQL query to find the total sales amount for each department by joining the sales and employees tables.

-- Example Tables: employees and sales

-- employees Table:
-- employee_id	first_name	last_name	department	salary
-- 1	John	Smith	HR	50000
-- 2	Alice	Johnson	Marketing	60000
-- 3	Bob	Adams	IT	55000
-- 4	Emily	Parker	Finance	62000
-- 5	Mark	Anderson	Operations	58000

-- sales Table:
-- sale_id	employee_id	amount
-- 1	1	1000
-- 2	2	1500
-- 3	3	1200
-- 4	1	800
-- 5	4	2000
-- 6	2	1800
-- 7	5	900


SELECT e.department, SUM(s.amount) AS total_sales
FROM employees e
JOIN sales s ON e.employee_id = s.employee_id
GROUP BY e.department

-- This query will return the following result:
-- department	total_sales
-- HR	1800
-- Marketing	3300
-- IT	1200
-- Finance	2000
-- Operations	900