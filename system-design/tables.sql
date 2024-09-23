CREATE TABLE payments {
    customer_name varchar(128),
    processed_at date,
    amount int
};

CREATE TABLE balances (
    username varchar(128),
    balance int
);

CREATE TABLE large_table (
    random_int int
);


INSERT INTO payments VALUES ('clement', '2019-12-15', 10);
INSERT INTO payments VALUES ('clement', '2019-12-15', 10);
INSERT INTO payments VALUES ('alex', '2019-12-16', 15);
INSERT INTO payments VALUES ('sarah', '2019-12-17', 20);
INSERT INTO payments VALUES ('clement', '2019-12-18', 25);
INSERT INTO payments VALUES ('brian', '2019-12-19', 30);
INSERT INTO payments VALUES ('alex', '2019-12-20', 35);
INSERT INTO payments VALUES ('diana', '2019-12-21', 40);
INSERT INTO payments VALUES ('sarah', '2019-12-22', 45);
INSERT INTO payments VALUES ('clement', '2019-12-23', 50);
INSERT INTO payments VALUES ('emma', '2019-12-24', 55);
INSERT INTO payments VALUES ('brian', '2019-12-25', 60);
INSERT INTO payments VALUES ('diana', '2019-12-26', 65);
INSERT INTO payments VALUES ('alex', '2019-12-27', 70);
INSERT INTO payments VALUES ('emma', '2019-12-28', 75);
INSERT INTO payments VALUES ('sarah', '2019-12-29', 80);
INSERT INTO payments VALUES ('clement', '2019-12-30', 85);
INSERT INTO payments VALUES ('brian', '2019-12-31', 90);
INSERT INTO payments VALUES ('diana', '2020-01-01', 95);
INSERT INTO payments VALUES ('alex', '2020-01-02', 100);
INSERT INTO payments VALUES ('emma', '2020-01-03', 105);
INSERT INTO payments VALUES ('sarah', '2020-01-04', 110);
INSERT INTO payments VALUES ('clement', '2020-01-05', 115);
INSERT INTO payments VALUES ('brian', '2020-01-06', 120);
INSERT INTO payments VALUES ('diana', '2020-01-07', 125);
INSERT INTO payments VALUES ('alex', '2020-01-08', 130);
INSERT INTO payments VALUES ('emma', '2020-01-09', 135);
INSERT INTO payments VALUES ('sarah', '2020-01-10', 140);
INSERT INTO payments VALUES ('clement', '2020-01-11', 145);
INSERT INTO payments VALUES ('brian', '2020-01-12', 150);
INSERT INTO payments VALUES ('diana', '2020-01-13', 155);




INSERT INTO balances VALUES ('antoine', 0);
INSERT INTO balances VALUES ('clement', 1000);

INSERT INTO large_table (random_int)
SELECT round(random() * 1000000000)
FROM generate_series(1, 50000000) s(i)