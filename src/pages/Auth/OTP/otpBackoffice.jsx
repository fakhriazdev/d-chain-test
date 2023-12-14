import { useDispatch } from "react-redux";
import loginBackoffice from "../../../assets/images/LoginBackoffice.png";
import React, { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { authAction } from "../../../slices/authSlice";

export default function OtpBackoffice() {
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

  const submitOtp = () => {
    dispatch(
      authAction(async () => {
        const result = await authService.verifyOtp();
        console.log(result);
      })
    );
    // otp.join("") === "111111"
    //   ? console.log("verified")
    //   : console.log("wrong otp");
  };

  return (
    <div className="flex h-screen bg-gradient-to-l from-white to-orange justify-end">
      <img src={loginBackoffice} alt="" className="absolute w-2/4 left-20" />
      <div className="flex bg-white w-2/3 rounded-l-2xl justify-end">
        <div className="flex flex-col w-4/5 items-center">
          <p className="mt-10 text-center text-logo">
            🔗D-<span className="text-orange font-bold">Autochain</span>
          </p>

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
          </div>

        </div>
      </div>
    </div>
  );
}
