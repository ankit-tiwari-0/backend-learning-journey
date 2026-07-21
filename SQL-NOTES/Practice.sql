use practice;

CREATE TABLE STUDENT (
    STUDENTID INT NOT NULL,
    STName VARCHAR(50) NOT NULL,
    AGE INT NOT NULL
);

INSERT INTO STUDENT (STUDENTID, STName, AGE)
VALUES(1, "ANKIT", 26),(2, "KKK", 55);

SELECT * FROM STUDENT;

CREATE TABLE Employees (
    EMPID INT NOT NULL,
    FIRSTNAME VARCHAR(50),
    LASTNAME VARCHAR(50),
    SALARY INT NOT NULL
);

INSERT INTO Employees (EMPID, FIRSTNAME, LASTNAME,SALARY)
VALUES(111, "JJJ" , "KKKK", 455555)

SELECT * FROM Employees;

CREATE TABLE USERS (
    UserID INT UNIQUE,
    Username VARCHAR(50),
    Email VARCHAR(100) UNIQUE  
)

INSERT INTO USERS(`UserID`, `Username`, `Email`)
VALUES(111111, "KDDDDDDDDD", "AMLL@gMAIL.COM")

SELECT * FROM users;


CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(50),
    Author VARCHAR(55)
)

INSERT INTO Books(`BookID`,`Title`,`Author`)
VALUES(100, 'PHUTIYAA' , "GANDDHHI")

SELECT * FROM Books;

CREATE TABLE Department(
    DepartmentID INT PRIMARY KEY NOT NULL,
    DepartmentName VARCHAR(50)
);

CREATE TABLE Employee(
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(50),
    DepartmentD INT,
    FOREIGN KEY (DepartmentD) REFERENCES Department(DepartmentID)
);

INSERT INTO Department (DepartmentID, DepartmentName)
VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance');

INSERT INTO Employee (EmployeeID, EmployeeName, DepartmentD)
VALUES
(101, 'Ankit', 2),
(102, 'Rahul', 1),
(103, 'Priya', 3);

SELECT * FROM Employee;
SELECT * FROM Department;