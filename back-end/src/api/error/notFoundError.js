const HttpException = require('./httpException');

class NotFoundError extends HttpException {
  constructor(message) {
    super(404, message || 'Not found');
  }
}

module.exports = NotFoundError;
