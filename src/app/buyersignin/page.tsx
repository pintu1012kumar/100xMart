"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SignupInput = {
  email: string;
  password: string;
};

export default function Buyersignup() {
  const router = useRouter();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostInputs({
      ...postInputs,
      [e.target.name]: e.target.value,
    });
  };

  async function sendRequest() {
    try {
      await axios.post("/api/buyer/signin", { ...postInputs });
      alert("Signin successful!");
      router.push("/buyerdashboard");
    } catch (e) {
      const error = e as AxiosError<{ message: string }>;
      alert(
        "Error while signing in: " +
          (error.response?.data?.message || error.message)
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r   flex items-center justify-center px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-5xl bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* Left Section (Text + Illustration) */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-indigo-50 h-full">
          <h1 className="text-4xl font-bold text-indigo-700 text-center mt-5 mb-4">
            Welcome to 100xmart !!
          </h1>
          <p className="text-gray-700 mb-6 text-center text-lg">
            Join thousands of buyers discovering amazing products. Create your
            free account and get started!
          </p>
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="Signup illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Section (Signup Form) */}
        <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-15 text-center ">
            Login:
          </h1>
          <form className="space-y-4">
            
            <div>
              <label className="label font-medium  text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Pintu@gmail.com"
                value={postInputs.email}
                onChange={handleChange}
               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-200 text-sm text-black"

              />
            </div>
            
            <div>
              <label className="label font-medium text-gray-700">
                Password:
              </label>
              <input 
                type="password"
                name="password"
                placeholder="••••••••"
                value={postInputs.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-200 text-sm text-black"
              />
            </div>
            <div className="text-sm text-red-500 text-right">
                Create account?{" "}
              <a href="/buyersignup" className="text-indigo-500 hover:underline cursor-pointer">
                  Signup
              </a>
            </div>
            <button
              type="button"
              onClick={sendRequest}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Sign In
            </button>
             <h1 className="text-black text-center">
              <p>Demo</p>
              <p>Email: Pintu@gmail.com</p>
              <p>Password: 123456</p>

             </h1>
          </form>
         
        </div>
      </div>
    </div>
  );
}
