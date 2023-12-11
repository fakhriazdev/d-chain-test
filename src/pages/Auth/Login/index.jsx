import AuthLayout from "../../../components/AuthLayout";

export default function Login() {
  return (
    <AuthLayout>
      <div className="mt-52">
        <h1 className="text-title mb-3">Welcome</h1>
        <h5 className="text-lightgray">Login to access your account</h5>
        <div className="w-full max-w-xs">
          <form className="rounded px-0 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-base mb-2">Email</label>
              <input
                className="shadow-md border-0 rounded w-80 h-12"
                id="username"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-0">
              <label className="block text-base mb-2">Password</label>
              <input
                className="shadow-md appearance-none border-0 rounded w-80 h-12 text-gray-700 mb-5 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4 ml-44">
              <a className="text-orange">Forget Password?</a>
            </div>
            <button
              className="bg-orange text-white font-bold rounded focus:outline-none focus:shadow-outline w-80 h-12"
              type="button"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
