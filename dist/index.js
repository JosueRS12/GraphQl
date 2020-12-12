"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const express = require('express');
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.json({
    message: 'Hello world'
  });
});
app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  // gui for queries.
  schema: _schema["default"]
}));
app.listen(3000, function () {
  return console.log('Server on port 3000');
});
//# sourceMappingURL=index.js.map