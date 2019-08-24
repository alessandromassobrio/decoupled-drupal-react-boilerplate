## Configure Drupal 8.x
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
