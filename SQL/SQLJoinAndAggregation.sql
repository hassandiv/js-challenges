-- Medium Challenge: SQL Join and Aggregation

-- Description: Write a SQL query to find the total number of orders placed by each customer by joining the customers and orders tables.

-- Example Tables: customers and orders

-- customers Table:
-- customer_id	customer_name
-- 1	John Smith
-- 2	Alice Johnson
-- 3	Bob Adams

-- orders Table:
-- order_id	customer_id	amount
-- 1	1	100
-- 2	2	150
-- 3	1	200
-- 4	3	120
-- 5	2	180
-- 6	1	90

SELECT c.customer_name, COUNT(o.order_id) AS total_orders
FROM customer c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_name

-- This query will return the following result:
-- customer_name	total_orders
-- John Smith	3
-- Alice Johnson	2
-- Bob Adams	1