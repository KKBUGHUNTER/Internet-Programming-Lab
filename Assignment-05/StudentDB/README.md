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
CREATE TABLE myusers(
    username VARCHAR(255),
    passwd  VARCHAR(255)
);
```

```sql
SELECT * FROM myusers;

INSERT INTO myusers VALUES('karthikeyan','password');
INSERT INTO myusers VALUES('Testing','testing');

```

```bash
javac -cp '/usr/local/apache-tomcat-9.0.85/webapps/StudentDB/WEB-INF/lib/tomcat-servlet-api-9.0.4.jar' '/usr/local/apache-tomcat-9.0.85/webapps/StudentDB/WEB-INF/classes/Main.java' && ${CATALINA_HOME}/bin/shutdown.sh  && ${CATALINA_HOME}/bin/startup.sh
```

