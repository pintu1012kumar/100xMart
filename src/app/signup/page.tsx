"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 

type SignupInput = {
  email: string;
  name: string;
  password: string;
  companyName: string;
};

export default function Signup() {
  const router = useRouter(); 
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
    companyName: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post("/api/seller/signup", {
        ...postInputs,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      alert("Signup successful!");

      router.push("/sellerdashboard"); 
    } catch (e: any) {
      alert("Error while signing up: " + (e?.response?.data?.message || e.message));
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl font-extrabold">Create an account</div>

        <LabelInput
          label="Name"
          placeholder="Pintu.."
          onChange={(e) =>
            setPostInputs((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <LabelInput
          label="Email"
          placeholder="pintu@gmail.com"
          onChange={(e) =>
            setPostInputs((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <LabelInput
          label="Password"
          type="password"
          placeholder="password"
          onChange={(e) =>
            setPostInputs((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <LabelInput
          label="Company Name"
          type="text"
          placeholder="ZipBite Pvt Ltd"
          onChange={(e) =>
            setPostInputs((prev) => ({
              ...prev,
              companyName: e.target.value,
            }))
          }
        />
        <button
          type="button"
          onClick={sendRequest}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-3 w-1/2"
        >
          Sign up
        </button>
        <div className="text-sm font-medium text-gray-500 mt-2">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-700 hover:underline">
            Sign in
          </a>
        </div>
      </div>

      <div className="hidden md:flex bg-gray-500 justify-center items-center">
        <div className="max-w-md p-4">
          <div className="text-2xl font-bold">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concern."
          </div>
          <div className="text-xl font-semibold mt-2">Julies Winfield</div>
          <div className="text-sm font-medium text-slate-400 mt-1">
            CEO | Acme corp
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelInput({ label, placeholder, onChange, type }: LabelInputType) {
  return (
    <div className="my-2 w-1/2">
      <label className="block mb-1 text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type ?? "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
