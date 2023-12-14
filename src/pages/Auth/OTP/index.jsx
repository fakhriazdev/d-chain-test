import AuthLayout from "../../../components/AuthLayout";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../../slices/authSlice";
import { ServiceContext } from "../../../context/ServiceContext";

export default function OtpPage() {
  const dispatch = useDispatch();
  const { authService } = useContext(ServiceContext);

  const [otp, setOtp] = React.useState(new Array(6).fill(""));
  const handleChange = (el, index) => {
    if (isNaN(el.value)) return false;
    setOtp([...otp.map((data, i) => (i === index ? el.value : data))]);
    if (el.nextSibling) {
      el.nextSibling.focus();
    }
  };

  // const {
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  // } = useFormik({
  //   initialValues: {
  //     otp: "",
  //   },
  // });

  const submitOtp = () => {
    dispatch(
      authAction(async () => {
        const result = await authService.verifyOtp();
        console.log(result);
      })
    )
    // otp.join("") === "111111"
    //   ? console.log("verified")
    //   : console.log("wrong otp");
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-sm mt-52">
        <h1 className="px-10">Enter OTP</h1>
        <div className="w-4/5 m-auto flex flex-row gap-2 my-1">
          {otp.map((data, i) => {
            return (
              <input
                type="text"
                name="otp"
                className="border border-orange w-10 h-10 rounded-md m-auto text-center"
                maxLength={1}
                key={i}
                value={data}
                onChange={(e) => handleChange(e.target, i)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <div className="w-4/5 m-auto flex flex-row gap-2 justify-center my-5">
          <button
            onClick={submitOtp}
            className="bg-orange font-bold text-white w-full h-11 rounded focus:outline-none focus:shadow-outline"
          >
            Verify OTP
          </button>
          {otp.join("")}
        </div>

        {/* <form className="pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm mb-2">Enter OTP</label>
            <input
              className="appearance-none border rounded w-11 h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-0 border-orange text-center"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
              onChange={handleChange}
              value={otp}
            />
            <input
              className="appearance-none border rounded w-11 h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-2 border-orange text-center"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
              onChange={handleChange}
              value={otp}
            />
            <input
              className="appearance-none border rounded w-11 h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-orange text-center"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
              onChange={handleChange}
              value={otp}
            />
            <input
              className="appearance-none border rounded w-11 h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-2 border-orange text-center"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
              onChange={handleChange}
              value={otp}
            />
            <input
              className="appearance-none border rounded w-11 h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-orange text-center"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
              onChange={handleChange}
              value={otp}
            />
            <input
              className="appearance-none border rounded w-11 h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-2 border-orange text-center"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
              onChange={handleChange}
              value={otp}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange text-white w-full h-11 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Verify OTP
            </button>
          </div>
        </form> */}
      </div>
    </AuthLayout>
  );
}
