function errorHandler(err, _req, res) {
  console.log(err.status, '---', err.message, '\n', err.stack);
  switch (err.status) {
    case 400:
      return res.status(400).json(err.message);
    case 404:
      return res.status(404).json(err.message);
    case 401:
      return res.status(401).json(err.message);
    case 409:
      return res.status(409).json(err.message);
    default:
      return res.status(500).json(err.message);
  }
}

module.exports = errorHandler;
