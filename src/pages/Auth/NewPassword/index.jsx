import AuthLayout from "../../../components/AuthLayout";

export default function OtpPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-sm mt-52">
        <form className="pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="username">
              Input OTP
            </label>
            <input
              className="shadow appearance-none border rounded w-1/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
            />
            <input
              className="shadow appearance-none border rounded w-1/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength={1}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange text-white w-full h-11 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
