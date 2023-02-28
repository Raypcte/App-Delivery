const HttpException = require('./httpException');

class BadRequestError extends HttpException {
  constructor(message) {
    super(400, message || 'Bad request');
  }
}
module.exports = BadRequestError;
