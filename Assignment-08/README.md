.
├── index.html
├── README.md
└── WEB-INF
├── classes
│   └── Main.java
├── lib
│   ├── mysql-connector-j-8.3.0.jar
│   ├── mysql-connector-java-8.3.0.jar -> mysql-connector-j-8.3.0.jar
│   └── tomcat-servlet-api-9.0.4.jar
└── web.xml

3 directories, 7 files

```sql
CREATE DATABASE courses;
USE courses;

CREATE TABLE books(bid INT,bname VARCHAR(255),quantity INT);

INSERT INTO books VALUES(1,'C Programming', 10);
INSERT INTO books VALUES(2,'C++ Programming', 10);
INSERT INTO books VALUES(3,'Python Programming', 10);
INSERT INTO books VALUES(4,'Java Programming', 10);
INSERT INTO books VALUES(5,'JavaScript Programming', 10);


SELECT * FROM books;
```

### Sample Output
https://github.com/KKBUGHUNTER/Internet-Programming-Lab/assets/91019132/dfc6f9b0-d9d0-4dc4-8418-e962e28cbf45

