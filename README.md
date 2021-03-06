# Migrate Parse Users to Auth0

This is a sample app demonstrating how to migrate your existing Parse users to Auth0. For additional details see the following [post](https://auth0.com/blog/2016/02/16/migrating-your-parse-users-to-auth0/).

## Prerequisite - Auth0 Account

You will need an Auth0 account for this example to work. Head over to [Auth0](https://auth0.com) and create one if you haven't already.

1. Login into your Auth0 Dashboard
2. Get your Client Id and Domain
3. Open the `auth0-variables-example.js` file and insert your Client Id and Domain
4. Rename the `auth0-variables-example.js` to `auth0-variables.js`

## Running the example

In order to run the example you need to just start a server. What we suggest is doing the following:

1. Install node
2. run `npm install`
3. run `node server`

Go to [http://localhost:3000](http://localhost:3000) and you'll see the app running :).

## Database Action Scripts
There are two scripts, **Login** and **Get User**, that will need to be implemented within the Auth0 Dashboard to enable the automigration to take place. We have added our sample implementation in the DatabaseActionScripts folder in this repo - to learn the how and why please visit this [post](https://auth0.com/blog/2016/02/16/migrating-your-parse-users-to-auth0/).

<p align="center">
  <img src="https://raw.githubusercontent.com/kukicadnan/CloudCakes/master/img/cloud-cakes-main.png" alt="CloudCakes App"/>
</p>