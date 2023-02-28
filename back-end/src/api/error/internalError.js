const HttpException = require('./httpException');

class InternalError extends HttpException {
  constructor(message) {
    super(500, message || 'Internal server Error');
  }
}

module.exports = InternalError;
