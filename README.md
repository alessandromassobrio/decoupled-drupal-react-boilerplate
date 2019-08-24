A basic decoupled React boilerplate to be used with Drupal 8x core module JSON:API<br />The project supports the default Drupal8 node—type—article; custom content types can be fetched by creating new components matching the endpoint at ```{baseurl}/jsonapi/node/{CUSTOM_NODE_TYPE}```. The app comes without any style.

# Usage

## Backend

#### Install Drupal 8.x 
[Installation guidelines](INSTALLd8.x.md)

#### Configure Drupal 8.x
[Configuration guidelines](CONFIGUREd8.x.md)

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
