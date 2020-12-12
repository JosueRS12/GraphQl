"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _sample = require("./sample");

// functions for to do queries.
var resolvers = {
  Query: {
    //the type was defined in schema
    hello: function hello() {
      //this functions does anything when is called
      return 'Hello World Whit GraphQl xD';
    },
    greet: function greet(root, args) {
      return "hi ".concat(args.name);
    },
    tasks: function tasks() {
      return _sample.tasks;
    }
  },
  Mutation: {
    createTask: function createTask(_, _ref) {
      var input = _ref.input;
      //add a new atribute to input
      input._id = _sample.tasks.length; //add a new element in tasks

      _sample.tasks.push(input);

      return input;
    }
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map