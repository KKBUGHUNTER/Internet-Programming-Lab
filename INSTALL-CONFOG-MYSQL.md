## Install MySql in Ubuntu
```bash
sudo apt install mysql-server
systemctl start mysql
```
## Config Mysql `Root user`:

1. **Log in to MySQL as the root user** using `sudo`:
   ```bash
   sudo mysql -u root
   ```

2. **At the MySQL prompt**, switch to the `mysql` database:
   ```sql
   USE mysql;
   ```

3. **Alter the root user's authentication method** to use `mysql_native_password` and set a password:
   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
   ```

   Replace `'password'` with your desired password.

4. **Flush privileges** to apply the changes:
   ```sql
   FLUSH PRIVILEGES;
   ```

5. **Exit the MySQL prompt**:
   ```sql
   exit;
   ```

Now, you should be able to log in to MySQL as the root user without using `sudo`:

```bash
mysql -u root -p
```

