```bash
javac -classpath '/home/dev/Documents/apache-tomcat-10.1.18/lib/tomcat-servlet-api-9.0.4.jar' WEB-INF/classes/HelloServlet.java

${CATALINA_HOME}/bin/shutdown.sh

${CATALINA_HOME}/bin/startup.sh
```