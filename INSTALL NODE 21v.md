# Install Node 21v in Ubuntu
**Note:** run the command in `sudo` or `su` user.
## Update your System
```bash
sudo apt update
sudo apt upgrade
```
## Install Node21
```bash
sudo apt install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_21.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt update
sudo apt install nodejs -y
```
## Check the version
```bash
node --version
```
# Update Npm -> 10.5.2
```bash
npm install -g npm@10.5.2
```
