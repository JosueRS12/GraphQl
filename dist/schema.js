"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTools = require("graphql-tools");

var _resolvers = require("./resolvers");

// the client be able to use this types
// type mutation allow insert external values...
var typeDefs = "\n    type Query {\n      hello: String      \n      greet(name: String!): String\n      tasks: [Task]\n    }\n\n    type Task{\n      _id: ID\n      title: String!\n      description: String!\n      number: Int\n    }\n  \n    type Mutation{  \n      createTask(input: TaskInput): Task\n    }\n\n    input TaskInput{\n      title: String!\n      description: String!\n      number: Int\n    }\n\n";

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});

exports["default"] = _default;
//# sourceMappingURL=schema.js.map