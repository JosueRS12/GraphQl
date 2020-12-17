/*import {makeExecutableSchema} from "graphql-tools";*/
/*import {resolvers} from "./resolvers";*/
const {makeExecutableSchema} = require('graphql-tools');
const {resolvers} = require('./resolvers');
// the client be able to use this types
// type mutation allow insert external values...
const typeDefs = `
    type Query {
      hello: String      
      greet(name: String!): String
      tasks: [Task]
    }

    type Task{
      _id: ID
      title: String!
      description: String!
      number: Int
    }
  
    type Mutation{  
      createTask(input: TaskInput): Task
    }

    input TaskInput{
      title: String!
      description: String!
      number: Int
    }

`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
