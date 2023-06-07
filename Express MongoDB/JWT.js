const jwt = require('jsonwebtoken');

function generateToken(userId, secretKey) {
  const payload = { userId };
  const options = {
    expiresIn: '1h' 
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}


const userId = '256479'; 
const secretKey = 'Anonymous'; 

const token = generateToken(userId, secretKey);
console.log('Generated token:', token);
