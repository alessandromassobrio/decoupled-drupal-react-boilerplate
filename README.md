...WIP...

This project aims at providing a simple ready-to-use fully decoupled Drupal8 + React boilerplate, where Drupal is used as data source and React is used as frontend. <br />The project supports only the default Drupal8 node types (Article and Basic Page); custom content types can be fetched by creating a new component for each of them in the ./components folder floowing the data structure at ```{baseurl}/jsonapi/node/{CUSTOM_NODE_TYPE}```. The app comes without any style.

# Usage

## Backend

#### Install Drupal8x with Composer

```composer create-project drupal-composer/drupal-project:8.x-dev YOUR_DRUPAL_DIRECTORY --stability dev --no-interaction```

Then ceate a MySQL or MariaDB database where to store data (you either need to setup your own virtual machine, or to use MAMP/XAMPP).

#### Access the Drupal installation procedure 

```http://localhost:{PORT}/{YOUR_DRUPAL_DIRECTORY}```

### (alternatively) Install Drupal8x using Docker

Pull MariaDB.

```docker pull mariadb```

Pull Drupal8.

```docker pull drupal:latest```

(optional) Check your images.

```docker images```

Run a container with MariaDB. Note that the data will be stored inside of the container therefore it will be lost after rebuilding the container (you might need it to apply MariaDB updates).

```docker run -e MYSQL_ROOT_PASSWORD=admin -e MYSQL_DATABASE=drupal8 -e MYSQL_USER=drupal8 -e MYSQL_PASSWORD=drupal8 -v mariadb:/var/lib/mysql -d --name mariadb mariadb```

Run Drupal container and link it to the just created MariaDB. Please adjust your port at ```-p xxxx:80``` if required

```docker run --name drupal8 --link mariadb:mysql -p 8000:80 -d drupal:latest```

Open the browser and complete the installation procedure at ```http://localhost:8000/```. In the Database configuration setting, under Advanced settings, you need to specify database host: ```mysql``` instead of ```localhost```.

#### Enable the JSON:API module

With Drush (if installed)

```vendor/bin/drush en -y jsonapi```

or using the Drupal Administrator UI 

#### Configure CORS

Create a copy of the "default.services.yml" file. In your Drupal directory: ```cp /sites/default/default.services.yml /sites/default/services.yml```

Then edit ```services.yml```, CTRL+V at the bottom to the ```cors.config``` section and replace the parameters as follows:

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

#### Log in to the Drupal Administrator

Create some data.

## Frontend

#### Start the app

```npm install```

```npm start```

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000)

#### Configure the Drupal baseurl

Replace the ```baseurl``` placeholder with the actual path in the "config.js" file

#### Deploy the app

```npm run build```
