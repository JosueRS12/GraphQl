import {makeExecutableSchema} from "graphql-tools";
import {resolvers} from "./resolvers";

// the client be able to use this types
const typeDefs = `
    type Query {
      hello: String      
      greet(name: String!): String
    }

`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
