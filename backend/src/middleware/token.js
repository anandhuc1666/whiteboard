// token.js
import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : req.cookies?.userToken;

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  console.log("JWT in verifyUser:", jwt);  // 👈 check here once

  jwt.verify(token, process.env.ACCESS_KEY, (err, decoded) => {
    if (err) {
      console.log("JWT verify error:", err);
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = decoded;
    next();
  });
};

export default verifyUser;
