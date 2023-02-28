const HttpException = require('./httpException');

class UnauthorizedError extends HttpException {
  constructor(message) {
    super(401, message || 'Unauthorized');
  }
}

module.exports = UnauthorizedError;
