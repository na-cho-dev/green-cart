import User from "../models/User.js";

// Update User Cart Data : /api/cart/update
export const updateCart = async (req, res) => {
  try {
    // console.log("Request Body:", req.body);
    const { userId, cartItems } = req.body;
    await User.findByIdAndUpdate(userId, { cartItems });

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
