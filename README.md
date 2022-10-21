# PriceApp

## Requirement

Create a web application that allows you to see the prices (similar to https://www.price.ro/) for a product on the following webpages: www.altex.ro, www.mediagalaxy.ro and www.emag.ro.

The application should have a simple user interface with one input and one button. The user should be able to write the name of a product in the input and when he/she clicks on the “search” button, the application should search for the product on the three webpages mentioned above and fetch the first product that they can find on those particular pages, and list them and their prices on a new page. 

For example, if the user enters “samsung s21” in the search input and clicks on the search button, then he will see the following three “samsung” products (one from each webpage):

- Altex: Telefon SAMSUNG Galaxy S21 FE 5G, 256GB, 8GB RAM, Dual SIM, Graphite - 3399.00 lei
- Mediagalaxy: Telefon SAMSUNG Galaxy S21 FE 5G, 256GB, 8GB RAM, Dual SIM, Graphite - 3399.00 lei
- Emag: Telefon mobil Samsung Galaxy S21 FE, Dual SIM, 128GB, 6GB RAM, 5G, Graphite - 2919.00 lei


You do not have to store any data in the database. 

You are free to use any programming language and/or framework that you would like to.

## How to run
In the directory 'proxy-server' run:
```
npm install
```
```
node index.js
```

In the directory 'price-app' run:

```
npm install
```
```
npm start
```
## 
The purpose of the 'proxy-service' is to avoid running into CORS issues when making calls from our localhost domain to the Altex/Media Galaxy/Emag domains.
