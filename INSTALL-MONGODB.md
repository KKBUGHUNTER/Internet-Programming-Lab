# Install and Setup Mongodb Database and Compass in Ubuntu

## Install MongoDB Database
**1.1 Setup the System configuration**

```bash
sudo apt-get install -y gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg  --dearmor
```

Ubuntu 22.04 (Jammy)
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
Ubuntu 20.04 (Focal)
```bash 
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

**1.2 Install MongoDB Database**
```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-mongosh hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```

**1.3 Run the MongoDB Server**
```bash
sudo systemctl start mongod
sudo systemctl status mongod
```

**1.4 Auto start the MongoDB Server**(optional)
```bash
sudo systemctl enable mongod
```

## 2. Install MongoDB Compass
**2.1 Install MongoDB Compass** 
```bash
cd Download
wget https://downloads.mongodb.com/compass/mongodb-compass_1.42.5_amd64.deb
sudo dpkg -i mongodb-compass_1.42.5_amd64.deb
```
**2.2 Start the MongoDB Compass**
```bash
mongodb-compass
```