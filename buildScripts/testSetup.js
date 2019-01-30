// register babel to transpile our tests before they run
require('@babel/register')();

// this file is not transpiled
// Tell mocha to treat any .css file as an empty function
require.extensions['.css'] = () => {};
