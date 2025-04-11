import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller, navigate]);

  const onSubmitHandler = async (ev) => {
    try {
      ev.preventDefault();
      const { data } = await axios.post("/api/seller/login", {
        email,
        password,
      });

      if (data.success) {
        setIsSeller(true);
        navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            <span className="text-pri font-medium m-auto">Seller</span> Login
          </p>

          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-pri"
              required
              onChange={(ev) => setEmail(ev.target.value)}
              value={email}
            />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="border border-gray-200 w-full p-2 mt-1 outline-pri"
              required
              onChange={(ev) => setPassword(ev.target.value)}
              value={password}
            />
          </div>
          <button className="bg-pri text-white w-full py-2 rounded-md">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
