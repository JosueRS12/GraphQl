import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";

const app = express();
const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
=======

>>>>>>> 31593ef427fd31c878c77eba72a5c9373799be99

app.get('/', (req, res) =>{
  res.json({
      message: 'Hello world'
  })
});

app.use('/graphql', graphqlHTTP({
  graphiql: true, // gui for queries.
  schema: schema
}));




<<<<<<< HEAD
app.listen(PORT, ()=> console.log('Server on port 3000'));
=======
app.listen(PORT, ()=> console.log('Server ready'));
>>>>>>> 31593ef427fd31c878c77eba72a5c9373799be99
