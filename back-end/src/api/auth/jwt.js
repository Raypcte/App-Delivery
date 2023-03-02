require('dotenv/config');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { InternalError } = require('../error/internalError');

const secret = fs.readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'));

// usada para login e singup. Retorna um token
const jwtAuthenticate = (user) => {
  try {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return token;
  } catch (error) {
    throw new InternalError('erro em autenticar o usuário');
  }
};

// usada para validar acesso a rotas. Retorna as informações do usuário salvas no token
const jwtDecript = (token) => {
  try {
    const user = jwt.verify(token, secret);
    return user.data;
  } catch (error) {
    throw new InternalError('erro ao ler token');
  }
};

module.exports = {
  jwtAuthenticate,
  jwtDecript,
};
