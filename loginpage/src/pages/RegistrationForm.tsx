import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
};

/* ✅ Yup Validation Schema */
const schema: yup.ObjectSchema<FormValues> = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Minimum 2 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Minimum 2 characters"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit phone number"),

  gender: yup.string().required("Gender is required"),
});

const RegistrationFormPages = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
    resolver: yupResolver(schema), 
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
      reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* First Name */}
          <div>
            <label className="block text-white mb-1 text-sm">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-300 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-white mb-1 text-sm">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-300 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white mb-1 text-sm">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-300 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-white mb-2 text-sm">Gender</label>
            <div className="flex gap-6 text-white">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Male"
                  {...register("gender")}
                  className="accent-white"
                />
                Male
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Female"
                  {...register("gender")}
                  className="accent-white"
                />
                Female
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-300 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegistrationFormPages;