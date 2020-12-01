// functions for to do queries.

export const resolvers = {
  Query : { //the type was defined in schema
    hello: () => { //this functions does anything when is called
      return 'Hello World Whit GraphQl xD';
    }, 
    greet: (root, args)=>{
      return `hi ${args.name}`;
    }
  }


  
};
