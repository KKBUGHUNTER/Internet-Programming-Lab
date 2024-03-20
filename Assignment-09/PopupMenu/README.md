```sql
CREATE TABLE development(toolname VARCHAR(255), type VARCHAR(255));

INSERT INTO development VALUES('JAVA','programming');
INSERT INTO development VALUES('JavaScript','programming');
INSERT INTO development VALUES('C/Cpp','programming');
INSERT INTO development VALUES('Python','programming');

INSERT INTO development VALUES('VScode','software');
INSERT INTO development VALUES('Git','software');
INSERT INTO development VALUES('Colab','software');


SELECT * FROM development;

SELECT toolname FROM development WHERE type='programming'
```