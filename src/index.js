//const express = require('express');
import express from "express";
import {graphqlHTTP} from "express-graphql";
const app = express();

const schema = {};


app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}));




app.listen(3000, ()=> console.log('Server on port 3000'));
