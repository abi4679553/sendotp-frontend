import React, { useContext, useState } from "react";
import { Dcontext } from "../provider/Context";

export const Login = () => {
    const {BeURL,setCurrentUser,setIsAuth} = useContext(Dcontext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${BeURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const result = await res.json();

    if(result.success){
        setCurrentUser(result.data)
        setIsAuth(true)
    }
    else{
        setCurrentUser(null)
        setIsAuth(false) 
    }

    console.log("result", result);
  } catch (err) {
    console.log("Error in login", err);
  }
};
 

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-2">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-cyan-400 text-sm hover:text-cyan-300"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-gray-950 font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}

          <a
            href="/register"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Register
          </a>
        </p>

      </div>
    </div>
  );
};