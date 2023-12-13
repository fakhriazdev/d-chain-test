import { useFormik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction, forgetAction } from "../../../slices/authSlice";
import * as Yup from "yup";
import AuthLayout from "../../../components/AuthLayout";
import { ServiceContext } from "../../../context/ServiceContext";
import { useContext } from "react";

function ForgetPassword() {
  const schema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams();
  const { authService } = useContext(ServiceContext);

  const {
    values: { email },
    errors,
    dirty,
    isValid,
    touched,
    handleChange = () => {},
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      dispatch(
        forgetAction(async () => {
          const result = await authService.forgetPassword({email: values.email});
          if (result.statusCode === 200) {
            alert("check your email");
          }
          alert(result);
        })
      );
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
                touched.email && errors.email && "border-red"
              }`}
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <p className="text-red text-message italic">{errors.email}</p>
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
