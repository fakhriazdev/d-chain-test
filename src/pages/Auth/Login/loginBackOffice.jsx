import { useFormik } from "formik";
import * as Yup from "yup";
import loginBackoffice from "../../../assets/images/LoginBackoffice.png"

export default function LoginBackOffice() {
  const schema = Yup.object({
    email: Yup.string()
      .matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$", "Invalid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be greater than 6 character")
      .required("Password is required"),
  });

  const {
    values: { email, password },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
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
              <form className="rounded px-0 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-base mb-2">Email</label>
                  <input
                    className={`shadow-md border-1 rounded-lg w-80 h-12 ${
                      touched.email && errors.email
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
                <div className="text-red">{touched.email && errors.email}</div>
                <div className="mb-0">
                  <label className="block text-base mb-2">Password</label>
                  <input
                    className="shadow-md appearance-none border-1 rounded-lg w-80 h-12 text-gray-700 mb-5 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Masukkan password"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={password}
                  />
                </div>
                <div className="mb-2 text-red">
                  {touched.password && errors.password}
                </div>
                <button
                  disabled={!isValid || !dirty}
                  className="bg-orange text-white focus:outline-none focus:shadow-outline w-80 h-12 disabled:bg-opacity-70"
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
