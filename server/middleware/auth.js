//validating the token
const jwt = require("jsonwebtoken");

const secret = "jwtSecret";

module.exports = (req, res, next) => {
  console.log("hello from middleware auth");
  //get the token
  //next is the next callback
  const token = req.header("x-auth-token");
  //header: x-auth-token.
  console.log(token);
  if (!token) {
    return res.status(401).json({
      error: "invalid token, authorization denied",
    });
  }
  //verify token
  try {
    jwt.verify(token, "jwtSecret", (error, decoded) => {
        console.log(JSON.stringify(error));
      if (error) {
        return res.status(401).json({ msg: "invalid token" });
      } else {
        req.user = decoded.user;
        //user details will be attached to the existing request.
        next();
        //next will call next middleware/it will go to the router.
      }
    });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({
      msg: "server error",
    });
  }
};
