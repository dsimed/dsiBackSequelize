require("rootpath")();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql");
const app = express();
const errorHandler = require("_middleware/error-handler");
const port = 3004;

//--------CONFIG SSL

/* Création des constantes pour utiliser le serveur https */
// const fs = require("fs");
// const path = require("path");
// const https = require("https");
 
// /* Récupération de la clé privée et du certificat ( dans le dossier certificate) */
// const key = fs.readFileSync(path.join(__dirname, 'certificate', 'server.key'));
// const cert = fs.readFileSync(path.join(__dirname, 'certificate', 'server.cert'));
 
// const options = { key, cert };
 
/* Création serveur HTTPS */
// https.createServer(options, app).listen(3004, () => {
//   console.log('App is running ! Go to https://localhost:3004');
// });


//--------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use("/users", require("./users/user.controller"));

// global error handler
app.use(errorHandler);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "dsimed",
});


module.exports = { app, port, db };
