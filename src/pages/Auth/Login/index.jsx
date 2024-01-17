import AuthLayout from "../../../components/AuthLayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { authAction } from "../../../slices/authSlice";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MessageBox from "../../../components/MessageBox";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";

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
  const { error, errorKey } = useSelector((state) => state.ui);
  const [valid, setValid] = useState(false);

  const {
    values: { email, password, showPassword },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      dispatch(
        authAction(async () => {
          const result = await authService.shortcutLogin({ email, password });
          if (result.statusCode === 200) {
            setValid(true);
            toast.success(`Success login`);
            sessionStorage.setItem("token", result.data.token);
            setTimeout(() => {
              navigate("/dashboard");
            }, 1000);
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
      <div>
        <Toaster/>
      </div>

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
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={password}
              />
              <span
                onClick={() => setFieldValue("showPassword", !showPassword)}
                className="absolute mt-3 -ml-8 cursor-pointer"
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
                )}
              </span>
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
