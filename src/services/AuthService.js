import axiosInstance from "../api/axiosInstance";

const AuthService = () => {
  const TOKEN_KEY = "token";

  const login = async (user) => {
    const { data } = await axiosInstance.post("/api/auth/login", user);
    return data;
  };

  const verifyOtp = async (payload) => {
    const { data } = await axiosInstance.post("/api/auth/verifyOtp", payload);
    console.log(data);
    return data;
  };

  const logout = () => {
    sessionStorage.removeItem("token");
  };

  const forgetPassword = async (email) => {
    const { data } = await axiosInstance.post(
      "/api/auth/forget-password",
      email
    );
    return data;
  };

  const getUserInfo = async () => {
    const { data } = await axiosInstance.get("/api/user");
    return data;
  };

  const getTokenFromStorage = () => {
    return sessionStorage.getItem(TOKEN_KEY);
  };

  return {
    login,
    logout,
    getUserInfo,
    getTokenFromStorage,
    forgetPassword,
    verifyOtp,
  };
};

export default AuthService;
