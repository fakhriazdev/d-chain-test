import AuthLayout from "../../../components/AuthLayout";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../../slices/authSlice";
import { ServiceContext } from "../../../context/ServiceContext";
import { useNavigate } from "react-router-dom";

export default function OtpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authService } = useContext(ServiceContext);
  const arrayCode = new Array(6).fill("");

  const queryParams = new URLSearchParams(window.location.search);
  const secret = queryParams.get("secret");
  const digit = queryParams.get("digit");
  const period = queryParams.get("period");
  const email = queryParams.get("email");

  const { handleSubmit, values } = useFormik({
    initialValues: {
      secret: "",
      period: "",
      digits: 6,
      code: [],
      email: "",
    },
    onSubmit: (values) => {
      const data = {
        secret: secret,
        period: period,
        digits: digit,
        code: values.code.join(""),
        email: email,
      };

      dispatch(
        authAction(async () => {
          const result = await authService.verifyOtp(data);
          if (result.statusCode === 200) {
            sessionStorage.setItem('token', result.data.token)
            navigate('/dashboard');
          }
          console.log(result.data);
          const resultInfo = await authService.getUserInfo();
          return resultInfo;
        })
      );
    },
  });

  useEffect(() => {
    const onGetUserInfo = async () => {
      const result = await authService.getUserInfo();
      if (result.statusCode === 200) {
        navigate('/dashboard');
      }
    };
    onGetUserInfo();
  }, [authService, navigate]);

  const onChange = (el) => {
    if (isNaN(el.value)) return false;
    values.code.push(el.value);
    if (el.nextSibling) {
      el.nextSibling.focus();
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-sm mt-52">
        <form onSubmit={handleSubmit}>
          <h1 className="px-10">Enter OTP</h1>
          <div className="w-4/5 m-auto flex flex-row gap-2 my-1">
            {arrayCode.map((data, i) => {
              return (
                <input
                  type="text"
                  name={`code[${i}]`}
                  className="border border-orange w-10 h-10 rounded-md m-auto text-center"
                  maxLength={1}
                  key={i}
                  // value={data}
                  onChange={(e) => onChange(e.target, i)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <div className="w-4/5 m-auto flex flex-row gap-2 justify-center my-5">
            <button
              type="submit"
              className="bg-orange font-bold text-white w-full h-11 rounded focus:outline-none focus:shadow-outline"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
