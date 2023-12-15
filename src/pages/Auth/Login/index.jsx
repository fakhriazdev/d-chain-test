import AuthLayout from "../../../components/AuthLayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { authAction } from "../../../slices/authSlice";

export default function Login() {
  const schema = Yup.object({
    email: Yup.string()
      .matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$", "Invalid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be greater than 6 character")
      .required("Password is required"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authService } = useContext(ServiceContext);

  const {
    values: { email, password },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(
        authAction(async () => {
          const result = await authService.login(values);
          if (result.statusCode === 200) {
            navigate("/verifyOtp");
          }
          const resultInfo = await authService.getUserInfo();
          return resultInfo;
        })
      );
    },
    validationSchema: schema,
  });

  useEffect(() => {
    const onGetUserInfo = async () => {
      const result = await authService.getUserInfo();
      if (result.statusCode === 200) {
        navigate("/backoffice");
      }
    };
    onGetUserInfo();
  }, [authService, navigate]);

  return (
    <AuthLayout>
      <div className="mt-52">
        <h1 className="text-title mb-3">Welcome</h1>
        <h5 className="text-lightgray">Login to access your account</h5>
        <div className="w-full max-w-xs">
          <form onSubmit={handleSubmit} className="rounded px-0 pt-6 pb-8 mb-4">
            <div>
              <label className="block text-base mb-2">Email</label>
              <input
                className={`shadow border-1 rounded w-80 h-12 ${
                  touched.email && errors.email && "border-red"
                }`}
                id="email"
                type="text"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={email}
              />
            </div>
            <div className="text-red text-message italic">
              {touched.email && errors.email}
            </div>
            <div className="mb-0 mt-4">
              <label className="block text-base mb-2">Password</label>
              <input
                className={`shadow border-1 rounded w-80 h-12 ${
                  touched.password && errors.password && "border-red"
                }`}
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={password}
              />
            </div>
            <div className="mb-2 text-red text-message italic">
              {touched.password && errors.password}
            </div>
            <div className="mb-4 text-end">
              <a className="text-orange">Forget Password?</a>
            </div>
            <button
              disabled={!isValid || !dirty}
              className="bg-orange font-bold text-white rounded focus:outline-none focus:shadow-outline w-80 h-12 disabled:bg-opacity-70"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
