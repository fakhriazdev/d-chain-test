import axiosInstance from "../api/axiosInstance";

const AuthService = () => {
  const TOKEN_KEY = "token";

  const login = async (user) => {
    const { data } = await axiosInstance.post("/api/auth/login", user);
    return data;
  };

  const verifyOtp = async (payload) => {
    const { data } = await axiosInstance.post("/api/auth/verifyOtp", payload);
    console.log(payload);
    console.log(data);
    return data;
  };

  const logout = () => {
    sessionStorage.removeItem("token");
  };

  const forgetPassword = async (queryParams) => {
    const { data } = await axiosInstance.post(
      `/api/auth/forgot-password?email=${queryParams.email}`
    );
    return data;
  };

  const recoveryPassword = async (payload) => {
    console.log(payload);
    const data = await axiosInstance.put(
      "/api/auth/recovery-password",
      payload
    );
    return data;
  };

  const getUserInfo = async () => {
    const { data } = await axiosInstance.get("/api/users/me");
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
    recoveryPassword,
  };
};

export default AuthService;
