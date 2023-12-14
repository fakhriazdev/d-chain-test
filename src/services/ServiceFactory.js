import AuthService from "./AuthService";

const ServiceFactory = () => {
  return {
    authService: AuthService(),
  };
};

export default ServiceFactory;
