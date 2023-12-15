import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import AuthLayout from "../../../components/AuthLayout";

export default function NewPassword() {
  const schema = Yup.object({
    newPassword: Yup.string().min(6, "Password must grather than 6").required("Password is required"),
    confirm: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required("Confirm Password is required"),
  });

  const navigate = useNavigate();
  const {id} = useParams();

  const {
    values: { newPassword, confirm },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      newPassword: "",
      confirm: "",
    },
    onSubmit: async (values) => {
      try {
        const {body} = await fetch(
          `/api/auth/recovery-password/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: values.newPassword , 
          }
          );
          console.log("Response:", body);

        alert("berhasil")
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    },
    validationSchema: schema,
  });

  return (
    <AuthLayout>
      <div className="w-full max-w-sm mt-52">
        <h2 className="text-title">Create New Password</h2>
        <form className="pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className=" mb-4 ">
            <label className="block text-sm mb-2" htmlFor="username">
              New Password
            </label>
            <input
              className={`shadow appearance-none border-1 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
                touched.newPassword && errors.newPassword && "border-red"
              }`}
              name="newPassword"
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          <p className="text-red text-message italic">{touched.newPassword && errors.newPassword}</p>
          </div>
          <div className=" mb-4 ">
            <label className="block text-sm mb-2" htmlFor="username">
              Confirm New Password
            </label>
            <input
              className={`shadow appearance-none border-1 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
                touched.confirm && errors.confirm && "border-red"
              }`}
              name="confirm"
              id="confirm"
              type="password"
              placeholder="Confirm new password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          <p className="text-red text-message italic">{touched.confirm && errors.confirm}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange text-white font-bold w-full h-11 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!isValid || !dirty}
            >
              Save New Password
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
