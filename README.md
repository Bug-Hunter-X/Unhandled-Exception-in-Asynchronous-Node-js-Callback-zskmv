This repository demonstrates a common error in Node.js applications: unhandled exceptions within asynchronous callbacks.  The `bug.js` file shows an example where an error thrown inside a `setTimeout` callback is not caught, leading to a server crash. The `bugSolution.js` file provides a corrected version that properly handles the error using a `try...catch` block or promises.