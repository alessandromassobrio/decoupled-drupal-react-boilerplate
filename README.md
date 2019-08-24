A basic decoupled React boilerplate to be used with Drupal 8x core module JSON:API<br />The project supports the default Drupal8 node—type—article; custom content types can be fetched by creating new components matching the endpoint at ```{baseurl}/jsonapi/node/{CUSTOM_NODE_TYPE}```. The app comes without any style.

# Usage

## Backend

#### Install Drupal8x 
[Installation guidelines](INSTALLd8.x.md)

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
