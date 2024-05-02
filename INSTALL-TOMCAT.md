# Install and Config Tomcat server in Ubuntu

```bash
sudo apt-get install unzip
cd Download
wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.88/bin/apache-tomcat-9.0.88.zip
sudo unzip apache-tomcat-9.0.88.zip -d ~/Desktop/ 
```
**1.2 Give Permission for the server folder**
```bash
sudo chmod 777 -R ~/Desktop/apache-tomcat-9.0.88/
```
**1.3 Set `env` in ubuntu**
```bash
sudo nano ~/.bashrc
```
- go to the last line and and add the below line
    
    `SERVER=~/Desktop/apache-tomcat-9.0.88`
- save the file
**1.4 run the bashrc file**
```bash
source ~/.bashrc
/ ~/.bashrc
```
**1.5 Run the server**
```bash
${SERVER}/bin/startup.sh
```
[Tomcat Servlet 9.0.4 Download Link](https://jar-download.com/artifacts/org.apache.tomcat/tomcat-servlet-api/9.0.4/source-code)

```bash 
javac -classpath <path-to-tomcat-api> <path-to-java-file>
```

```bash
${SERVER}/bin/shutdown.sh && ${SERVER}/bin/startup.sh
```
