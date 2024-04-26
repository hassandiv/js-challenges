-- Challenge 1: SQL Contains Letter

-- Description: In this challenge, you are given a database table "employee_data" with a column containing text data "full_name". Your task is to write a SQL query to find all the rows where a specific letter or substring is present within that column "full_name".
-- Information Required:
-- Name of the database table containing the text data column.
-- Name of the text data column.
-- Letter or substring you need to check for.
-- Example:
-- Database Table: employee_data
-- Text Data Column: full_name
-- Letter to Check: 'A'

-- TABLE COLUMN EXAMPLE:
-- employee_id	full_name
-- 1	John Smith
-- 2	Alice Johnson
-- 3	Bob Adams
-- 4	Emily Parker
-- 5	Mark Anderson


SELECT * FROM employee_data WHERE full_name LIKE '%A%'