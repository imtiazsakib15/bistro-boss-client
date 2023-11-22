import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    createUser(data?.email, data?.password).then((userCredential) => {
      updateUserProfile(data?.name, data?.photoURL)
        .then(() => {
          const userInfo = {
            email: userCredential.user.email,
            username: userCredential.user.displayName,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data?.insertedId) {
              Swal.fire({
                title: "Good job!",
                text: `Sign Up Successfully!`,
                icon: "success",
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Bistro Boss</title>
      </Helmet>
      <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  Sign up
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to="/login"
                  >
                    Log in here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <SocialLogin />

                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                  Or
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required." })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border"
                      />
                      <p>
                        {errors.name && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.name?.message}
                          </span>
                        )}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="photoURL"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Photo URL*
                      </label>
                      <input
                        type="text"
                        id="photoURL"
                        {...register("photoURL", {
                          required: "Photo URL is required.",
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border"
                      />
                      <p>
                        {errors.photoURL && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.photoURL?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Email address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required.",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format.",
                          },
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border"
                      />
                      <p>
                        {errors.email && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.email?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Password*
                      </label>
                      <input
                        type="password"
                        id="password"
                        {...register("password", {
                          required: "Password is required.",
                          minLength: {
                            value: 6,
                            message:
                              "Password should have at least 6 characters.",
                          },
                          maxLength: {
                            value: 32,
                            message:
                              "Password should contain less than 32 characters.",
                          },
                          pattern: {
                            value:
                              /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$%#^&(){}*`.:;<>,?~_+=|-])/,
                            message:
                              "Password should have at least one small letter, one capital letter, one number, and one special character.",
                          },
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border"
                      />
                      <p>
                        {errors.password && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.password?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          {...register("remember-me")}
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ms-3">
                        <label
                          htmlFor="remember-me"
                          className="text-sm dark:text-white"
                        >
                          I accept the{" "}
                          <Link
                            className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to=""
                          >
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
