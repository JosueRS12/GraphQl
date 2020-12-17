const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
/*import express from "express";*/
//import {graphqlHTTP} from "express-graphql";
/*import schema from "./schema";*/

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) =>{
  res.json({
      message: 'Hello world'
  })
});

app.use('/graphql', graphqlHTTP({
  graphiql: true, // gui for queries.
  schema: schema
}));




app.listen(PORT, ()=> console.log('Server ready'));
