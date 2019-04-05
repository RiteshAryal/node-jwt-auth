const jwt = require('jsonwebtoken');

module.exports = {
  validateToken: (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    let result;

    if (authorizationHeader) {
      const token = req.headers.authorization.split(' ')[1]; // ie. Bearer <token>
      const options = {expiresIn: '2d', issuer: 'riteshlocaltest'};

      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        result = jwt.verify(token, process.env.JWT_SECRET, options);

        req.decoded = result; // Let's pass back the decoded token to the request object

        next(); // We call next to pass execution to the subsequent middleware

      } catch (err) {
        throw new Error(err); // Throw an error just in case anything goes wrong with verification
      }
    } else {
      result = {
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
  }
}