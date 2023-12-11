import loginUser from "../assets/images/LoginUser.png";

export default function AuthLayout(props) {
    const {children} = props;
  return (
    <div className="flex h-screen bg-gradient-to-l from-white to-orange justify-end">
    <img src={loginUser} alt="" className="absolute w-2/4 left-20" />
    <div className="flex bg-white w-2/3 rounded-l-2xl justify-end">
      <div className="flex flex-col w-4/5 items-center">
        <p className="mt-10 text-center text-logo">
          🔗D-<span className="text-orange font-bold">Autochain</span>
        </p>
        {children}
      </div>
    </div>
  </div>
  )
}
