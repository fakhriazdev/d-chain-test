import { useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext.jsx';
import { useContext, useEffect } from 'react';
import { authAction } from '../slices/authSlice';
import { decodeJWT } from '../utils/decodeJWT.js';

function AuthenticatedLayout() {
  const { authService } = useContext(ServiceContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {company_id} = decodeJWT();

  useEffect(() => {
    if (company_id) {
      const onGetUserInfo = async () => {
        try {
          const userInfo = await authService.getUserInfo();
          if (userInfo) {
            dispatch(authAction(() => userInfo));
          } else {
            navigate('/');
          }
        } catch (error) {
          navigate('/');
        }
      };
      onGetUserInfo();
    }
  }, [authService, dispatch, navigate]);

  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthenticatedLayout;
