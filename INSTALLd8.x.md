## Install Drupal 8.x 
##### A. Quick install using the Contenta distribution

```
php -r "readfile('https://raw.githubusercontent.com/contentacms/contenta_jsonapi_project/8.x-2.x/scripts/download.sh');" > download-contentacms.sh
chmod a+x download-contentacms.sh
./download-contentacms.sh /path/to/new-dir-for-contenta
```
              
After that, copy .env.example into .env and add the database connection details. NOTE: it is highly recommended to use .env.local to store your credentials, since that file is ignored by git.

###### Example .env file.
```
SITE_MAIL=admin@localhost
ACCOUNT_MAIL=admin@localhost
SITE_NAME='Contenta CMS Demo'
ACCOUNT_NAME=admin
MYSQL_DATABASE=contenta
MYSQL_HOSTNAME=localhost
MYSQL_PORT=3306
MYSQL_USER=contenta
```
              
###### Example .env.local file.
```
MYSQL_PASSWORD=contenta
ACCOUNT_PASS=admin
```
              
Once you have added your database connection details you can:

```
composer run-script install:with-mysql
```

##### B. Custom install with Composer

```
composer create-project drupal-composer/drupal-project:8.x-dev YOUR_DRUPAL_DIRECTORY --stability dev --no-interaction
```
You need to setup your own virtual host in order to access the installation procedure in your browser.


#### C. Using a Docker container

Pull MariaDB and latest Drupal version

```
docker pull mariadb
docker pull drupal:latest
```

Bind the just created MariaDB with Drupal

```
docker run -e MYSQL_ROOT_PASSWORD=admin -e MYSQL_DATABASE=drupal8 -e MYSQL_USER=drupal8 -e MYSQL_PASSWORD=drupal8 -v mariadb:/var/lib/mysql -d --name mariadb mariadb
docker run --name drupal8 --link mariadb:mysql -p 8000:80 -d drupal:latest
```
You can now open the browser and complete the installation procedure at ```http://localhost:8000/```. In Database configuration setting, under Advanced settings, you need to specify database host: ```mysql``` instead of ```localhost```.
