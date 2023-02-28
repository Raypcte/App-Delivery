function errorHandler(err, _req, res, next) {
  console.error(err.status, err.message);
  
  switch (err.status) {
    case 400:
      res.status(400).json(err.message);
      break;
    case 404:
      res.status(404).json(err.message);
      break;
    case 401:
      res.status(401).json(err.message);
      break;
    default:
      res.status(500).json(err.message);
      break;
  }
  next(err);
}

module.exports = errorHandler;
