const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'Anonymous'); 

   
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}


app.get('/protected', authenticate, (req, res) => {
  
  res.json({ message: 'Access granted to protected route!' });
});
