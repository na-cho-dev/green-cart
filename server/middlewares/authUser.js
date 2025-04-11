import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.body = req.body || {};
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res
        .status(403)
        .json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export default authUser;
