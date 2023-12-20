---Sum the number of payments for each user

--Finish it later


SELECT customer_name, count(*)
FROM payments
GROUP BY customer_name