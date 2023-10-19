const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, `kjvzckjhbvdjkfvbjkbvkjshjzbvhjxhj`, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
