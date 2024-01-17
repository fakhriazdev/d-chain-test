export const decodeJWT = () => {
  if (sessionStorage.getItem("token")) {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
};
