import CommonInput from "../components/commonInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const loginSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at least 15 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      passwordRegex,
      "Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character",
    ),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const onSubmit = (data: LoginFormData) => {
    // In a real app you’d verify credentials here.
    // For now, treat any valid form submission as “logged in”.
    localStorage.setItem("auth", "true");
    localStorage.setItem("username", data.username);
    alert(`Welcome, ${data.username}`);
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <div className="mb-4">
          <CommonInput
            type="text"
            placeholder="Enter username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-2 relative">
          <CommonInput
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full px-8 pl-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {/* Eye Icon */}
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1 mb-2">
              {errors.password.message}
            </p>
          )}

        <button
          type="submit"
          className="pb-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          Submit
        </button>
        <div>
          <p>
            Don't have an account?
            <Link className="hover:underline" to="/registration">
              Sign up{" "}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
