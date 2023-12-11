import AuthLayout from "../../../components/AuthLayout";

export default function ForgetPassword() {
  return (
    <AuthLayout>
      <div className="w-full max-w-sm mt-52">
        <h2 className="text-title">Forget Password</h2>
        <form className="pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange text-white font-bold w-full h-11 rounded focus:outline-none focus:shadow-outline"
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
