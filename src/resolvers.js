// functions for to do queries.
//import {tasks} from "./sample";
const {tasks} = require ('./sample');
export const resolvers = {
  Query : { //the type was defined in schema
    hello: () => { //this functions does anything when is called
      return 'Hello World Whit GraphQl xD';
    }, 
    greet: (root, args)=>{
      return `hi ${args.name}`;
    },
    tasks() {
      return tasks;
    }
  },
  Mutation: {
    createTask(_, {input}){
      //add a new atribute to input
      input._id = tasks.length;
      //add a new element in tasks
      tasks.push(input);
      return input;
    }
  }


  
};
