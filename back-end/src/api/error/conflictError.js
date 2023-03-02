const HttpException = require('./httpException');

class ConflictError extends HttpException {
  constructor(message) {
    super(409, message || 'Conflict error');
  }
}
module.exports = ConflictError;
