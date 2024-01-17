import axiosInstance from "../api/axiosInstance";

const AuthService = () => {
  const TOKEN_KEY = "token";

  const login = async (user) => {
    const { data } = await axiosInstance.post("/api/auth/login", user);
    return data;
  };

  const shortcutLogin = async (user) => {
    const { data } = await axiosInstance.post("/api/auth/shortcut-login", user);
    return data;
  };

  const verifyOtp = async (payload) => {
    const { data } = await axiosInstance.post("/api/auth/verifyOtp", payload);
    console.log(data);
    return data;
  };

  const logout = async () => {
    const { data } = await axiosInstance.post("/api/auth/logout");
    sessionStorage.removeItem("token");
    return data;
  };

  const forgetPassword = async (queryParams) => {
    const { data } = await axiosInstance.post(
      `/api/auth/forgot-password?email=${queryParams.email}`
    );
    return data;
  };

  const recoveryPassword = async (payload) => {
    const data = await axiosInstance.put(
      "/api/auth/recovery-password",
      payload
    );
    return data;
  };

  const changePassword = async (payload) => {
    console.log(payload);
    const { data } = await axiosInstance.post(
      "/api/auth/change-password",
      payload
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
    shortcutLogin,
    logout,
    getUserInfo,
    getTokenFromStorage,
    forgetPassword,
    verifyOtp,
    recoveryPassword,
    changePassword,
  };
};

export default AuthService;
