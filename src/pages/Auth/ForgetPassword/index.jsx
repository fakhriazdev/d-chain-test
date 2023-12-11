import loginUser from "../../../assets/images/LoginUser.png";

export default function ForgetPassword() {
  return (
    <div className="flex h-screen bg-orange justify-end">
      <img src={loginUser} alt="" className="absolute w-2/4 left-20" />
      <div className="flex bg-white w-2/3 rounded-l-2xl justify-end">
        <div className="flex flex-col w-4/5 items-center">
          <p className="mt-10 text-center text-logo">
            🔗D-<span className="text-orange font-bold">Autochain</span>
          </p>
          <div className="w-full max-w-sm mt-52">
            <h2 className="text-title">Forget Password</h2>
            <form className="pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-sm mb-2"
                  htmlFor="username"
                >
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
        </div>
      </div>
    </div>
  );
}
