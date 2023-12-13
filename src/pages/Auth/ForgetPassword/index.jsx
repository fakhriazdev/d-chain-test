import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AuthLayout from "../../../components/AuthLayout";

function ForgetPassword() {
  const schema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  const navigate = useNavigate();

  const {
    values: { email },
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
    },
    onSubmit: (values) => {
      if (values) {
        navigate("success");
      }
    },
    validationSchema: schema,
  });

  return (
    <AuthLayout>
      <div className="w-full max-w-sm mt-52">
        <h2 className="text-title">Forget Password</h2>
        <form className="pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-2" htmlFor="username">
              Email
            </label>
            <input
              className={`shadow appearance-none border-1 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
                errors.email && "border-red"
              }`}
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <p className="text-red text-message">{errors.email}</p>
          <div className="flex mt-4 items-center justify-between">
            <button
              className="bg-orange text-white font-bold w-full h-11 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!isValid || !dirty}
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default ForgetPassword;
