...WIP...

This project aims at providing a simple ready-to-use fully decoupled Drupal8 + React boilerplate, where Drupal is used as data source and React is used as frontend. <br />The project supports only the default Drupal8 node types (Article and Basic Page); custom content types can be fetched by creating a new component for each of them in the ./components folder floowing the data structure at ```{baseurl}/jsonapi/node/{CUSTOM_NODE_TYPE}```. The app comes without any style.

# Usage

## Backend

#### Install Drupal8x 
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

#### Enable the JSON:API module (you can skip this if using the Contenta distribution)

With Drush (if installed)

```vendor/bin/drush en -y jsonapi```

otherwise just use the Drupal Administrator UI 

#### Configure CORS (you can skip this if using the Contenta distribution)

Create a copy of the "default.services.yml" file. In your Drupal directory: ```cp /sites/default/default.services.yml /sites/default/services.yml```

Then edit ```services.yml``` and replace the parameters at the bottom to the ```cors.config``` as follows:

```
cors.config:
    enabled: true
    # Specify allowed headers, like 'x-allowed-header'.
    allowedHeaders: ['x-csrf-token','authorization','content-type','accept','origin','x-requested-with', 'access-control-allow-origin','x-allowed-header','*']
    # Specify allowed request methods, specify ['*'] to allow all possible ones.
    allowedMethods: ['*']
    # Configure requests allowed from specific origins.
    allowedOrigins: ['http://localhost/','http://localhost:3000','http://localhost:3001','http://localhost:3002','*']
    # Sets the Access-Control-Expose-Headers header.
    exposedHeaders: false
    # Sets the Access-Control-Max-Age header.
    maxAge: false
    # Sets the Access-Control-Allow-Credentials header.
    supportsCredentials: true
```

## Frontend

#### Start the app

Install dependencies and start the app at [http://localhost:3000](http://localhost:3000)

```
npm install
npm start
```

#### Configure the Drupal baseurl

Replace the ```baseurl``` placeholder with the actual path in the "config.js" file

#### Deploy the app

```npm run build```
