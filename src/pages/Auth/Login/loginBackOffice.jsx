import { useFormik } from "formik";
import * as Yup from "yup";
import loginBackoffice from "../../../assets/images/LoginBackoffice.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { authAction } from "../../../slices/authSlice";

export default function LoginBackOffice() {
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
    handleSubmit
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

  return (
    <div className="flex h-screen bg-gradient-to-l from-white to-orange justify-end">
      <img src={loginBackoffice} alt="" className="absolute w-2/4 left-20" />
      <div className="flex bg-white w-2/3 rounded-l-2xl justify-end">
        <div className="flex flex-col w-4/5 items-center">
          <p className="mt-10 text-center text-logo">
            🔗D-<span className="text-orange font-bold">Autochain</span>
          </p>

          <div className="mt-52">
            <h1 className="text-title mb-3">Selamat Datang</h1>
            <h5 className="text-lightgray">Login dibawah untuk akses akunmu</h5>
            <div className="w-full max-w-xs">
              <form onSubmit={handleSubmit} className="rounded px-0 pt-6 pb-8 mb-4">
                <div>
                  <label className="block text-base mb-2">Email</label>
                  <input
                    className={`shadow border-1 rounded-lg w-80 h-12 ${
                      touched.email && errors.email && "border-red"
                    }`}
                    id="email"
                    type="text"
                    placeholder="Masukkan alamat email"
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
                    className={`shadow border-1 rounded-lg w-80 h-12 ${
                      touched.password && errors.password && "border-red"
                    }`}
                    id="password"
                    type="password"
                    placeholder="Masukkan password"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={password}
                  />
                </div>
                <div className="mb-6 text-red text-message italic">
                  {touched.password && errors.password}
                </div>
                <button
                  disabled={!isValid || !dirty}
                  className="bg-orange font-bold text-white focus:outline-none focus:shadow-outline w-80 h-12 disabled:bg-opacity-70"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
