-- Hard Challenge: SQL Join and Group By

-- Description: Write a SQL query to find the total price of products sold by each customer by joining the orders and order_details tables.

-- Example Tables: orders and order_details

-- (Assuming order_id in order_details table is the foreign key referencing order_id in the orders table)

-- orders Table:
-- order_id	customer_id	order_date
-- 1	1	2024-04-01
-- 2	2	2024-04-03
-- 3	1	2024-04-05
-- 4	3	2024-04-07
-- 5	2	2024-04-10
-- 6	1	2024-04-12

-- order_details Table:
-- order_detail_id	order_id	product_id	quantity	unit_price
-- 1	1	1	2	800
-- 2	2	2	1	600
-- 3	3	3	3	50
-- 4	4	4	1	300
-- 5	5	5	2	20
-- 6	6	1	1	800

SELECT o.customer_id, SUM(od.quantity * od.unit_price) AS total_price
FROM orders o
JOIN order_details od ON o.order_id = od.order_id
GROUP BY o.customer_id

-- Result:
-- customer_id	total_price
-- 1	2550
-- 2	640
-- 3	300