import Address from "../models/Address.js";

// Add Address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    // console.log("Request Body: ", req.body);
    const { address, userId } = req.body;

    await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

// Get Address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;

    const address = await Address.find({ userId });
    res.json({
      success: true,
      message: "Address Fetched Successfully",
      address,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
