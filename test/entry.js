var context = require.context(/*directory*/'mocha!./client', true, /_test.js$/);

context.keys().forEach(context);
module.exports = context;
